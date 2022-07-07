import React, { useCallback, useState, useRef, useEffect } from 'react';
import {
  ApplicationSubmittedScreenConstant,
  NavigationStack,
  SCREENS,
} from '@constants/strings';
import { color } from '@styles/colorConstant';
import { TouchableOpacity, View, Animated } from 'react-native';
import { styles } from './styles';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';
import Button from '@components/Button';
import HamburgerMenuIcon from '@assets/icons/HamburgerMenuIcon';
import { Calendar } from 'react-native-calendars';
import { GetUserTimeSlot, PostUserTimeSlot } from '@api/Axios/client';
import { FlatList } from 'react-native-gesture-handler';
import { useToast } from 'react-native-toast-notifications';
import moment from 'moment-timezone';
import ButtonLoader from '@components/Loader';

const INITIAL_DATE = new Date();

const ApplicationSubmitedScreen = ({ navigation }) => {
  const [selected, setSelected] = useState([]);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showDate, setShowDate] = useState('');
  const [date, setDate] = useState('');
  const [loader, setLoader] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const toast = useToast();
  const translation = useRef(new Animated.Value(550)).current;

  let TimeZone = moment.tz.guess();
  let zoneGMT = moment(date).tz(TimeZone).format('Z');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const results = await GetUserTimeSlot();

    let obj = {};
    results.slotdata.map(item => {
      obj[item.date] = {
        selected: false,
        disableTouchEvent: false,
        disabled: false,
        slots: item.slots,
        selectedColor: color.themeColorShockingPink,
        selectedTextColor: color.white,
      };
    });
    setMarkedDates(obj);
  };

  const onDayPress = useCallback(
    day => {
      let cloneDates = { ...markedDates };
      let obj = {};
      Object.keys(cloneDates).map(key => {
        if (key === day.dateString) {
          setSelected(cloneDates[key].slots);
          setShowDate(moment(day.dateString).format('dddd, MMMM Do'));
          setDate(day.dateString);

          obj[key] = {
            ...cloneDates[key],
            selected: true,
          };
        } else {
          obj[key] = {
            ...cloneDates[key],
            selected: false,
          };
        }
      });

      setMarkedDates(obj);
      setShowTimeSlots(true);
    },
    [markedDates],
  );

  const submitTimeSlot = async () => {
    setLoader(true);
    if (selectedTimeSlot === null) {
      setLoader(false);

      toast.show('Kindly select time slot for interview', {
        type: 'danger',
        normalColor: color.errorAlertColor,
      });
    } else {
      const res = await PostUserTimeSlot(selectedTimeSlot);
      if (res.status === true) {
        setLoader(false);
        toast.show(res.message, {
          type: 'success',
          normalColor: color.successAlertColor,
        });
        navigation.replace(NavigationStack.RECRUITMENT, {
          screen: SCREENS.INTERVIEW_CONFIRM_SCREEN,
        });
      } else {
        setLoader(false);
        toast.show(res.message, {
          type: 'danger',
          normalColor: color.errorAlertColor,
        });
        navigation.replace(NavigationStack.RECRUITMENT, {
          screen: SCREENS.INTERVIEW_CONFIRM_SCREEN,
        });
      }
    }
  };

  useEffect(() => {
    showTimeSlots &&
      Animated.timing(translation, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
  }, [showTimeSlots, translation]);

  const getTime = time => {
    let timeFormatingIn24Hr = moment(time, 'h:mm A').format('HH:mm');

    let timeZoneFromPK = moment.tz(
      `${date} ${timeFormatingIn24Hr}`,
      'Asia/Karachi',
    );

    let timeZoneFromUserZones = timeZoneFromPK.tz(TimeZone).format('hh:mm A');
    return timeZoneFromUserZones;
  };

  return (
    <View>
      <View style={styles.parentView}>
        <TouchableOpacity
          style={styles.hamburgerMenuStyle}
          onPress={() => navigation.openDrawer()}>
          <HamburgerMenuIcon colorIcon={color.white} />
        </TouchableOpacity>

        <View style={styles.TextWrapper}>
          <Text
            fontFamily={FONT_FAMILY.MEDIUM}
            color={color.white}
            size={SIZE.HEADER_LARGE}>
            {ApplicationSubmittedScreenConstant.APPLICATION_SUBMITED}
          </Text>
          <Text
            fontFamily={FONT_FAMILY.REGULAR}
            numberOfLines={2}
            color={color.white}
            size={SIZE.XXXXSMALL}>
            {ApplicationSubmittedScreenConstant.APPLICATION_SUBMITED_SUBTITLE}
          </Text>
        </View>
      </View>

      <View style={styles.FooterContainer}>
        <View style={styles.calenderView}>
          <Calendar
            enableSwipeMonths
            disabledByDefault
            disableAllTouchEventsForDisabledDays
            current={INITIAL_DATE}
            style={styles.calendar}
            onDayPress={onDayPress}
            markedDates={markedDates}
          />
        </View>
      </View>

      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          transform: [{ translateX: translation }],
          height: 260,
          paddingHorizontal: 15,
        }}>
        <View style={styles.SlotsContainer}>
          <Text
            size={SIZE.XXXSMALL}
            numberOfLines={2}
            fontFamily={FONT_FAMILY.MEDIUM}
            color={color.blackBorderColor}>
            {`${showDate} (${TimeZone}, GMT${moment(date)
              .tz(zoneGMT)
              .format('Z')})`}
          </Text>

          <FlatList
            data={selected}
            keyExtractor={item => item._id}
            numColumns={2}
            contentContainerStyle={styles.flexStyle}
            horizontal={false}
            renderItem={({ item }) => {
              let timeZone = getTime(item.fromtime);

              return (
                <View style={styles.flatListView}>
                  <Button
                    borderRadius={5}
                    disabled={false}
                    onPress={() => {
                      setSelectedTimeSlot(item._id);
                    }}
                    label={timeZone}
                    textColor={
                      selectedTimeSlot === item._id
                        ? color.themeColorShockingPink
                        : color.blackBorderColor
                    }
                    isBackgroundColor={color.white}
                    isBorderColor={
                      selectedTimeSlot === item._id
                        ? color.themeColorShockingPink
                        : color.blackBorderColor
                    }
                    height={50}
                    width={'100%'}
                    isUppercase
                  />
                </View>
              );
            }}
          />
        </View>

        <View style={styles.ButtonView}>
          <Button
            borderRadius={5}
            disabled={loader}
            isBackgroundColor={color.themeColorShockingPink}
            isBorderColor={color.themeColorShockingPink}
            onPress={submitTimeSlot}
            label={ApplicationSubmittedScreenConstant.CONFIRM}
            textColor={color.white}
            height={50}
            isUppercase
            loading={loader}
            loader={<ButtonLoader animating={true} />}
          />
        </View>
      </Animated.View>
    </View>
  );
};

export default ApplicationSubmitedScreen;

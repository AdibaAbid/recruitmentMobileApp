import React, { useState, useEffect } from 'react';
import { InterviewConfirmedScreenConstants } from '@constants/strings';
import { color } from '@styles/colorConstant';
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import { styles } from './styles';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';
import HamburgerMenuIcon from '@assets/icons/HamburgerMenuIcon';
import { GetUserTimeSlot } from '@api/Axios/client';
import { SvgXml } from 'react-native-svg';
import meetingSvg from '@assets/svgs/MeetingSvg/meetingSvg';
import Button from '@components/Button';
import moment from 'moment-timezone';
import { useToast } from 'react-native-toast-notifications';

const InterviewConfirmedScreen = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [loader, setLoader] = useState(true);
  const [day, setDay] = useState('');
  const [time, setTime] = useState();
  const [GMT, setGMT] = useState('');
  const [meetingLink, setMeetingLink] = useState('');
  const toast = useToast();

  let TimeZone = moment.tz.guess();
  let zoneGMT = moment(date).tz(TimeZone).format('Z');

  useEffect(() => {
    let unmounted = false;

    const getData = async () => {
      const results = await GetUserTimeSlot();
      if (!unmounted) {
        setDay(results.userdata.slotday);
        setDate(results.userdata.slotdate);
        setMeetingLink(results.userdata.zoomlink);
        let res = getTime(results.userdata.fromtime);
        setTime(res);
        setGMT(zoneGMT.split(':')[0]);
      }
    };

    const getTime = selectedTime => {
      let timeFormatingIn24Hr = moment(selectedTime, 'h:mm A').format('HH:mm');

      let timeZoneFromPK = moment.tz(
        `${date} ${timeFormatingIn24Hr}`,
        'Asia/Karachi',
      );

      let timeZoneFromUserZones = timeZoneFromPK.tz(TimeZone).format('hh:mm A');
      return timeZoneFromUserZones;
    };
    getData();

    return () => {
      unmounted = true;
    };
  }, [TimeZone, date, zoneGMT]);

  useEffect(() => {
    if (time && GMT && day && date) {
      setLoader(false);
    }
  }, [GMT, date, day, time]);

  const OpenURL = async url => {
    const isSupported = Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      toast.show('Invalid link', {
        type: 'danger',
        normalColor: color.errorAlertColor,
      });
    }
  };
  return (
    <View>
      <View style={styles.parentView}>
        <TouchableOpacity
          style={styles.hamburgerMenuStyle}
          onPress={() => navigation.openDrawer()}>
          <HamburgerMenuIcon colorIcon={color.white} />
        </TouchableOpacity>
        <View style={styles.TextWrap}>
          <Text
            fontFamily={FONT_FAMILY.MEDIUM}
            color={color.white}
            size={SIZE.HEADER_LARGE}>
            {InterviewConfirmedScreenConstants.InterviewConfirmed}
          </Text>
        </View>
      </View>

      <View style={styles.FooterContainer}>
        <View style={styles.SVGView}>
          <SvgXml xml={meetingSvg} />
        </View>

        <View style={styles.interviewWrapper}>
          <Text
            fontFamily={FONT_FAMILY.MEDIUM}
            color={color.subTitleColor}
            size={SIZE.XXXXSMALL}>
            {InterviewConfirmedScreenConstants.Title}
          </Text>

          {loader ? (
            <ActivityIndicator
              size="large"
              color={color.themeColorShockingPink}
            />
          ) : (
            <>
              <View style={styles.textWrapper}>
                <Text
                  fontFamily={FONT_FAMILY.BOLD}
                  color={color.subTitleColor}
                  size={SIZE.XXSMALL}>
                  {`${day}, ${date}`}
                </Text>
                <Text
                  fontFamily={FONT_FAMILY.SEMI_BOLD}
                  color={color.subTitleColor}
                  size={SIZE.XXXXSMALL}>
                  {`${time} PST(GMT ${GMT})`}
                </Text>
              </View>

              <View style={styles.ButtonView}>
                <Button
                  borderRadius={5}
                  disabled={false}
                  onPress={() => OpenURL(meetingLink)}
                  isBorderColor={color.themeColorShockingPink}
                  isBackgroundColor={color.themeColorShockingPink}
                  label={InterviewConfirmedScreenConstants.joinMeeting}
                  textColor={color.white}
                  height={43}
                />
              </View>
            </>
          )}
        </View>

        <View style={styles.footerView}>
          <View style={styles.textView}>
            <Text
              fontFamily={FONT_FAMILY.MEDIUM}
              color={color.subTitleColor}
              numberOfLines={5}>
              {InterviewConfirmedScreenConstants.contactUsMsg}
            </Text>
          </View>

          <View style={styles.joinMettingBtnView}>
            <Button
              borderRadius={5}
              isBackgroundColor={color.white}
              isBorderColor={color.themeColorShockingPink}
              disabled={false}
              onPress={() => {
                Linking.openURL('mailto:recruitment@dotandlinelearning.com');
              }}
              label={InterviewConfirmedScreenConstants.ContactUs}
              textColor={color.themeColorShockingPink}
              height={40}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default InterviewConfirmedScreen;

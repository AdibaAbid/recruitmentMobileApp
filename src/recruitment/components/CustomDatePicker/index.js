import React, { useState } from 'react';
import {
  Platform,
  Modal,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { color } from '@styles/colorConstant';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalenderIcon from '@assets/icons/CalenderIcon';
import { DatePickerConstant } from '@constants/strings';
import { styles } from './style';

const CustomDatePicker = ({
  textStyle,
  defaultDate,
  onDateChange,
  error,
  errorShow,
}) => {
  const [date, setDate] = useState(new Date('1979-09-09'));
  const [formatedDate, setForamttedDate] = useState('1979-09-09');
  const [show, setShow] = useState(false);
  const [wasOnFocus, setWasOnFocus] = useState(false);

  const onChange = (e, selectedDate) => {
    if (selectedDate) {
      const currentDate = selectedDate;
      const selectDate = new Date(currentDate)
        .getDate()
        .toString()
        .padStart(2, '0');

      const selectMonth = new Date(currentDate).getMonth() + 1;
      const month = selectMonth.toString().padStart(2, '0');
      const selectYear = new Date(currentDate).getFullYear();
      const newDate = `${selectYear}-${month}-${selectDate}`;

      setDate(currentDate);
      onDateChange(newDate);

      setForamttedDate(newDate);
      setShow(Platform.OS === 'ios');
    }
  };

  const onAndroidChange = (e, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      const currentDate = selectedDate;
      const selectDate = new Date(currentDate)
        .getDate()
        .toString()
        .padStart(2, '0');

      const selectMonth = new Date(currentDate).getMonth() + 1;
      const month = selectMonth.toString().padStart(2, '0');

      const selectYear = new Date(currentDate).getFullYear();
      const newDate = `${selectYear}-${month}-${selectDate}`;

      setDate(newDate);
      setDate(currentDate);
      onDateChange(newDate);
      setForamttedDate(newDate);
    }
  };

  const onCancelPress = () => {
    setShow(false);
  };

  const onDonePress = () => {
    onDateChange(formatedDate);
    setShow(false);
  };

  const renderDatePicker = () => {
    const offset = new Date().getTimezoneOffset() * -1;
    return (
      <DateTimePicker
        timeZoneOffsetInMinutes={offset}
        minimumDate={new Date('1969/1/1')}
        maximumDate={new Date()}
        testID="dateTimePicker"
        value={date}
        mode="date"
        display="spinner"
        onChange={Platform.OS === 'ios' ? onChange : onAndroidChange}
      />
    );
  };

  return (
    <>
      <TouchableHighlight
        underlayColor={'transparent'}
        activeOpacity={0}
        onPress={() => {
          setWasOnFocus(true);
          setShow(true);
        }}
        style={textStyle}>
        <>
          <View style={styles.LabelView}>
            <Text
              fontFamily={FONT_FAMILY.REGULAR}
              size={SIZE.XXXSMALL}
              color={defaultDate ? color.black : color.TextColor}>
              {defaultDate ? defaultDate : formatedDate}
            </Text>

            {/* For Android */}
            {Platform.OS !== 'ios' && show && renderDatePicker()}

            {/* For IOS */}
            {Platform.OS === 'ios' && (
              <Modal
                transparent={true}
                animationType="slide"
                visible={show}
                supportedOrientations={['portrait']}
                onRequestClose={() => setShow(false)}>
                <View style={styles.bottomView}>
                  <TouchableHighlight
                    underlayColor={'transparent'}
                    style={styles.touchableHighlightParentView}
                    activeOpacity={1}
                    visible={show}
                    onPress={() => setShow(false)}>
                    <TouchableHighlight
                      underlayColor={'transparent'}
                      style={styles.touchableHighlightInnerView}>
                      <View style={styles.btnView}>
                        <View>{renderDatePicker()}</View>

                        <TouchableHighlight
                          underlayColor={'transparent'}
                          onPress={onCancelPress}
                          style={styles.btnCancel}>
                          <Text
                            color={color.themeColorShockingPink}
                            paddingHorizontal={20}
                            size={SIZE.XXXXSMALL}
                            style={styles.cancelTextField}
                            alignCenter>
                            {DatePickerConstant.Cancel}
                          </Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                          underlayColor={'transparent'}
                          onPress={onDonePress}
                          style={styles.btnDone}>
                          <Text
                            color={color.themeColorShockingPink}
                            size={SIZE.XXXXSMALL}
                            style={styles.doneTextField}
                            alignCenter>
                            {DatePickerConstant.done}
                          </Text>
                        </TouchableHighlight>
                      </View>
                    </TouchableHighlight>
                  </TouchableHighlight>
                </View>
              </Modal>
            )}
          </View>
          <TouchableOpacity onPress={() => renderDatePicker()}>
            <CalenderIcon />
          </TouchableOpacity>
        </>
      </TouchableHighlight>

      <View style={styles.ErrorView}>
        <Text
          fontFamily={FONT_FAMILY.SEMI_BOLD}
          size={SIZE.XSMALLEST}
          color={
            (error && wasOnFocus) || errorShow ? color.pinkRed : color.white
          }>
          {error}
        </Text>
      </View>
    </>
  );
};

CustomDatePicker.defaultProps = {
  textStyle: {},
  defaultDate: '',
};

CustomDatePicker.propTypes = {};
export default CustomDatePicker;

// const styles = StyleSheet.create({
//   btnCancel: {
//     right: 0,
//     top: -20,
//     left: 30,
//   },
//   btnDone: {
//     right: -220,
//     top: -60,
//   },
//   doneTextField: {
//     paddingHorizontal: 8,
//     paddingVertical: 10,
//     alignItems: 'center',
//     width: '40%',
//     borderColor: color.themeColorShockingPink,
//     borderWidth: 1,
//     borderRadius: 10,
//   },
//   cancelTextField: {
//     width: '40%',
//     paddingHorizontal: 8,
//     paddingVertical: 10,
//     borderColor: color.themeColorShockingPink,
//     borderWidth: 1,
//     borderRadius: 10,
//   },
//   btnView: {
//     backgroundColor: color.white,
//     borderRadius: 4,
//     overflow: 'hidden',
//   },
//   LabelView: { top: 6 },
//   bottomView: { flex: 1 },
//   touchableHighlightParentView: {
//     flex: 1,
//     alignItems: 'flex-end',
//     flexDirection: 'row',
//   },
//   touchableHighlightInnerView: {
//     flex: 1,
//     borderColor: color.lightPink,
//     borderWidth: 5,
//     height: 300,
//     backgroundColor: color.white,
//     marginHorizontal: -5,
//     borderRadius: 30,
//   },
// });

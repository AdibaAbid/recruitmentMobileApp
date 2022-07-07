import { color } from '@styles/colorConstant';
import { getWindowWidth } from '@utils/platformUtils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  datePickerTextStyle: {
    paddingVertical: 6,
    marginBottom: 0,
    paddingHorizontal: 15,
    border: color.silver,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: color.borderColor,
    color: color.black,
    alignContent: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
  },
  SafeAreaView: {
    flex: 1,
  },
  InputBoxWrapper: {
    marginBottom: 6,
    // marginTop: -10,
  },
  InputNameBoxWrapper: {
    marginBottom: 6,
    width: getWindowWidth() / 2.3,
  },
  PhoneNumberTextBox: {
    marginBottom: 6,
    marginTop: -10,
  },
  Row: {
    width: getWindowWidth() - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
    alignSelf: 'center',
  },
  DatePickerView: {
    marginBottom: 6,
    top: 3,
  },
});

import { getWindowWidth } from '@utils/platformUtils';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Row: {
    width: getWindowWidth() - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  InputTextWrapper: {
    marginBottom: 6,
    marginTop: -5,
  },
  RadioBtnView: {
    flex: 1,
    top: 5,
    left: 2,
  },
  InputBoxWrapper: {
    marginBottom: 8,
    marginTop: -10,
  },
});

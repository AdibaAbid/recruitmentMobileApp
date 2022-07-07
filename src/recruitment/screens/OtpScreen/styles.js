import { color } from '@styles/colorConstant';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  otpStyleBase: {
    height: 30,
    backgroundColor: color.transparent,
  },

  underlineStyleBase: {
    width: 50,
    height: 45,
    borderWidth: 2,
    borderColor: color.lightRed,
    color: color.black,
  },

  underlineStyleHighLighted: {
    borderColor: color.redBtn,
    color: color.redBtn,
  },
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'space-around',
    marginHorizontal: 30,
  },
  ButtonRow: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  ContainerView: {
    top: -50,
  },
  TextWrapper: {
    marginVertical: 20,
    textDecoration: 'underline',
    textDecorationColor: color.themeColorShockingPink,
  },
});

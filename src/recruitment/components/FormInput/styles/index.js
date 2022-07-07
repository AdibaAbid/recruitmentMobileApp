import { color } from '@styles/colorConstant';
import {
  FONT_FAMILY,
  getFontFamily,
  getFontSize,
  SIZE,
} from '@styles/FontProperties';
import { scaleHeight, scaleWidth } from '@utils/platformUtils';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ErrorView: {
    height: 15,
  },
  IconContainer: {
    position: 'absolute',
    right: 0,
    width: 20,
    marginHorizontal: 10,
  },
  InputBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  InputContainer: {
    justifyContent: 'flex-end',
  },
  InputBox: {
    borderRadius: scaleHeight(3),
    color: color.black,
    fontSize: getFontSize(SIZE.XXSMALL),
    backgroundColor: color.white,
    paddingLeft: scaleWidth(15),
    width: '100%',
    fontFamily: getFontFamily(FONT_FAMILY.REGULAR),
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputBoxWithNoEdit: {
    borderRadius: scaleHeight(3),
    borderColor: color.disabledBgColor,
    color: color.silver,
    fontSize: getFontSize(SIZE.XXSMALL),
    backgroundColor: color.disabledBgColor,
    paddingLeft: scaleWidth(15),
    width: '100%',
    fontFamily: getFontFamily(FONT_FAMILY.REGULAR),
    height: 45,
  },
});

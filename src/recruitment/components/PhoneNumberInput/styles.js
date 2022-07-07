import { color } from '@styles/colorConstant';
import {
  FONT_FAMILY,
  getFontFamily,
  getFontSize,
  SIZE,
} from '@styles/FontProperties';
import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  codeTextStyle: {
    color: color.themeColorShockingPink,
    marginLeft: -20,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 10 : 10,
    fontWeight: 'normal',
    backgroundColor: color.transparent,
    height: 30,
    fontSize: getFontSize(SIZE.XXXSMALL),
    fontFamily: getFontFamily(FONT_FAMILY.REGULAR),
  },

  textContainerStyle: {
    backgroundColor: color.transparent,
    color: color.themeColorShockingPink,
  },
  containerStyle: {
    backgroundColor: color.transparent,
    textAlign: 'center',
    height: 40,
  },
  textInputStyle: {
    fontFamily: getFontFamily(FONT_FAMILY.REGULAR),
    color: color.themeColorShockingPink,
    height: 43,
    backgroundColor: color.transparent,
    fontSize: getFontSize(SIZE.XXXSMALL),
    top: Platform.OS === 'ios' ? 0 : 1.8,
    left: -8,
  },
  errorViewStyle: {
    height: 25,
    marginBottom: -6,
    top: 2,
  },
  flagBtnStyle: {
    height: 40,
  },
});

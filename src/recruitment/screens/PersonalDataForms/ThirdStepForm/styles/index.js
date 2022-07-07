import { color } from '@styles/colorConstant';
import {
  FONT_FAMILY,
  getFontFamily,
  getFontSize,
  SIZE,
} from '@styles/FontProperties';
import { getWindowWidth } from '@utils/platformUtils';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Row: {
    width: getWindowWidth() - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 25,
  },
  iosAnimatedLoader: {
    position: 'absolute',
    right: 25,
    top: 15,
  },
  androidAnimatedLoader: {
    position: 'absolute',
    left: -35,
    top: 15,
  },
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: color.borderColor,
    width: getWindowWidth() / 2.3,
    paddingHorizontal: 8,
    color: color.black,
    height: 45,
    top: 3,
    fontFamily: getFontFamily(FONT_FAMILY.REGULAR),
    fontSize: getFontSize(SIZE.XXSMALL),
  },
  ErrorView: {
    height: 20,
    marginBottom: -20,
    paddingVertical: 4,
  },
});

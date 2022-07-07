import { color } from '@styles/colorConstant';
import {
  FONT_FAMILY,
  getFontFamily,
  getFontSize,
  SIZE,
} from '@styles/FontProperties';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    marginHorizontal: 20,
    top: 20,
  },
  toggleTex: {
    fontSize: getFontSize(SIZE.XXXXSMALL),
    fontFamily: getFontFamily(FONT_FAMILY.SEMI_BOLD),
    color: color.subTitleColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: 2,
    paddingHorizontal: 10,
  },
  toggleView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  ToggleButton: {
    flexDirection: 'row',
  },
});

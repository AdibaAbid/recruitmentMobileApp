import { color } from '@styles/colorConstant';
import {
  FONT_FAMILY,
  getFontFamily,
  getFontSize,
  SIZE,
} from '@styles/FontProperties';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  textPointStyle: {
    alignItems: 'flex-start',
    textAlign: 'left',
    fontFamily: getFontFamily(FONT_FAMILY.REGULAR),
    color: color.black,
    fontSize: getFontSize(SIZE.XXSMALL),
    width: '90%',
    paddingHorizontal: 8,
  },
  numberTextStyle: {
    width: '10%',
    paddingHorizontal: 8,
    textAlign: 'center',
    fontFamily: getFontFamily(FONT_FAMILY.BOLD),
    color: color.themeColorShockingPink,
    fontSize: getFontSize(SIZE.LARGE),
  },
  cardView: {
    width: '100%',
    borderColor: color.textBackgroundColor,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderRadius: 13,
    marginVertical: 10,
  },
  parentView: {
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 20,
    top: 20,
  },
});

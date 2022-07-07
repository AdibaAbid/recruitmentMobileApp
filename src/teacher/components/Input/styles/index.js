import sizes from '../../../../teacher/globals/sizes';
import { StyleSheet, Platform } from 'react-native';
import { HP, WP } from '../../../../teacher/constants/index';
import { FONTFAMILY } from '../../../../teacher/constants/index';
import { scale } from '../../../../teacher/constants/PixelRatio';
import { theme } from '../../../../teacher/theme/index';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    justifyContent: 'center',
  },
  inputStyle: {
    paddingHorizontal: WP('5'),
    justifyContent: 'center',
    color: theme.textDefault,
    height: Platform.OS === 'ios' ? 47 : 45,
    padding: 0,
    margin: 0,
    fontSize: scale(Number(sizes.S)),
    alignItems: 'center',
    top: 1,
    fontFamily: FONTFAMILY.REGULAR,
  },
  eyeIcon: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: WP('5'),
  },
  multilineStyle: {
    height: HP('17'),
    paddingVertical: Platform.OS === 'ios' ? 12 : 10,
  },

  iconStyle: {
    paddingHorizontal: WP('5'),
  },
});

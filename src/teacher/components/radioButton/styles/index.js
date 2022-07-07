import { StyleSheet } from 'react-native';
import { FONTFAMILY, HP, WP } from '../../../constants';
import { scale } from '../../../constants/PixelRatio';
import { theme } from '../../../theme';

export default StyleSheet.create({
  radioContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  radioButton: {
    borderWidth: 1,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginRight: WP('5'),
  },
  buttonStyle: {
    borderWidth: 1,
  },
  buttonWrapperStyle: {
    marginLeft: WP('5'),
  },
  labelStyle: {
    fontSize: scale(14),
    fontFamily: FONTFAMILY.REGULAR,
  },
  radioBtn: {
    width: '100%',
    paddingBottom: HP('0.5'),
    justifyContent: 'space-between',
  },
  colored: {
    backgroundColor: theme.bgColorBtn,
    borderRadius: 100,
  },
});

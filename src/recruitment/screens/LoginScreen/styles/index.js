import { StyleSheet } from 'react-native';
import { FONTFAMILY, HP, WP } from '../../../../teacher/constants/index';
import { theme } from '../../../../teacher/theme/index';
import sizes from '../../../../teacher/globals/sizes';
import { scale } from '../../../../teacher/constants/PixelRatio';

export default StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: 'center',
  },
  textInputContainer: {
    marginTop: HP('5'),
    paddingHorizontal: WP('8'),
  },
  forgotPass: {
    paddingVertical: HP('2'),
  },
  signUp: {
    marginTop: HP('4'),
  },
  btnCreateAccount: {
    borderWidth: 1,
    borderColor: theme.bgColorBtn,
  },
  terms: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: HP('2'),
    flexDirection: 'row',
  },
  termsAndCondition: {
    textAlign: 'center',
    color: theme.bgWhite,
    fontFamily: FONTFAMILY.REGULAR,
    fontSize: scale(sizes.XS),
    lineHeight: 20,
  },
  hrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: HP('2'),
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    backgroundColor: theme.borderColorInput,
    height: 1,
  },
  orView: {
    width: 40,
  },
  socialBtn: {
    borderWidth: 1,
    borderRadius: 5,
    height: 48,
    width: 82,
    marginVertical: HP('1'),
    borderColor: theme.borderColorInput,
  },
  social: {
    width: '100%',
    justifyContent: 'space-between',
  },
});

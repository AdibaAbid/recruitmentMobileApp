import { Platform, StyleSheet } from 'react-native';
import { FONTFAMILY, HP } from '../../../../teacher/constants/index';
import { theme } from '../../../../teacher/theme/index';
import { scale } from '../../../../teacher/constants/PixelRatio';
import sizes from '../../../../teacher/globals/sizes';
import { getWindowHeight } from '@utils/platformUtils';
import { color } from '@styles/colorConstant';

export default StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    backgroundColor: theme.bgTheme,
    flex: 1,
    justifyContent: 'center',
  },
  textInputContainer: {
    marginTop: HP('5'),
  },
  forgotPass: {
    paddingVertical: HP('3'),
  },
  signUp: {
    marginTop: HP('4'),
  },
  btnBackToLogin: {
    borderWidth: 1,
    borderColor: theme.textLight,
  },
  terms: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: HP('3'),
    flexDirection: 'row',
  },
  termsAndCondition: {
    textAlign: 'center',
    color: theme.bgWhite,
    fontFamily: FONTFAMILY.REGULAR,
    fontSize: scale(sizes.XS),
    lineHeight: 20,
  },
  countryCodeContainer: {
    flexDirection: 'row',
  },
  selectStyle: {
    marginRight: 10,
  },
  modalView: {
    width: '100%',
    height: getWindowHeight() * 2,
    borderRadius: 1,
    shadowColor: color.themeColorShockingPink,
    shadowOffset: {
      width: 5,
      height: 25,
    },
    shadowOpacity: Platform.OS === 'android' ? 0.3 : 0.2,
    shadowRadius: 28,
    elevation: 18,
    backgroundColor: color.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  flatListView: {},
  modalHeader: {
    width: '80%',
    top: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  modalLabelView: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalHeaderBtn: {
    height: 50,
    justifyContent: 'center',
  },
});

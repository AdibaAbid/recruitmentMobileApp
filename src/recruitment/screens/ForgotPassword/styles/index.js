import { StyleSheet } from 'react-native';
import { WP, HP } from '../../../../teacher/constants';
import { theme } from '../../../../teacher/theme/index';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.bgTheme,
    flex: 1,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
  },
  forgotPasswordWrapper: {
    paddingVertical: HP('4'),
    paddingHorizontal: WP('10'),
  },
  signUp: {
    marginTop: HP('4'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBackToLogin: {
    borderColor: theme.bgColorBtn,
  },
  input: {
    marginTop: HP('3'),
  },
  backLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: HP('3'),
  },
});

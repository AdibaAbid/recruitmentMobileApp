import { StyleSheet } from 'react-native';
import { theme } from '../../../../../theme';
import { HP, WP } from '../../../../../constants/index';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: WP('8'),
    paddingTop: HP('3'),
  },
  inputStyle: {
    backgroundColor: theme.borderDark,
    borderWidth: 0,
  },
  checkbox: { paddingVertical: 10 },
});

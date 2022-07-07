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
    flexDirection: 'row',
  },
  ageSelect: {
    flex: 1,
  },
  ageView: {
    marginTop: HP('3'),
  },
});

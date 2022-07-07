import { StyleSheet } from 'react-native';
// import { theme } from '../../../../teacher/theme/index';
import { HP, WP } from '../../../../../constants/index';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
  },
  flatListContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  levelBtnContainer: {
    marginHorizontal: WP('7'),
  },
  seperatorStyle: {
    marginBottom: HP('2'),
  },
  levelBtn: {
    borderWidth: 2,
    alignItems: 'flex-start',
  },
});

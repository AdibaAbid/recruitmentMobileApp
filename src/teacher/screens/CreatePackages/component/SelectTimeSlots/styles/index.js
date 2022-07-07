// import { theme } from '@teacher/theme/';
import { StyleSheet } from 'react-native';
import { theme } from '../../../../../theme';
import { HP, WP } from '../../../../../constants/index';

export default StyleSheet.create({
  container: {
    flexWrap: 'wrap',
  },
  logo: {
    flex: 1,
    alignItems: 'center',
  },
  flatListContainer: {
    justifyContent: 'center',
  },
  levelBtnContainer: {
    marginHorizontal: WP('1'),
  },
  seperatorStyle: {
    marginBottom: HP('2'),
  },
  levelBtn: {
    borderWidth: 1,
    alignItems: 'center',
  },
});

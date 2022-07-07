import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../../../../../constants/index';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: WP('8'),
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: WP('8'),
  },
  logo: {
    flex: 0.8,
    alignItems: 'center',
  },
  titleTextStyle: {
    paddingVertical: HP('1'),
    width: '25%',
  },
  valueTextStyle: {
    paddingHorizontal: HP('2'),
    paddingVertical: HP('1'),
  },
});

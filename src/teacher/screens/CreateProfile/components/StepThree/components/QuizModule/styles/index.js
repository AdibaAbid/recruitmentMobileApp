import { StyleSheet } from 'react-native';
import { WP, HP } from '../../../../../../../constants/';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginHorizontal: WP('6'),
  },
  uploadTxt: {
    paddingTop: HP('1'),
  },
  btnView: {
    width: 137,
  },
  innerleftTxt: {
    paddingHorizontal: WP('5'),
  },
  innerTxt: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: HP('2'),
  },
});

export default styles;

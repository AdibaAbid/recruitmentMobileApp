import { theme } from '../../../theme';
import { HP, WP } from '../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  customBtnStyle: {
    backgroundColor: theme.bgColorBtn,
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: WP('6'),
    marginTop: HP('3'),
  },
});

export default styles;

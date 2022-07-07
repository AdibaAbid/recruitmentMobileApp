import { theme } from '../../../../../../../theme';
import { WP } from '../../../../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerParentView: {
    flex: 1,
    padding: WP('3'),
  },
  inputStyle: {
    backgroundColor: theme.borderDark,
    borderWidth: 0,
    width: '100%',
  },
  searchParentView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;

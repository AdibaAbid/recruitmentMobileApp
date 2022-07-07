import { theme } from '../../../../../theme';
import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../../../constants';

export default StyleSheet.create({
  ProfHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
  HR: {
    borderBottomColor: theme.borderDark,
    paddingHorizontal: WP('10'),
    borderBottomWidth: 2,
    marginVertical: WP('4'),
    width: '120%',
  },
  ProfContainer: {
    marginBottom: HP('1'),
    backgroundColor: theme.bgWhite,
  },
  center: {
    alignItems: 'center',
    marginVertical: HP('0.9'),
    width: '60%',
    textAlign: 'right',
  },
  centerLeft: {
    alignItems: 'center',
    marginVertical: HP('1'),
    width: '40%',
  },
});

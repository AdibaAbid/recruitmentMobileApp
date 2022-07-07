import { theme } from '../../../../../theme';
import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../../../constants';

export default StyleSheet.create({
  PersonalInfoContainer: {
    flex: 1,
  },
  ProfHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
  ProfHeaderColumn: {
    justifyContent: 'flex-start',
  },
  ProfContainer: {
    marginBottom: HP('1'),
    backgroundColor: theme.bgWhite,
  },
  HR: {
    borderBottomColor: theme.borderDark,
    paddingHorizontal: WP('10'),
    borderBottomWidth: 2,
    marginVertical: WP('4'),
    width: '120%',
  },
  textSpacing: {
    paddingVertical: HP('1'),
  },
});

import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../../../teacher/theme/index';
import { HP, WP } from '../../../../teacher/constants/index';

export default StyleSheet.create({
  selectPickerContainer: {
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 48 : 47,
    borderRadius: 5,
    paddingRight: 8,
    borderColor: theme.borderColorInput,
    backgroundColor: theme.bgWhite,
  },
  label: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: WP('5'),
  },
  errorContainer: {
    paddingTop: HP('0.5'),
    marginBottom: HP('2'),
  },
  errorStyle: {
    borderColor: theme.bgNotification,
  },
});

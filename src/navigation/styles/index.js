import { theme } from '../../teacher/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  notificationText: {
    position: 'absolute',
    top: -5,
    left: 10,
    backgroundColor: theme.bgNotification,
    borderRadius: 50,
    width: 15,
    height: 15,
    alignItems: 'center',
  },
  notificationBtn: { marginHorizontal: 15 },
});

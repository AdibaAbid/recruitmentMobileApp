import { theme } from '../../../../../../../../../theme';
const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  TouchableBtn: {
    height: 28,
    width: 28,
    borderRadius: 50,
    borderColor: theme.borderLight,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  parentView: {
    borderColor: theme.borderLight,
    borderWidth: 1,
    borderRadius: 50,
    height: 45,
    width: 120,
    paddingHorizontal: 5,
  },
  innerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

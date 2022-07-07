import { theme } from '../../../../../theme';

const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  progressPercentage: {
    position: 'absolute',
    left: '45%',
    top: 5,
  },
  progressBar: {
    flexDirection: 'row',
    height: 23,
    width: '100%',
    backgroundColor: theme.bgWhite,
  },
  textWrapper: {
    position: 'absolute',
    zIndex: 1,
    right: 10,
    top: 1,
  },
});

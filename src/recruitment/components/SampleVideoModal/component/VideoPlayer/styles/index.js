import { color } from '@styles/colorConstant';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: color.pendingBgColor,

    width: '100%',
  },
  mediaPlayer: {
    width: '100%',
    height: 250,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: color.silverWhite,
    justifyContent: 'center',
  },
});

import { StatusBar, StyleSheet } from 'react-native';

const BAR_HEIGHT = StatusBar.currentHeight;

export default StyleSheet.create({
  statusBar: {
    height: BAR_HEIGHT,
  },
});

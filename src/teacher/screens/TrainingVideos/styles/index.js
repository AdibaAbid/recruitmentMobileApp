import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1 },
  pic: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
    width: '100%',
  },
  shadow: {
    width: '100%',
    height: '92%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    top: 9,
  },
  thumbnail: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  playBtn: {
    position: 'absolute',
    bottom: '35%',
    left: '40%',
  },
  touchableView: {
    top: -10,
  },
});

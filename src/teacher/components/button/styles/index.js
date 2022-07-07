import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    height: Platform.OS === 'android' ? 45 : 47,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

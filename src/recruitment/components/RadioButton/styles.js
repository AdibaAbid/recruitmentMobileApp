import { color } from '@styles/colorConstant';
import { StyleSheet } from 'react-native';
const styles = top =>
  StyleSheet.create({
    onPressTouch: {
      flexDirection: 'row',
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignContent: 'center',
      top: top,
    },
    container: {
      paddingVertical: 0,
      alignItems: 'center',
      marginBottom: 3,
    },
    selectedRadioCircle: {
      height: 23,
      width: 23,
      borderRadius: 100,
      borderColor: color.themeColorShockingPink,
      backgroundColor: color.themeColorShockingPink,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioText: {
      color: color.blackBorderColor,
      paddingHorizontal: 8,
      top: 1,
    },
    radioInnerCircle: {
      height: 23,
      width: 23,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: color.borderColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedRb: {
      width: 8,
      height: 8,
      borderRadius: 50,
      backgroundColor: color.white,
    },
    ErrorView: {
      height: 15,
    },
  });
export default styles;

import { color } from '@styles/colorConstant';
import { getWindowWidth } from 'src/recruitment/utils/platformUtils';

const { StyleSheet } = require('react-native');

export const styles = errorBgColor =>
  StyleSheet.create({
    centeredView: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 15,
      flexDirection: 'row',
      backgroundColor: errorBgColor,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      bottom: 20,
      backgroundColor: color.transparent,
    },
    modal: {
      width: getWindowWidth() - 40,
      justifyContent: 'center',
      borderRadius: 15,
    },
    textStyle: {
      top: 2,
      flex: 0.7,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      alignContent: 'center',
    },
    closeBtn: {
      flex: 0.2,
      width: 30,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  });

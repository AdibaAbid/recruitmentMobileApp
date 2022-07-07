const { color } = require('@styles/colorConstant');
const { StyleSheet } = require('react-native');

export const styles = width =>
  StyleSheet.create({
    TouchableBtn: {
      height: 20,
      width: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    parentView: {
      borderColor: color.borderColor,
      borderWidth: 1,
      borderRadius: 3,
      backgroundColor: color.white,
      width: width,
      height: 45,
      paddingHorizontal: 10,
    },
    ErrorView: {
      height: 15,
    },
    TextWrapper: {
      marginBottom: 5,
      top: 3,
    },
    InnerView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
  });

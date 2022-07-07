import { StyleSheet } from 'react-native';
const styles = toastOptions =>
  StyleSheet.create({
    TextBox: {
      width: '90%',
      backgroundColor: toastOptions.normalColor,
      borderRadius: 15,
      alignContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      flexDirection: 'row',
      marginBottom: 60,
    },
  });

export default styles;

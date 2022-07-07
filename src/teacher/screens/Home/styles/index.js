import { theme } from '../../../theme';
import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../constants';

const styles = bgColor =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: HP('2'),
    },
    header: {
      flex: 1,
      justifyContent: 'center',
    },
    progressView: {
      flex: 2,
      justifyContent: 'flex-start',
      marginTop: HP('3'),
    },
    completeProfileView: {
      marginTop: WP('3'),
      marginVertical: WP('2'),
      paddingHorizontal: HP('1'),
      borderColor: theme.greyLightBorder,
      borderWidth: 0.5,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 75,
      elevation: 3,
      shadowColor: theme.greyLightBorder,
      backgroundColor: theme.bgWhite,
      borderBottomWidth: 0.8,
      borderBottomColor: theme.borderDark,
    },
    midContent: {
      justifyContent: 'center',
      paddingHorizontal: HP('2'),
      flex: 1,
    },
    parentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    progressCircle: {
      borderRadius: 50,
      borderWidth: 1,
      backgroundColor: bgColor,
      borderColor: bgColor ? bgColor : theme.borderDark,
      height: 40,
      width: 40,
      marginRight: WP('3'),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default styles;

import { color } from '@styles/colorConstant';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 5,
  },
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: '10%',
  },
  HrView: {
    borderBottomColor: color.lightPink,
    borderBottomWidth: 1,
    top: '5%',
    width: '100%',
  },
});

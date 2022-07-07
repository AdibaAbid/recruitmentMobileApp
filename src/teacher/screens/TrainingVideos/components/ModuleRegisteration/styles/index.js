import { theme } from '../../../../../theme/';
import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../../../constants';

export const styles = StyleSheet.create({
  indexView: {
    width: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: HP('2'),
    top: -10,
  },
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentStyle: {
    paddingHorizontal: WP('2'),
    paddingBottom: HP('1'),
  },
  secondContainer: {
    width: '90%',
  },

  checkMarkView: {
    backgroundColor: theme.bgColorBtn,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  pinkBg: {
    backgroundColor: theme.lightBgThemePink,
    height: 60,
    position: 'absolute',
    top: 0,
    // left: -80,
    // zIndex: 20,
    width: '160%',
  },
});

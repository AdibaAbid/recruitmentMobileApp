import { StyleSheet } from 'react-native';
import { theme } from '../../../../../../../theme';
import { HP, WP } from '../../../../../../../constants/index';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  parentContainer: {
    flex: 1,
    paddingHorizontal: WP('8'),
  },
  logo: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: WP('8'),
    paddingTop: HP('3'),
  },
  inputStyle: {
    backgroundColor: theme.borderDark,
    borderWidth: 0,
  },
  checkbox: { paddingVertical: 10 },
  blackShadow: {
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.4,
    height: 57,
    width: 320,
    zIndex: 10,
  },
  imgStyle: {
    height: 190,
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    flexDirection: 'row',
    paddingVertical: HP('2'),
  },
  childContainer: {
    flex: 1,
    paddingHorizontal: WP('8'),
  },
});

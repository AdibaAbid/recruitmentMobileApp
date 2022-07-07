import { StyleSheet } from 'react-native';

import { HP, WP } from '../../../constants';
import { theme } from '../../../theme';

export default StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    borderWidth: 2,
    paddingHorizontal: WP('2.4'),
    paddingVertical: WP('3.5'),
    position: 'relative',
    alignSelf: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    // top: HP('0.5'),
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WP('20'),
  },
  txt: {
    justifyContent: 'center',
  },
  checkMark: {
    position: 'absolute',
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 13,
    borderBottomLeftRadius: 5,
    backgroundColor: theme.bgColorBtn,
  },
});

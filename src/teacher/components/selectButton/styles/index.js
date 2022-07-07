import { StyleSheet } from 'react-native';

import { WP } from '../../../constants';
import { theme } from '../../../theme';

export default StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: WP('5'),
    paddingVertical: WP('3'),
    position: 'relative',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  iconContainer: {
    justifyContent: 'center',
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
    width: 35,
    height: 25,
    borderBottomLeftRadius: 7,
    backgroundColor: theme.bgColorBtn,
  },
  slotCheckMark: {
    position: 'absolute',
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 20,
    borderBottomLeftRadius: 5,
    backgroundColor: theme.bgColorBtn,
  },
});

import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: WP('5'),
  },
  avatarImg: {
    width: 60,
    height: 60,
    borderRadius: 100,
    overflow: 'hidden',
  },
  profileName: {
    paddingLeft: WP('3'),
  },
  row: {
    flexDirection: 'row',
    marginTop: HP('0.5'),
  },
  badgeBg: {
    height: 20,
    width: 20,
    borderRadius: 2,
    transform: [{ rotate: '45deg' }],
    marginHorizontal: WP('1.5'),
  },
  svgIcon: {
    transform: [{ rotate: '-45deg' }],
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionMark: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
});

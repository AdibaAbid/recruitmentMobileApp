import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../constants';
import { theme } from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: HP('7'),
    paddingHorizontal: WP('5'),
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImg: {
    width: 52,
    height: 52,
    overflow: 'hidden',
    marginRight: WP('4'),
  },
  img: {
    width: 52,
    height: 52,
    borderRadius: 100,
  },
  profileName: {
    flex: 1,
    paddingVertical: HP('1'),
  },
  drawerMenuContainer: {
    flex: 1,
    marginTop: HP('5'),
  },
  drawerMenu: {
    flex: 1,
    flexDirection: 'row',
  },
  seperator: {
    marginBottom: HP('3'),
  },
  text: {
    flex: 1,
    marginTop: 3,
    marginLeft: WP('3'),
  },
  icon: {
    width: 20,
    alignItems: 'center',
  },
  hrow: {
    height: 1,
    marginVertical: HP('2'),
    backgroundColor: theme.borderDark,
  },
  footer: {
    alignItems: 'flex-end',
    paddingVertical: HP('2'),
  },
  row: {
    flexDirection: 'row',
    marginBottom: HP('1'),
  },
  badgeBg: {
    paddingHorizontal: 2,
  },
  svgIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

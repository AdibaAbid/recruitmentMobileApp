import { theme } from '../../../../../theme';
import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../../../constants';

export default StyleSheet.create({
  ProfHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  ProfContainer: {
    marginBottom: HP('5'),
    backgroundColor: theme.bgWhite,
  },
  HR: {
    borderBottomColor: theme.borderDark,
    paddingHorizontal: WP('10'),
    borderBottomWidth: 5,
    marginVertical: WP('4'),
    width: '120%',
  },
  avatarImg: {
    width: 90,
    height: 90,
    borderRadius: 100,
    overflow: 'hidden',
  },
  videoView: {
    // paddingVertical: HP('1'),
  },

  container: { flex: 1 },
  pic: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
    width: '100%',
  },
  shadow: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  playBtn: {
    position: 'absolute',
    bottom: '35%',
    left: '40%',
  },
  touchableView: {},
});

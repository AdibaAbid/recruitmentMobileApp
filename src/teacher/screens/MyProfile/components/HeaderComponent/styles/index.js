import { theme } from '../../../../../theme';
import { StyleSheet } from 'react-native';
import { HP } from '../../../../../constants';

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.bgWhite,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: HP('1'),
  },
  avatarImg: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
  },
  row: {
    flexDirection: 'row',
  },
  badgeBg: {
    paddingHorizontal: 2,
  },
  svgIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  editStyle: {
    position: 'absolute',
    borderRadius: 50,
    width: 38,
    height: 38,
    borderColor: theme.bgWhite,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.bgColorBtn,
    zIndex: 10,
    top: '45%',
  },
  headerNameView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: HP('2'),
  },
});

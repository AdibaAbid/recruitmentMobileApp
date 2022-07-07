import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../../../../../constants/index';
import { theme } from '../../../../../../../theme/index';

export default StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: theme.bgWhite,
    marginVertical: HP('1'),
    marginHorizontal: WP('1'),
    width: WP('70'),
  },
  messageContainer: {
    paddingHorizontal: WP('2'),
  },
  imageStyle: {
    height: HP('15'),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  demoContainer: {
    position: 'absolute',
    width: 45,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    borderBottomLeftRadius: 10,
    backgroundColor: theme.greenDark,
    borderTopRightRadius: 10,
  },
  gradeView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
  },
  onlineTag: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 5,
    position: 'absolute',
    top: 10,
    left: 5,
    borderWidth: 1,
    backgroundColor: theme.bgWhite,
    borderColor: theme.bgColorBtn,
  },
  courseTitle: {
    marginVertical: 5,
  },
  dates: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 3,
    alignItems: 'center',
  },
  picture: {
    width: 28,
    height: 28,
    borderRadius: 100,
    marginRight: 10,
    overflow: 'hidden',
  },
  icon: {
    alignItems: 'flex-end',
  },
  iconMargin: {
    marginRight: 5,
  },
  timingView: {
    flexDirection: 'row',
  },
  textWrapper: {
    paddingHorizontal: WP('4'),
    paddingVertical: HP('1'),
  },
});

import { theme } from '../../../../../theme';
import { HP, WP } from '../../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterTxt: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: WP('5'),
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: theme.borderDark,
    paddingVertical: HP('2'),
  },
  filterIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 5,
    borderColor: theme.bgTheme,
  },
  packageContainer: {
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingVertical: HP('2'),
    paddingHorizontal: WP('5'),
    marginVertical: 1,
  },
  packageFee: {
    paddingHorizontal: HP('1'),
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuSelection: {
    paddingHorizontal: WP('5'),
    position: 'absolute',
    top: 10,
    right: 0,
  },
  menu: {
    paddingLeft: 10,
    paddingVertical: 5,
  },
  flatListContainer: {
    paddingHorizontal: WP('5'),
    paddingVertical: HP('3'),
  },

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
  tagView: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    left: 5,
  },
  onlineTag: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: theme.bgWhite,
    borderColor: theme.bgColorBtn,
    marginHorizontal: WP('1'),
  },
  privateTag: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: theme.bgTheme,
    borderColor: theme.bgTheme,
  },
  courseTitle: {
    marginVertical: 5,
  },
  iconMargin: {
    marginRight: 5,
  },
  textWrapper: {
    paddingHorizontal: WP('4'),
    paddingVertical: HP('1'),
  },
  labelView: {
    position: 'absolute',
    top: '92%',
    right: 12,
    backgroundColor: theme.bgWhite,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.bgTheme,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  heading: {
    borderTopWidth: 0.7,
    borderTopColor: theme.borderDark,
  },
  optionsContainer: {
    width: 130,
    marginTop: 30,
    borderRadius: 5,
    borderColor: theme.borderDark,
  },
  optionWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  menuConatiner: {
    paddingTop: HP('3'),
    paddingHorizontal: WP('5'),
    paddingVertical: HP('1'),
  },
});

export default styles;

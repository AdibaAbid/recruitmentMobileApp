import { theme } from '../../../../../../../theme';
import { HP, WP } from '../../../../../../../constants';
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
    borderColor: theme.borderDark,
  },
  onlineTag: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: WP('2'),
  },
  OnlineTagView: {
    backgroundColor: theme.bgWhite,
    borderColor: theme.green,
    borderWidth: 1,
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
    marginVertical: HP('1'),
    marginHorizontal: WP('4'),
  },
  courseTitle: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  dates: {
    flexDirection: 'column',
  },
  iconMargin: {
    marginRight: 5,
  },
  numView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  packageFee: {
    paddingRight: HP('2'),
  },
  badgeContainer: {
    flexDirection: 'row',
  },
  menuSelection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  menu: {
    paddingLeft: 10,
    paddingVertical: 5,
  },
  flatListContainer: {
    paddingHorizontal: WP('5'),
    paddingVertical: HP('3'),
  },
  idText: {
    letterSpacing: 1,
    paddingHorizontal: 6,
    alignSelf: 'center',
  },
  letterSpacing: { letterSpacing: 1 },
  optionsContainer: {
    width: 160,
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

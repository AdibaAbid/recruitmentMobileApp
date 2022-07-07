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
    borderColor: theme.bgColorBtn,
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
  },
  dates: {
    flexDirection: 'column',
  },
  iconMargin: {
    marginRight: 5,
  },
  detailView: {
    // width: '70%',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
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
  premiumTag: {
    backgroundColor: theme.bgWhite,
    borderWidth: 1,
    borderColor: theme.bgTheme,
  },
  row: { flexDirection: 'row' },
});

export default styles;

import { theme } from '../../../theme';
import { HP, WP } from '../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  totalPaidInvoice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: HP('2'),
  },
  headerParentView: {
    flex: 1,
    paddingHorizontal: WP('4'),
  },
  totalView: {
    borderRadius: 10,
    paddingVertical: WP('3'),
    paddingHorizontal: HP('5'),
    backgroundColor: theme.transparentYellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paidInvoiceView: {
    borderRadius: 10,
    paddingVertical: WP('3'),
    paddingHorizontal: HP('3'),
    backgroundColor: theme.bgLightGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pendingView: {
    borderRadius: 10,
    paddingVertical: WP('3'),
    paddingHorizontal: HP('4'),
    backgroundColor: theme.lightBlueBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgView: {
    borderWidth: 1,
    borderColor: theme.borderLight,
    padding: HP('1.2'),
    borderRadius: 5,
    alignItems: 'center',
  },
  inputStyle: {
    backgroundColor: theme.borderDark,
    borderWidth: 0,
    width: '85%',
  },
  searchParentView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

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
  courseTitle: {
    marginVertical: 3,
  },
  rupees: {
    flexDirection: 'row',
    marginVertical: 3,
    alignItems: 'center',
  },
  iconMargin: {
    marginRight: 5,
  },
  timingView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  packageFee: {
    paddingRight: HP('2'),
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  flatListContainer: {
    paddingHorizontal: WP('5'),
    paddingVertical: HP('3'),
  },
});

export default styles;

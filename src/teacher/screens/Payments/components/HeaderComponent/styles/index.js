import { theme } from '../../../../../theme';
import { HP, WP } from '../../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  totalPaidInvoice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: HP('2'),
  },
  headerParentView: {
    flex: 1,
    paddingHorizontal: WP('4'),
  },
  totalView: {
    borderRadius: 100,
    height: 80,
    width: 80,
    backgroundColor: theme.bgWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.mustard,
    borderWidth: 1,
    alignSelf: 'center',
  },
  paidInvoiceView: {
    borderRadius: 100,
    height: 90,
    width: 90,
    backgroundColor: theme.bgColorBtn,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pendingView: {
    borderRadius: 100,
    height: 90,
    width: 90,
    backgroundColor: theme.bgWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: theme.mustard,
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
    marginBottom: HP('3'),
  },
});

export default styles;

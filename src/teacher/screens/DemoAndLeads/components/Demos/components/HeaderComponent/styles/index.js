import { theme } from '../../../../../../../theme';
import { HP, WP } from '../../../../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  totalPaidInvoice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: HP('2'),
  },
  headerParentView: {
    flex: 1,
    paddingHorizontal: WP('4'),
  },
  brownView: {
    borderRadius: 10,
    paddingVertical: WP('3'),
    paddingHorizontal: HP('1.5'),
    backgroundColor: theme.transparentYellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registeredView: {
    borderRadius: 50,
    height: 80,
    width: 80,
    marginHorizontal: HP('1'),
    backgroundColor: theme.bgColorBtn,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  schldView: {
    borderRadius: 50,
    height: 80,
    width: 80,
    marginHorizontal: HP('1'),
    backgroundColor: theme.bgWhite,
    borderWidth: 1,
    borderColor: theme.mustard,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  svgView: {
    borderWidth: 1,
    borderColor: theme.bgTheme,
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
  attentedView: {
    borderRadius: 50,
    height: 80,
    width: 80,
    marginHorizontal: HP('1'),
    backgroundColor: theme.mustard,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textStyle: {
    top: 5,
    justifyContent: 'center',
  },
  inactiveDemoBtn: {
    borderColor: theme.bgTheme,
    borderWidth: 1,
  },
});

export default styles;

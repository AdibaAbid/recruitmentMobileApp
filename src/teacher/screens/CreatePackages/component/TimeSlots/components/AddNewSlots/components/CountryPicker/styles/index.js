import { StyleSheet } from 'react-native';
import { theme } from '../../../../../../../../../theme';

export default StyleSheet.create({
  countryCodeContainer: {
    flexDirection: 'row',
  },
  selectStyle: {
    marginRight: 10,
  },

  flatListView: {},
  modalHeader: {
    width: '80%',
    top: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  modalLabelView: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalHeaderBtn: {
    height: 50,
    justifyContent: 'center',
  },
  inputStyle: {
    backgroundColor: theme.borderDark,
    borderWidth: 0,
  },
  TextViewWrapper: {
    flexDirection: 'row',
    width: ' 80%',
    alignItems: 'center',
    top: 15,
  },
  ImageView: {
    width: 25,
    height: 25,
    marginHorizontal: 15,
  },
  SearchBarView: {
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  yesToggle: {
    backgroundColor: theme.bgColorBtn,
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 70,
    borderRadius: 50,
  },
  noToggle: {
    backgroundColor: theme.borderLight,
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 70,
    borderRadius: 50,
  },
  toggleCircle: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: theme.bgWhite,
  },
  textStyle: {
    alignItems: 'center',
    paddingVertical: 1,
    paddingHorizontal: 2,
    top: 2,
  },
  parentConatiner: {
    flex: 1,
    marginHorizontal: 15,
  },
});

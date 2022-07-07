import { theme } from '../../../../../theme';
import { HP } from '../../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: HP('2'),
    flex: 1,
  },
  inputBox: {
    flex: 1,
  },
  BtnView: {
    justifyContent: 'center',
    alignContent: 'flex-end',
    backgroundColor: theme.bgWhite,
    height: 80,
    marginLeft: '-5%',
    width: '110%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 28,
    },
    shadowOpacity: 0.46,
    shadowRadius: 1.14,
    elevation: 17,
  },

  HeadingView: {
    marginTop: -HP('5'),
    marginVertical: HP('3'),
  },
  customBtnStyle: {
    backgroundColor: theme.bgColorBtn,
    width: '80%',
  },
  selectStyle: {
    marginRight: 10,
  },
  countryCodeContainer: {
    flexDirection: 'row',
  },
});

export default styles;

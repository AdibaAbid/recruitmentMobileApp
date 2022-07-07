import { theme } from '../../../../../theme';
import { HP, WP } from '../../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  AddPictureView: {
    height: 280,
    width: 280,
    backgroundColor: theme.borderDark,
    borderRadius: 200,
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageView: {
    borderRadius: 200,
    height: 300,
    width: 300,
  },
  HeadingView: {
    marginTop: -HP('5'),
    marginVertical: HP('3'),
  },
  ParentView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ChildView: {
    alignItems: 'center',
  },
  customBtnStyle: {
    backgroundColor: theme.bgColorBtn,
    width: '80%',
  },

  countryCodeContainer: {
    flexDirection: 'row',
  },
});

export default styles;

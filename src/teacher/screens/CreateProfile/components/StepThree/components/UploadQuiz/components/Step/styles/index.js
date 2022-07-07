import { theme } from '../../../../../../../../../theme';
import { HP } from '../../../../../../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  BtnView: {
    justifyContent: 'space-around',
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
    flexDirection: 'row',
    alignItems: 'center',
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
  ParentView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ChildView: {
    alignItems: 'center',
  },
  customNextBtnStyle: {
    backgroundColor: theme.bgColorBtn,
    width: 100,
  },
  customPrevBtnStyle: {
    backgroundColor: theme.bgWhite,
    borderColor: theme.bgTheme,
    borderWidth: 1,
    borderStyle: 'dashed',
    width: 100,
  },
  countryCodeContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    paddingTop: HP('3'),
  },
});

export default styles;

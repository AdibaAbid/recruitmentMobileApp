import { theme } from '../../../../../theme';
import { HP, WP } from '../../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: HP('2'),
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

  Btncontainer: {
    justifyContent: 'space-around',
    flex: 1,
  },
  customBtnStyle: {
    backgroundColor: theme.bgColorBtn,
    width: '80%',
  },
  countryCodeContainer: {
    flexDirection: 'row',
  },

  videoContainer: {
    width: '100%',
    borderRadius: 10,
    padding: WP('2'),
    paddingVertical: HP('2'),
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  howUploadBtn: {
    backgroundColor: 'transparent',
    borderColor: theme.bgTheme,
    borderWidth: 1,
    marginHorizontal: WP('3'),
    height: 32,
    borderRadius: 5,
  },
  uploadBtnView: {
    marginHorizontal: WP('3'),
  },
  uploadBtn: {
    backgroundColor: theme.bgColorBtn,
    borderColor: theme.bgColorBtn,
    borderWidth: 1,
    height: 32,
    borderRadius: 5,
    marginHorizontal: WP('8'),
  },
  formInputsContainer: {
    flex: 1,
  },
  customTextStyle: {
    lineHeight: 20,
    paddingHorizontal: WP('1'),
    paddingBottom: HP('1'),
  },
  btnContainer: {
    height: 50,
    width: '100%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  videoNameContainer: {
    padding: WP('2'),
    backgroundColor: theme.lightBgThemePink,
    borderRadius: 10,
  },
  videNameBg: {
    letterSpacing: 1,
    top: 4,
  },
});

export default styles;

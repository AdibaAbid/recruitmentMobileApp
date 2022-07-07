import { theme } from '../../../theme';
import { HP, WP } from '../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
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
  customBtnStyle: {
    backgroundColor: theme.bgColorBtn,
    width: '80%',
  },
  suggestionTextStyle: {
    paddingHorizontal: WP('4'),
    paddingVertical: HP('1'),
    margin: WP('1'),
    backgroundColor: theme.lightBgThemePink,
    borderRadius: 5,
  },
  suggestionView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  parentContainer: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  paddingVertical: {
    paddingVertical: HP('1'),
  },
  DescriptionEndText: {
    alignItems: 'flex-end',
    marginTop: HP('-2'),
  },
  selectPickerTopStyle: {
    marginVerticasl: HP('1'),
  },
  selectPickerBottomStyle: {
    marginBottom: HP('1'),
  },
  timeSlotHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dates: {
    flexDirection: 'row',
    marginTop: HP('2'),
    alignItems: 'center',
    marginRight: WP('3'),
  },
  iconMargin: {
    marginRight: 5,
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
    paddingHorizontal: 1,
    paddingVertical: HP('2'),
  },
  demoStyle: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.bgTheme,
  },
  privateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accessContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingVertical: HP('3'),
  },
  radioBtn: {
    marginTop: HP('-4'),
  },
  uploadImageView: {
    flexDirection: 'row',
    paddingVertical: HP('4'),
  },
});

export default styles;

import { Platform, StyleSheet } from 'react-native';
import { HP, WP } from '../../../teacher/constants/index';
import { theme } from '../../../teacher/theme/index';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? HP('2') : 0,
  },
  closeIcon: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: WP('5'),
  },
  mainContainer: {
    paddingHorizontal: WP('5'),
    marginBottom: HP('4'),
  },
  seperator: {
    marginBottom: HP('1.5'),
  },
  section: {
    flexDirection: 'row',
    paddingBottom: HP('2'),
    paddingHorizontal: WP('5'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    paddingHorizontal: WP('5'),
    paddingTop: HP('4'),
    alignItems: 'center',
  },
  modalCloseIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: WP('15'),
  },
  footerBtn: {
    paddingHorizontal: WP('8'),
    paddingTop: HP('2'),
    paddingBottom: HP('2'),
  },
  btnFilled: {
    backgroundColor: theme.bgColorBtn,
  },
  shadowBox: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: HP('2'),
    paddingHorizontal: WP('5'),
    marginVertical: 1,
  },
  horizontalSeperator: {
    marginRight: WP('3'),
  },
});

export default {
  touchOpacity: 0.7,
  width: '90%',
  fontFamily: 'Poppins',
};

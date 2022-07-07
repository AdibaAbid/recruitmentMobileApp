import { theme } from '../../../../../theme';
import { HP, WP } from '../../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  customBtnStyle: {
    backgroundColor: theme.bgColorBtn,
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: WP('6'),
    marginTop: HP('3'),
  },
  midContainer: { marginVertical: 3 },

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
    marginVertical: 5,
  },
  dates: {
    flexDirection: 'row',
    marginVertical: 3,
    alignItems: 'center',
    marginRight: WP('3'),
  },
  iconMargin: {
    marginRight: 5,
  },
  timingView: {
    flexDirection: 'row',
    marginTop: HP('1'),
    alignItems: 'center',
  },
  packageFee: {
    paddingRight: HP('2'),
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingHorizontal: WP('5'),
    paddingVertical: HP('3'),
  },
  textWrap: {
    marginVertical: 20,
  },
});

export default styles;

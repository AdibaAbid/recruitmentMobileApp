import { WP, HP } from '../../../../../../../../../constants';
import { StyleSheet } from 'react-native';
import { theme } from '../../../../../../../../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: HP('2'),
  },
  toggleView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  yesToggle: {
    backgroundColor: theme.bgColorBtn,
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 75,
    borderRadius: 50,
  },
  noToggle: {
    backgroundColor: theme.borderLight,
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 75,
    borderRadius: 50,
  },
  toggleCircle: {
    width: 23,
    height: 23,
    borderRadius: 50,
    backgroundColor: theme.bgWhite,
  },
  textStyle: {
    alignItems: 'center',
    paddingVertical: 1,
    paddingHorizontal: WP('2'),
    top: 2,
  },
  parentConatiner: {
    flex: 1,
    marginHorizontal: 15,
  },
});

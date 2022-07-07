import { HP } from '../../../../../../../constants';
import { StyleSheet } from 'react-native';
import { theme } from '../../../../../../../theme';

const styles = StyleSheet.create({
  parentConatiner: {
    flex: 1,
    marginHorizontal: 15,
  },
  daysContainer: {
    paddingVertical: HP('3'),
  },
  timeContainer: {
    paddingVertical: HP('1'),
  },
  selectStyle: {
    marginRight: 10,
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
  demoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;

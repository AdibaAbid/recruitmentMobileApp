import { theme } from '../../../../../theme';
import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: HP('3'),
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  progressView: {
    flex: 1,
  },
  notificationView: {
    marginTop: WP('4'),
    marginVertical: WP('2'),
    paddingHorizontal: HP('1'),
    borderColor: theme.greyLightBorder,
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 120,
    elevation: 3,
    shadowColor: theme.greyLightBorder,
    backgroundColor: theme.bgWhite,
    borderBottomWidth: 0.8,
    borderBottomColor: theme.borderDark,
  },
  scheduledView: {
    marginTop: WP('4'),
    marginVertical: WP('2'),
    paddingHorizontal: HP('1'),
    borderColor: theme.mustard,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 120,
    elevation: 3,
    shadowColor: theme.greyLightBorder,
    backgroundColor: theme.bgWhite,
  },
  midContent: {
    justifyContent: 'center',
    flex: 1,
  },
  parentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconStyle: {
    backgroundColor: theme.bgTheme,
    height: 50,
    width: 50,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
  },
  calendarStyle: {
    backgroundColor: theme.bgWhite,
    borderColor: theme.bgTheme,
    borderWidth: 1,
    height: 50,
    width: 50,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
  },
  textBox: {
    paddingHorizontal: WP('2'),
    width: '80%',
    height: 100,
    justifyContent: 'space-between',
  },
  notificationBox: {
    flexDirection: 'row',
    paddingHorizontal: WP('4'),
    borderWidth: 2,
    borderRadius: 10,
    borderColor: theme.borderDark,
    marginTop: HP('3'),
  },
  customButtonStyle: {
    backgroundColor: theme.mustard,
    width: '55%',
    alignSelf: 'flex-start',
  },
  customButtonClassStyles: {
    width: '55%',
    alignSelf: 'flex-start',
  },
  section: {
    flexDirection: 'row',
    paddingVertical: HP('1'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatListStyle: {
    paddingHorizontal: WP('1'),
    paddingVertical: HP('3'),
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { WP } from '../../../../../constants/';
import { theme } from '../../../../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.bgWhite,
  },
  scene: {
    flex: 1,
  },
  tabBarContainer: {
    backgroundColor: theme.mustard,
  },
  indicatorStyle: {
    backgroundColor: theme.bgTheme,
    height: 3,
  },
  tabBarView: {
    backgroundColor: theme.mustard,
    elevation: 0,
    width: '100%',
    marginHorizontal: WP('30'),
  },
  tabBarStyle: {
    width: 'auto',
    height: 45,
  },
});
export default styles;

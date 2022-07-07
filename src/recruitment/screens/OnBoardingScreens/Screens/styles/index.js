import { Dimensions, StyleSheet } from 'react-native';
import { HP, WP } from '../../../../../teacher/constants';
import { theme } from '../../../../../teacher/theme/index';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: theme.bgWhite,
  },
  container: {
    flex: 1,
    width,
    paddingBottom: HP('5'),
  },
  titleHeading: {
    justifyContent: 'center',
    height: HP('13'),
    paddingHorizontal: WP('5'),
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  child: {
    width,
    paddingHorizontal: WP('5'),
  },
  skip: {
    paddingHorizontal: WP('5'),
    alignSelf: 'flex-end',
    marginVertical: HP('1'),
  },
  desc: {
    height: HP('12'),
    paddingHorizontal: WP('5'),
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerBtn: {
    marginHorizontal: WP('5'),
  },
});

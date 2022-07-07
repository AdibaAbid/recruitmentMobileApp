import { color } from '@styles/colorConstant';
import { heightRatio } from '@utils/platformUtils';

import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  FooterContainer: {
    backgroundColor: color.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
    marginTop: -25,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: heightRatio > 1.0 ? 40 : 0,
  },
  parentView: {
    backgroundColor: color.themeColorShockingPink,
    height: 150,
    justifyContent: 'center',
  },

  hamburgerMenuStyle: {
    top: Platform.OS === 'android' ? -5 : -25,
    left: 5,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});

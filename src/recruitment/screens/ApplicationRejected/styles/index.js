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
  btnView: {
    height: 50,
    width: '49%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.themeColorShockingPink,
    borderRadius: 50,
  },
  btnParentView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    height: 100,
    backgroundColor: color.white,
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
  TextWrapSubmitApp: {
    marginTop: 9,
    textAlign: 'center',
  },
  ImageContainer: {
    borderRadius: 50,
    backgroundColor: color.errorAlertColor,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonView: {
    width: '80%',
    marginVertical: 30,
  },
  ImageView: {
    width: 50,
    height: 50,
  },
});

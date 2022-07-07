import { color } from '@styles/colorConstant';

import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  BtnContainer: {
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
  },
  FooterContainer: {
    backgroundColor: color.white,
    flex: 1,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
    paddingTop: 15,
  },
  DocumentView: {
    paddingHorizontal: 15,
  },
  parentView: {
    backgroundColor: color.themeColorShockingPink,
    height: 150,
    justifyContent: 'center',
  },

  hamburgerMenuStyle: {
    top: Platform.OS === 'android' ? 5 : -25,
    left: 5,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SVGView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  interviewWrapper: {
    height: 160,
    borderWidth: 1,
    borderColor: color.LightBorderColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  joinMettingBtnView: {
    alignContent: 'center',
    width: '44%',
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '20%',
    height: 200,
  },
  textView: {
    paddingHorizontal: 2,
    width: '60%',
  },
  textWrapperView: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  subtitleView: {
    marginTop: -4,
  },
});

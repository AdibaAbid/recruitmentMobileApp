import { color } from '@styles/colorConstant';
import {
  FONT_FAMILY,
  getFontFamily,
  getFontSize,
  SIZE,
} from '@styles/FontProperties';
import {
  getWindowHeight,
  getWindowWidth,
  heightRatio,
} from 'src/recruitment/utils/platformUtils';
import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  codeTextStyle: {
    color: color.themeColorShockingPink,
    marginLeft: -20,
    textAlign: 'center',
    marginTop: Platform.OS === 'android' ? -8 : 0,
    fontWeight: 'normal',
    height: getWindowHeight(),
  },
  centeredView: {
    height: getWindowHeight() * 1.8,
    width: getWindowWidth(),
    backgroundColor: color.lightGrey,
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    top: '-25%',
  },
  modalView: {
    // flex: 1,
    // height: getWindowHeight(),
    // justifyContent: 'center',
    // alignContent: 'center',
    // textAlign: 'center',
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
    // backgroundColor: 'rgba( 146, 150, 147,0.5)',
    backgroundColor: color.aliceBlue,
    borderRadius: 1,
    padding: 20,
  },
  FooterContainer: {
    backgroundColor: color.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 135,
    paddingHorizontal: 20,
    paddingVertical: heightRatio > 1.0 ? 40 : 0,
  },

  firstNextButton: {
    backgroundColor: color.themeColorShockingPink,
    paddingHorizontal: getWindowWidth() / 2.47,
    paddingVertical: 12,
    borderColor: color.themeColorShockingPink,
    borderWidth: 1,
    borderRadius: 3,
    heigh: 0,
    left: 60,
  },
  nextButton: {
    backgroundColor: color.themeColorShockingPink,
    borderColor: color.themeColorShockingPink,
    borderWidth: 1,
    paddingHorizontal: getWindowWidth() / 5.8,
    paddingVertical: 12,
    borderRadius: 3,
    heigh: 0,
    left: 60,
  },
  submitButton: {
    backgroundColor: color.themeColorShockingPink,
    borderColor: color.themeColorShockingPink,
    borderWidth: 1,
    paddingHorizontal: getWindowWidth() / 6.4,
    paddingVertical: 12,
    borderRadius: 3,
    heigh: 0,
    left: 60,
  },
  textColor: {
    color: color.white,
    textTransform: 'uppercase',
    fontFamily: getFontFamily(FONT_FAMILY.BOLD),
    fontSize: getFontSize(SIZE.SMALLEST),
  },
  previousButtonStyle: {
    backgroundColor: color.lightPink,
    borderColor: color.lightPink,
    borderWidth: 1,
    paddingHorizontal: getWindowWidth() / 7.5,
    paddingVertical: 12,
    borderRadius: 3,
    heigh: 0,
    right: 60,
  },
  progressStepsStyle: {
    topOffset: heightRatio > 1 ? 0 : 25,
    borderWidth: 1,
    progressBarColor: color.disabledColor,
    completedProgressBarColor: color.disabledColor,
    activeStepIconColor: color.themeColorShockingPink,
    completedStepIconColor: color.themeColorShockingPink,
    activeStepIconBorderColor: color.themeColorShockingPink,
    disabledStepIconColor: color.disabledColor,
    labelFontFamily: getFontFamily(FONT_FAMILY.SEMI_BOLD),
    labelColor: color.themeColorShockingPink,
    activeLabelColor: color.themeColorShockingPink,
    completedLabelColor: color.themeColorShockingPink,
    activeStepNumColor: color.themeColorShockingPink,
    completedStepNumColor: color.themeColorShockingPink,
    disabledStepNumColor: color.white,
    completedCheckColor: color.themeColorShockingPink,
    labelFontSize: getFontSize(SIZE.SMALLEST),
  },
  LoaderStyling: {
    backgroundColor: color.transparent,
    transform: [{ scale: 1.5 }],
  },
});

const { color } = require('@styles/colorConstant');
const { getFontFamily, FONT_FAMILY } = require('@styles/FontProperties');
const {
  scale,
  scaleWidth,
  getWindowHeight,
  scaleHeight,
} = require('src/recruitment/utils/platformUtils');
const { StyleSheet, Platform } = require('react-native');

export const styles = width =>
  StyleSheet.create({
    container: {
      borderColor: color.borderColor,
      borderWidth: 1,
      borderRadius: 3,
      color: color.themeColorShockingPink,
      backgroundColor: color.white,
      fontSize: scale(13),
      paddingLeft: scaleWidth(15),
      width: width,
      fontFamily: getFontFamily(FONT_FAMILY.REGULAR),
      // paddingVertical: Platform.OS === 'android' ? 6 : 7,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12,
    },
    centeredView: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
      width: '100%',
      top: '15%',
      height: getWindowHeight(),
      borderRadius: 1,
      shadowOffset: {
        width: 5,
        height: 25,
      },
      shadowRadius: 28,
      elevation: 18,
      backgroundColor: color.white,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },

    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
      padding: 10,
    },

    modalHeader: {
      top: 30,
      heigh: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    modalHeaderBtn: {
      // height: 50,
      justifyContent: 'center',
    },
    modalLabelView: {
      backgroundColor: color.white,
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      borderBottomColor: color.borderColor,
      marginHorizontal: 20,
      paddingVertical: 13,
    },
    noDataView: {
      flex: 0.6,
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'center',
    },
    TextWrapper: {
      marginBottom: 3,
      top: 3,
    },
    TextWrapperTitle: {
      justifyContent: 'center',
      paddingHorizontal: 5,
    },
    MultiSelectView: {
      flexDirection: 'row',
    },
    TextView: {
      backgroundColor: color.themeColorShockingPink,
      borderRadius: 16,
      paddingHorizontal: 10,
      marginRight: 5,
      alignSelf: 'center',
      top: -5,
    },
    ErrorView: {
      height: 15,
      marginBottom: 8,
    },
    DropDownSvgView: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 25,
      top: -3,
    },
    SVGView: {
      flexDirection: 'row',
      justifyContent: 'center',
      left: -5,
    },
    SearchBarView: {
      top: 30,
      paddingBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    InputBox: {
      borderColor: color.textBackgroundColor,
      borderWidth: 1,
      borderRadius: scaleHeight(3),
      color: color.blackBorderColor,
      backgroundColor: color.textBackgroundColor,
      fontSize: scale(13),
      paddingLeft: scaleWidth(15),
      width: '87%',
      fontFamily: getFontFamily(FONT_FAMILY.REGULAR),
      paddingVertical: Platform.OS === 'android' ? 5 : 8,
    },
    TextViewWrapper: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    parentContainerStyle: {
      marginBottom: -5,
    },
  });

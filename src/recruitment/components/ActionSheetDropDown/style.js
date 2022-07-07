const { color } = require('@styles/colorConstant');
const { getFontFamily, FONT_FAMILY } = require('@styles/FontProperties');
const {
  scale,
  scaleWidth,
  getWindowHeight,
  scaleHeight,
} = require('src/recruitment/utils/platformUtils');
const { StyleSheet, Platform } = require('react-native');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: color.borderColor,
    borderWidth: 1,
    borderRadius: 3,
    color: color.blackBorderColor,
    fontSize: scale(13),
    paddingLeft: scaleWidth(15),
    width: '100%',
    fontFamily: getFontFamily(FONT_FAMILY.REGULAR),
    paddingVertical: Platform.OS === 'android' ? 6 : 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
  },
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    height: getWindowHeight(),
  },
  modalView: {
    width: '100%',
    top: '15%',
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
    height: getWindowHeight(),
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
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  modalHeaderBtn: {
    height: 50,
    justifyContent: 'center',
  },
  modalLabelView: {
    borderBottomWidth: 1,
    borderBottomColor: color.borderColor,
    marginHorizontal: 10,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flatListView: {
    top: 10,
    justifyContent: 'center',
  },
  SVGView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textWrapper: {
    marginBottom: 3,
    top: 3,
  },
  TextWrapperPlaceholder: {
    margin: 3,
    justifyContent: 'center',
  },
  DropDownSvgView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
  },
  ErrorView: {
    height: 15,
    marginBottom: 8,
  },
  SearchBarView: {
    marginTop: 10,
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
    width: '86%',
    fontFamily: getFontFamily(FONT_FAMILY.REGULAR),
    paddingVertical: Platform.OS === 'android' ? 5 : 8,
  },
  ImageView: {
    width: 25,
    height: 25,
    marginHorizontal: 15,
  },

  TextViewWrapper: {
    flexDirection: 'row',
    width: ' 50%',
    alignItems: 'center',
  },
  TextWrapper: {
    top: 4,
  },
  parentContainerStyle: {
    marginBottom: -5,
  },
});

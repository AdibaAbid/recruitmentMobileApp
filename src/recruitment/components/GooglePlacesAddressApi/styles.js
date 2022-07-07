const { color } = require('@styles/colorConstant');
const { getFontFamily, FONT_FAMILY } = require('@styles/FontProperties');
const {
  scale,
  scaleWidth,
  getWindowHeight,
} = require('src/recruitment/utils/platformUtils');
const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  container: {
    borderColor: color.borderColor,
    borderWidth: 1,
    borderRadius: 3,
    color: color.blackBorderColor,
    backgroundColor: color.white,
    fontSize: scale(13),
    paddingLeft: scaleWidth(15),
    width: '100%',
    height: 45,
    fontFamily: getFontFamily(FONT_FAMILY.REGULAR),
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

  dropDownIconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    left: -5,
    top: -3,
  },
  titleTextStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    left: -5,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  modalHeaderBtn: {
    height: 50,
    justifyContent: 'center',
  },
  TextWrapper: {
    top: 1,
    width: '95%',
  },
  ErrorView: {
    height: 25,
    marginBottom: 8,
  },
  SearchBarView: {
    height: '100%',
    padding: 20,
  },
});

const { color } = require('@styles/colorConstant');
const { getFontFamily, FONT_FAMILY } = require('@styles/FontProperties');
const {
  scale,
  scaleWidth,
  getWindowHeight,
} = require('src/recruitment/utils/platformUtils');
const { StyleSheet, Platform } = require('react-native');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: color.lightPink,
    borderWidth: 1,
    borderRadius: 3,
    color: color.themeColorShockingPink,
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
  },
  modalView: {
    width: '100%',
    top: '4%',
    height: getWindowHeight() * 2,
    borderRadius: 1,
    shadowColor: color.themeColorShockingPink,
    shadowOffset: {
      width: 5,
      height: 25,
    },
    shadowOpacity: Platform.OS === 'android' ? 0.3 : 0.2,
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
    top: 30,
    justifyContent: 'center',
  },
});

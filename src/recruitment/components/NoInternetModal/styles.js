import { color } from '@styles/colorConstant';
import { FONT_FAMILY, getFontFamily } from '@styles/FontProperties';
import { getWindowHeight } from '@utils/platformUtils';

const { StyleSheet, Platform } = require('react-native');

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    margin: 0,
  },
  modalContainer: {
    paddingHorizontal: 15,
    width: '100%',
    top: '50%',
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
    height: getWindowHeight(),
    alignItems: 'center',
  },
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  SVGView: { height: 180 },
  modalTitle: {
    color: color.errorAlertColor,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: getFontFamily(FONT_FAMILY.SEMI_BOLD),
  },

  modalText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: getFontFamily(FONT_FAMILY.MEDIUM),
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

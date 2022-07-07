import { color } from '@styles/colorConstant';
import { getWindowHeight } from 'src/recruitment/utils/platformUtils';

const { StyleSheet, Platform } = require('react-native');

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: -50,
  },
  centeredInnerView: {
    flex: 1,
    marginTop: -10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '100%',
    top: '8%',
    height: getWindowHeight(),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: color.white,
    borderRadius: 1,
    padding: 20,
    alignItems: 'center',
    shadowColor: color.themeColorShockingPink,
    shadowOffset: {
      width: 5,
      height: 25,
    },
    shadowOpacity: Platform.OS === 'android' ? 0.8 : 0.2,
    shadowRadius: 28,
    elevation: 18,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  videoView: {
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    left: -20,
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  modalHeaderBtn: {
    height: 40,
    justifyContent: 'center',
    width: 50,
  },
});

import { color } from '@styles/colorConstant';
import { getWindowWidth } from 'src/recruitment/utils/platformUtils';

const { StyleSheet, Platform } = require('react-native');

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    backgroundColor: color.shadowColor,
  },
  modalView: {
    width: getWindowWidth() - 70,
    margin: 20,
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
    // marginBottom: -20,
    // textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 200,
    backgroundColor: color.silverWhite,
    // width: 260,
    borderRadius: 10,
    width: '100%',
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  closeBtn: {
    width: '100%',
    paddingTop: 20,
  },
});

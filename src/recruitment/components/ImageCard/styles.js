import { color } from '@styles/colorConstant';
import { getWindowWidth, scale } from 'src/recruitment/utils/platformUtils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  parentModalView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: -20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: getWindowWidth(),
    height: 200,
    backgroundColor: color.white,
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    shadowColor: color.themeColorShockingPink,
    shadowOffset: {
      width: 5,
      height: 25,
    },
    shadowOpacity: 0.7,
    shadowRadius: 18,
    elevation: 18,
  },
  CardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.lightPink,
    borderRadius: 15,
    height: 110,
    // marginBottom: 30,
  },
  ImageContainer: {
    left: 5,
    borderBottomLeftRadius: scale(50),
    borderTopLeftRadius: scale(50),
    borderBottomRightRadius: scale(50),
    borderTopRightRadius: scale(50),
    backgroundColor: color.white,
    width: 45,
    height: 45,
    justifyContent: 'center',
  },
  TextContainer: {
    flex: 1,
    paddingHorizontal: 13,
    justifyContent: 'center',
    width: '100%',
  },
  ImagePickerButton: {
    width: 35,
    height: 35,
    borderRadius: 50,
    right: 10,
    backgroundColor: color.themeColorShockingPink,
    justifyContent: 'center',
  },
  StyledImage: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: color.transparent,
    height: 45,
    width: 45,
  },
  Row: {
    flexDirection: 'row',
  },
  ButtonWrapper: {
    width: getWindowWidth() - 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextWrapper: {
    marginTop: -2,
  },
  TextHight: {
    paddingHorizontal: 4,
    marginTop: -3,
  },
  ErrorView: {
    height: 15,
    marginBottom: 30,
  },
  checkIconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.bgGreen,
    height: 45,
    borderRadius: 50,
    width: 45,
  },
});

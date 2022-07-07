import { color } from '@styles/colorConstant';
import { getWindowHeight, scale } from 'src/recruitment/utils/platformUtils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  CardView: {
    height: 240,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#edeff2',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: -20,
    },
    shadowRadius: 5,
    elevation: 7,
    marginLeft: 5,
    marginRight: 5,
  },
  Container: {
    backgroundColor: color.white,
    height: getWindowHeight() / 1.9,
    justifyContent: 'center',
  },
  Wrapper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    borderBottomLeftRadius: scale(50),
    borderTopLeftRadius: scale(50),
    borderBottomRightRadius: scale(50),
    borderTopRightRadius: scale(50),
    backgroundColor: color.blackShadow,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  StyledImage: {
    borderWidth: 2,
    borderColor: color.transparent,
    borderRadius: 50,
    height: 80,
    width: 80,
  },
  TextContainer: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: 'column',
  },
  width: {
    width: '100%',
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BtnRow: {
    flexDirection: 'row',
    flex: 1,
    height: 100,
    justifyContent: 'space-between',
  },
});

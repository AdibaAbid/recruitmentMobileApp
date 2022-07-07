import { color } from '@styles/colorConstant';
import { scale, scaleWidth } from 'src/recruitment/utils/platformUtils';
import { StyleSheet } from 'react-native';
import { FONT_FAMILY, getFontFamily } from '@styles/FontProperties';

export const styles = StyleSheet.create({
  InputContainer: {
    justifyContent: 'flex-end',
  },
  TextWrapper: {
    marginBottom: 3,
  },
  InputBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.white,
  },
  IconContainer: {
    position: 'absolute',
    right: 0,
    width: 20,
    marginHorizontal: 10,
  },
  ErrorView: {
    height: 15,
  },
  InputBox: {
    borderRadius: 5,
    color: color.blackBorderColor,
    fontSize: scale(13),
    backgroundColor: color.white,
    paddingLeft: scaleWidth(15),
    width: '100%',
    fontFamily: getFontFamily(FONT_FAMILY.REGULAR),
    paddingVertical: 8,
    textAlignVertical: 'top',
    height: 150,
    borderColor: color.borderColor,
    borderWidth: 1,
  },
});

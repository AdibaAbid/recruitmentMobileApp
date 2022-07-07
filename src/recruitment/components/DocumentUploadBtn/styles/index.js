import { color } from '@styles/colorConstant';
import { getWindowWidth } from 'src/recruitment/utils/platformUtils';
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
    height: 260,
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
    height: 90,
    marginTop: 8,
  },
  TextContainer: {
    flex: 1,
    paddingHorizontal: 13,
    justifyContent: 'center',
    width: '100%',
  },
  HighlightText: {
    paddingHorizontal: 4,
  },
  row: {
    flexDirection: 'row',
  },
  ButtonWrapper: {
    width: getWindowWidth() - 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImagePickerButton: {
    width: 35,
    height: 35,
    borderRadius: 50,
    right: 10,
    backgroundColor: color.subTitleColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ErrorView: {
    height: 25,
    paddingHorizontal: 5,
    marginBottom: 8,
  },
});

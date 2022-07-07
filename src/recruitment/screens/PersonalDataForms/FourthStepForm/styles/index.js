import { color } from '@styles/colorConstant';
import { getWindowWidth } from 'src/recruitment/utils/platformUtils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  InstructionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 0,
  },
  Wrapper: {
    height: 100,
    width: getWindowWidth() / 2.3,
    alignItems: 'flex-start',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: color.borderColor,
    paddingHorizontal: 15,
    justifyContent: 'center',
    marginVertical: 6,
  },
  VideoWrapper: {
    justifyContent: 'center',
    paddingVertical: 20,
  },
  BottomUploadProgressFileView: {
    height: 10,
    top: '-5%',
  },
  Row: {
    width: getWindowWidth() - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
    alignSelf: 'center',
  },
  TextWrapper: {
    marginTop: 20,
  },
  UploadProgressFileView: {
    height: 10,
    marginTop: -15,
  },
  ErrorView: {
    height: 15,
    marginBottom: 8,
  },
});

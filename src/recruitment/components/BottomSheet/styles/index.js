import { color } from '@styles/colorConstant';
import { getWindowHeight } from 'src/recruitment/utils/platformUtils';
import { StyleSheet } from 'react-native';
// import { theme } from "@teacher/theme/index";

export default StyleSheet.create({
  outerOverlay: {
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
    backgroundColor: color.purple,
    opacity: 0.3,
    height: getWindowHeight() * 2,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    // Here you can set a common style for all bottom sheets, or nothing if you
    // want different designs
    backgroundColor: color.silverWhite,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});

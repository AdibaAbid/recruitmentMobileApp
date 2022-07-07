import { color } from '@styles/colorConstant';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '97%',
    paddingBottom: '10%',
  },
  HrView: {
    borderBottomColor: color.lightPink,
    borderBottomWidth: 1,
    top: '5%',
    width: '100%',
  },
  HighlightView: {
    backgroundColor: color.themeColorShockingPink,
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 18,
    left: -18,
    borderRadius: 25,
    borderColor: color.transparent,
  },
  TextWithHighlight: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 1,
  },
});

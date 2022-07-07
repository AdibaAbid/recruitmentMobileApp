import { color } from '@styles/colorConstant';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardView: {
    borderColor: color.textBackgroundColor,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 13,
    marginVertical: 10,
  },
  parentView: {
    flex: 1,
    marginHorizontal: 20,
    top: 20,
  },
  btnView: {
    height: 50,
    width: '49%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.themeColorShockingPink,
    borderRadius: 50,
  },
  btnParentView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    height: 100,
    backgroundColor: color.white,
  },
});

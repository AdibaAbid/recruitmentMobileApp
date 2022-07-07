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
    marginHorizontal: 20,
  },
  btnView: {
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.themeColorShockingPink,
    borderRadius: 50,
    height: 40,
  },
  btnParentView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    height: 100,
    backgroundColor: color.white,
  },
  noDataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  SuccessIconView: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: color.bgGreen,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },

  PendingIconView: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: color.pendingBgColor,
    paddingHorizontal: 7,
    justifyContent: 'center',
  },
  commentText: {
    width: 200,
  },
});

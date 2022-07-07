const { color } = require('@styles/colorConstant');
const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  btnCancel: {
    right: 0,
    top: -20,
    left: 30,
  },
  btnDone: {
    right: -220,
    top: -60,
  },
  doneTextField: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignItems: 'center',
    width: '40%',
    borderColor: color.themeColorShockingPink,
    borderWidth: 1,
    borderRadius: 10,
  },
  cancelTextField: {
    width: '40%',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderColor: color.themeColorShockingPink,
    borderWidth: 1,
    borderRadius: 10,
  },
  btnView: {
    backgroundColor: color.white,
    borderRadius: 4,
    overflow: 'hidden',
  },
  LabelView: { top: 6 },
  bottomView: { flex: 1 },
  touchableHighlightParentView: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  touchableHighlightInnerView: {
    flex: 1,
    borderColor: color.lightPink,
    borderWidth: 5,
    height: 300,
    backgroundColor: color.white,
    marginHorizontal: -5,
    borderRadius: 30,
  },
  ErrorView: {
    height: 15,
  },
});

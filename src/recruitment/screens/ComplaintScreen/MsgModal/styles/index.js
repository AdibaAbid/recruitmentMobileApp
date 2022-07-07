const { color } = require('@styles/colorConstant');
const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    top: 4,
    right: -8,
    alignItems: 'flex-end',
  },
  headerIcon: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: -20,
  },
  msgText: {
    fontSize: 15,
    textAlign: 'center',
    color: color.subTitleColor,
  },
  headingText: {
    fontSize: 15,
    textAlign: 'center',
    color: color.themeColorShockingPink,
  },
  subHeadingText: {
    fontSize: 11,
    textAlign: 'center',
    color: color.silver,
  },
  MsgView: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

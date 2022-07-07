import { color } from '@styles/colorConstant';

import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  FooterContainer: {
    paddingHorizontal: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: color.white,
    marginTop: -15,
  },
  parentView: {
    backgroundColor: color.themeColorShockingPink,
    height: 150,
    justifyContent: 'center',
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
  hamburgerMenuStyle: {
    top: Platform.OS === 'android' ? 5 : -25,
    left: 5,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendar: {
    marginBottom: 10,
  },
  calenderView: {
    height: 360,
    marginTop: 5,
  },
  Slots: {
    flex: 1,
    padding: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  flexStyle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  flatListView: {
    margin: 6,
    width: 150,
    flexDirection: 'row',
  },
  TextWrapper: {
    width: '100%',
    paddingHorizontal: 20,
  },
  SlotsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  ButtonView: {
    flex: 0.5,
    justifyContent: 'center',
  },
});

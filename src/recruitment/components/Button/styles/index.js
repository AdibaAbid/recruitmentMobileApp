import { color } from '@styles/colorConstant';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  IconView: {
    marginVertical: -2,
  },
  IconSvgView: {
    alignItems: 'flex-end',
    marginHorizontal: 10,
  },
  LoaderView: {
    paddingTop: 5,
    position: 'absolute',
    left: 80,
    right: 0,
    top: 8,
  },
  TextWrapper: {
    alignItems: 'center',
    textAlign: 'center',
    top: 1,
    justifyContent: 'center',
  },
  BtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});

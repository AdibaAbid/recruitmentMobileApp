import { Platform, StyleSheet } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import styled from 'styled-components/native';
import {
  scaleHeight,
  scale,
  getWindowWidth,
} from 'src/recruitment/utils/platformUtils';
import { color } from './colorConstant';

export const SafeAreaContainer =
  Platform.OS === 'android'
    ? styled.SafeAreaView`
        flex: 1;
        background-color: ${color.white};
      `
    : styled.SafeAreaView`
        flex: 1;
        background-color: ${color.white};
        margin-top: ${hasNotch() ? scaleHeight(0) : scaleHeight(0)};
      `;

export const flatListStyles = StyleSheet.create({
  columnStyle: {
    alignItems: 'flex-end',
    marginHorizontal: scale(16),
    justifyContent: 'space-between',
  },
  historyColumnStyle: {
    marginLeft: (getWindowWidth() - 3 * scale(16)) / 6,
  },
  filterColumnStyle: {
    marginHorizontal: scale(16),
    marginVertical: scale(25),
    justifyContent: 'space-between',
  },
  rowStyle: {
    flexDirection: 'row',
  },

  containerStyle: {
    paddingBottom: scaleHeight(16),
  },
});

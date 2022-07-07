import React from 'react';
import styled from 'styled-components/native';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '../Text';
import { color } from '@styles/colorConstant';
import { Pressable, View } from 'react-native';
import CircleCloseIcon from '@assets/icons/CircleCloseIcon.js';
import styles from '@components/ToastAlert/style';

const TextView = styled.View`
  flex: 1;
`;

const ToastAlert = ({ toastOptions }) => {
  return (
    <View style={styles(toastOptions).TextBox}>
      <TextView>
        <Text
          color={color.white}
          numberOfLines={2}
          fontFamily={FONT_FAMILY.MEDIUM}>
          {toastOptions.message}
        </Text>
      </TextView>

      <Pressable onPress={() => toastOptions.onHide()}>
        <CircleCloseIcon size={16} iconColor={color.white} />
      </Pressable>
    </View>
  );
};

export default ToastAlert;

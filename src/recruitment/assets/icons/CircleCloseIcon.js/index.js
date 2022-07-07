import { color } from '@styles/colorConstant';
import * as React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

const ContainerBox = styled.View``;

const CircleCloseIcon = ({
  iconColor = color.themeColorShockingPink,
  size = 20,
}) => {
  return (
    <ContainerBox>
      <Icon name="closecircleo" size={size} color={iconColor} />
    </ContainerBox>
  );
};

export default CircleCloseIcon;

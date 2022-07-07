import { color } from '@styles/colorConstant';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const ContainerBox = styled.View``;

const BackIconButton = ({
  iconColor = color.themeColorShockingPink,
  size = 20,
}) => {
  return (
    <ContainerBox>
      <Icon name="chevron-back-outline" size={size} color={iconColor} />
    </ContainerBox>
  );
};

export default BackIconButton;

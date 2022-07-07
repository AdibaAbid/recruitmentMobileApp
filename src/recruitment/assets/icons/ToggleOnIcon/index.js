import { color } from '@styles/colorConstant';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import styled from 'styled-components/native';

const ContainerBox = styled.View`
  align-items: center;
`;

const ToggleOnIcon = ({ iconColor = color.lightPink, size = 36 }) => {
  return (
    <ContainerBox>
      <Icon name="toggle-on" size={size} color={iconColor} />
    </ContainerBox>
  );
};

export default ToggleOnIcon;

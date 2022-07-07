import { color } from '@styles/colorConstant';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import styled from 'styled-components/native';

const ContainerBox = styled.View`
  align-items: center;
`;

const ToggleOffIcon = ({ iconColor = color.darkGrey, size = 36 }) => {
  return (
    <ContainerBox>
      <Icon name="toggle-off" size={size} color={iconColor} />
    </ContainerBox>
  );
};

export default ToggleOffIcon;

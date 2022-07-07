import { color } from '@styles/colorConstant';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const ContainerBox = styled.View`
  left: -4px;
  align-items: center;
`;

const AddIcon = ({ iconColor = color.white, size = 25 }) => {
  return (
    <ContainerBox>
      <Icon name="add-circle-outline" size={size} color={iconColor} />
    </ContainerBox>
  );
};

export default AddIcon;

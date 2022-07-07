import { color } from '@styles/colorConstant';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

const ContainerBox = styled.View`
  align-items: flex-end;
`;

const EditIcon = ({ iconColor = color.white, size = 14 }) => {
  return (
    <ContainerBox>
      <Icon name="edit" size={size} color={iconColor} />
    </ContainerBox>
  );
};

export default EditIcon;

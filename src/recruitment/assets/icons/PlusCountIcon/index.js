import { theme } from '../../../../teacher/theme';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

const ContainerBox = styled.View`
  align-items: center;
`;

const PlusCountIcon = ({ iconColor = theme.bgTheme, size = 16 }) => {
  return (
    <ContainerBox>
      <Icon name="plus" size={size} color={iconColor} />
    </ContainerBox>
  );
};

export default PlusCountIcon;

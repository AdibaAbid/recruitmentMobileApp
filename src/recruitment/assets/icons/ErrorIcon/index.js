import { color } from '@styles/colorConstant';
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

const ContainerBox = styled.View`
  left: -18px;
`;

const ErrorIcon = ({ iconColor = color.errorAlertColor, size = 18 }) => {
  return (
    <ContainerBox>
      <Icon name="error-outline" size={size} color={iconColor} />
    </ContainerBox>
  );
};

export default ErrorIcon;

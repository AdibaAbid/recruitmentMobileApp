import { color } from '@styles/colorConstant';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const ContainerBox = styled.View``;

const PendingIcon = ({ iconColor = color.pendingIconColor, size = 18 }) => {
  return (
    <ContainerBox>
      <Icon name="ios-timer-outline" size={size} color={iconColor} />
    </ContainerBox>
  );
};

export default PendingIcon;

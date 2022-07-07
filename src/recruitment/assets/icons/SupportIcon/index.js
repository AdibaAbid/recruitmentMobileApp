import { color } from '@styles/colorConstant';
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

const ContainerBox = styled.View`
  margin-left: 10px;
`;

const SupportIcon = ({
  iconColor = color.themeColorShockingPink,
  size = 20,
}) => {
  return (
    <ContainerBox>
      <Icon name="support-agent" size={size} color={iconColor} />
    </ContainerBox>
  );
};

export default SupportIcon;

import { color } from '@styles/colorConstant';
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

const ContainerBox = styled.View`
  margin-left: 10px;
`;

const FAQS = ({ iconColor = color.themeColorShockingPink, size = 20 }) => {
  return (
    <ContainerBox>
      <Icon name="frequently-asked-questions" size={size} color={iconColor} />
    </ContainerBox>
  );
};

export default FAQS;

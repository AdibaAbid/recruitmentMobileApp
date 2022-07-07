import { color } from '@styles/colorConstant';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

const ContainerBox = styled.View`
  margin-top: 8px;
`;

const RecheckIcon = () => {
  return (
    <ContainerBox>
      <Icon name="check-circle" size={25} color={color.blackBorderColor} />
    </ContainerBox>
  );
};

export default RecheckIcon;

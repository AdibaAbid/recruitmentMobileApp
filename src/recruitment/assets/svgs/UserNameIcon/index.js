import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.View`
  margin-horizontal: 8px;
  justify-content: center;
  align-items: center;
`;

const UserNameIcon = ({ width, height }) => {
  return (
    <SvgView>
      <Svg width={width} height={height} viewBox="0 0 15.999 15.999">
        <Path
          id="Icon"
          d="M-6120-16074v-2c0-2.2,3.6-4,8-4s8,1.8,8,4v2Zm4-12a4,4,0,0,1,4-4,4,4,0,0,1,4,4,4,4,0,0,1-4,4A4,4,0,0,1-6116-16086Z"
          transform="translate(6120 16089.998)"
          fill="#b91381"
        />
      </Svg>
    </SvgView>
  );
};

export default UserNameIcon;

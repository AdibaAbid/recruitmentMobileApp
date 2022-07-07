import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.View`
  margin-horizontal: 8px;
  justify-content: center;
  align-items: center;
`;

const PasswordIcon = ({ width, height }) => {
  return (
    <SvgView>
      <Svg width={width} height={height} viewBox="0 0 14 16">
        <Path
          id="Path_49"
          data-name="Path 49"
          d="M7,8a2,2,0,1,1-2,2A2.006,2.006,0,0,1,7,8ZM7,2A2.006,2.006,0,0,0,5,4H9A2.006,2.006,0,0,0,7,2Zm5,14H2a2.006,2.006,0,0,1-2-2V6A2.006,2.006,0,0,1,2,4H3a4,4,0,0,1,8,0h1a2.006,2.006,0,0,1,2,2v8A2.006,2.006,0,0,1,12,16Z"
          fill="#b91381"
        />
      </Svg>
    </SvgView>
  );
};

export default PasswordIcon;

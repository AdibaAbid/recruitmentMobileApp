import React from 'react';
import Svg, { Path, Defs, G, ClipPath, Rect } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.View`
  margin-horizontal: 8px;
  justify-content: center;
  align-items: center;
`;

const EmailIcon = ({ width, height }) => {
  return (
    <SvgView>
      <Svg width={width} height={height} viewBox="0 0 16 12">
        <Defs>
          <ClipPath id="clip-path">
            <Rect width={width} height={height} fill="none" />
          </ClipPath>
        </Defs>
        <G id="Mail" clip-path="url(#clip-path)">
          <Path
            id="Path_642"
            data-name="Path 642"
            d="M14,2H2L8,7ZM0,2A2.006,2.006,0,0,1,2,0H14a2.006,2.006,0,0,1,2,2v8a2.006,2.006,0,0,1-2,2H2a2.006,2.006,0,0,1-2-2Z"
            fill="#b91381"
          />
        </G>
      </Svg>
    </SvgView>
  );
};

export default EmailIcon;

import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.View`
  margin-horizontal: 8px;
  justify-content: center;
  align-items: center;
`;

const SubmitCheckIcon = ({ width, height }) => {
  return (
    <SvgView>
      <Svg width={width} height={height}>
        <G
          id="Icon_feather-check-circle"
          data-name="Icon feather-check-circle"
          transform="translate(2.505 2.526)">
          <Path
            id="Path_713"
            data-name="Path 713"
            d="M46.1,22.569v1.982A21.547,21.547,0,1,1,33.317,4.857"
            transform="translate(-3 -2.991)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="9"
          />
          <Path
            id="Path_714"
            data-name="Path 714"
            d="M41.512,6,19.964,27.569,13.5,21.1"
            transform="translate(1.583 -1.677)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="9"
          />
        </G>
      </Svg>
    </SvgView>
  );
};

export default SubmitCheckIcon;

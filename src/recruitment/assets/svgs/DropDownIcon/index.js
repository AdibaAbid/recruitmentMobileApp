import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.View`
  justify-content: center;
  align-items: center;
`;

const DropDownIconSvg = ({ width, height }) => {
  return (
    <SvgView>
      <Svg width={width} height={height} viewBox="0 0 9.4 6.1">
        <Path
          id="Path_646"
          data-name="Path 646"
          d="M6.7,8.1,2,3.4,3.4,2,6.7,5.3,10,2l1.4,1.4Z"
          transform="translate(-2 -2)"
          fill="#6B6B6B"
        />
      </Svg>
    </SvgView>
  );
};

export default DropDownIconSvg;

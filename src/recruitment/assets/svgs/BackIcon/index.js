import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.View`
  margin-horizontal: 8px;
  top: 3px;
  justify-content: center;
  align-items: center;
`;

const BackIcon = ({ width, height, color, marginHorizontal }) => {
  return (
    <SvgView>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 7 8"
        style={{ marginTop: marginHorizontal }}>
        <Path
          id="Polygon_1"
          data-name="Polygon 1"
          d="M4,0,8,7H0Z"
          transform="translate(0 8) rotate(-90)"
          fill={color}
        />
      </Svg>
    </SvgView>
  );
};

export default BackIcon;

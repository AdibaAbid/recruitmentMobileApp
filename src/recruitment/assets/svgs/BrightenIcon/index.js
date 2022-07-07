import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.View`
  justify-content: center;
  align-items: center;
`;

const BrightenIcon = ({ width, height, color }) => {
  return (
    <SvgView>
      <Svg width={width} height={height} viewBox="0 0 25.852 25.852">
        <Path
          id="Icon_metro-brightness"
          data-name="Icon metro-brightness"
          d="M15.5,8.391a6.463,6.463,0,1,0,6.463,6.463A6.463,6.463,0,0,0,15.5,8.391Zm0,10.5V10.815a4.039,4.039,0,0,1,0,8.079Zm0,4.039a1.616,1.616,0,0,1,1.616,1.616v1.616a1.616,1.616,0,0,1-3.232,0V24.549A1.616,1.616,0,0,1,15.5,22.933Zm0-16.158A1.616,1.616,0,0,1,13.881,5.16V3.544a1.616,1.616,0,1,1,3.232,0V5.16A1.616,1.616,0,0,1,15.5,6.775Zm11.31,6.463a1.616,1.616,0,0,1,0,3.232H25.192a1.616,1.616,0,0,1,0-3.232ZM7.418,14.854A1.616,1.616,0,0,1,5.8,16.47H4.186a1.616,1.616,0,0,1,0-3.232H5.8A1.616,1.616,0,0,1,7.418,14.854Zm16.077,5.713,1.143,1.143a1.616,1.616,0,0,1-2.285,2.285l-1.143-1.143a1.616,1.616,0,0,1,2.285-2.285ZM7.5,9.142,6.357,8A1.616,1.616,0,0,1,8.642,5.714L9.784,6.857A1.616,1.616,0,0,1,7.5,9.142Zm16,0A1.616,1.616,0,0,1,21.21,6.857l1.143-1.143A1.616,1.616,0,0,1,24.637,8ZM7.5,20.567a1.616,1.616,0,0,1,2.285,2.285L8.642,23.994a1.616,1.616,0,0,1-2.285-2.285Z"
          transform="translate(-2.571 -1.928)"
          fill={color}
        />
      </Svg>
    </SvgView>
  );
};

export default BrightenIcon;

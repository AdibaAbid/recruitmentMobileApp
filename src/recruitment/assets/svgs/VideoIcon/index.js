import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.View`
  margin-horizontal: 8px;
  justify-content: center;
  align-items: center;
`;

const VideoIcon = ({ width, height }) => {
  return (
    <SvgView>
      <Svg width={width} height={height} viewBox="0 0 26.275 17.517">
        <Path
          id="Icon_awesome-video"
          data-name="Icon awesome-video"
          d="M15.336,4.5H2.18A2.18,2.18,0,0,0,0,6.68V19.836a2.18,2.18,0,0,0,2.18,2.18H15.336a2.18,2.18,0,0,0,2.18-2.18V6.68A2.18,2.18,0,0,0,15.336,4.5Zm8.64,1.72-5,3.449v7.18l5,3.444a1.463,1.463,0,0,0,2.3-1.177V7.4A1.463,1.463,0,0,0,23.976,6.22Z"
          transform="translate(0 -4.5)"
          fill="#b91381"
        />
      </Svg>
    </SvgView>
  );
};

export default VideoIcon;

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.View`
  justify-content: center;
  align-items: center;
  left: 20px;
`;

const ShareAFriendIcon = ({ width, height }) => {
  return (
    <SvgView>
      <Svg width={width} height={height} viewBox="0 0 16.483 16.483">
        <Path
          id="Icon_metro-share"
          data-name="Icon metro-share"
          d="M16.478,13.26a2.567,2.567,0,0,0-1.851.786L7.689,10.577a2.577,2.577,0,0,0,0-.815l6.938-3.469A2.575,2.575,0,1,0,13.9,4.5a2.593,2.593,0,0,0,.032.408L7,8.38a2.575,2.575,0,1,0,0,3.579l6.938,3.469a2.575,2.575,0,1,0,2.543-2.168Z"
          transform="translate(-2.571 -1.928)"
          fill="#b91381"
        />
      </Svg>
    </SvgView>
  );
};

export default ShareAFriendIcon;

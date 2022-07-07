import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  left: 20px;
`;

const LogoutIcon = ({ width, height }) => {
  return (
    <SvgView>
      <Svg width={width} height={height} viewBox="0 0 16.552 14.483">
        <Path
          id="Icon_open-account-logout"
          data-name="Icon open-account-logout"
          d="M6.207,0V2.069h8.276V12.414H6.207v2.069H16.552V0ZM4.138,4.138,0,7.241l4.138,3.1V8.276h8.276V6.207H4.138Z"
          fill="#b91381"
        />
      </Svg>
    </SvgView>
  );
};

export default LogoutIcon;

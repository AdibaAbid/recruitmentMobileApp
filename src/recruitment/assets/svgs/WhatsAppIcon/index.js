import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.TouchableOpacity`
  margin-horizontal: 8px;
  justify-content: center;
  align-items: center;
`;

const WhatsAppIcon = ({ width, height }) => {
  return (
    <SvgView>
      <Svg width={width} height={height} viewBox="0 0 22.348 22.348">
        <Path
          id="Icon_awesome-whatsapp"
          data-name="Icon awesome-whatsapp"
          d="M19,5.5A11.078,11.078,0,0,0,1.571,18.861L0,24.6l5.871-1.541A11.04,11.04,0,0,0,11.164,24.4h0A11.181,11.181,0,0,0,22.348,13.329,11.118,11.118,0,0,0,19,5.5Zm-7.832,17.04A9.188,9.188,0,0,1,6.48,21.255l-.334-.2-3.482.913.928-3.4-.219-.349a9.222,9.222,0,1,1,17.1-4.894,9.307,9.307,0,0,1-9.308,9.208Zm5.048-6.894c-.274-.14-1.636-.808-1.891-.9s-.439-.14-.624.14-.713.9-.878,1.087-.324.21-.6.07A7.532,7.532,0,0,1,8.46,12.75c-.284-.489.284-.454.813-1.511a.513.513,0,0,0-.025-.484c-.07-.14-.624-1.5-.853-2.055s-.454-.464-.624-.474-.344-.01-.529-.01A1.025,1.025,0,0,0,6.5,8.56a3.109,3.109,0,0,0-.968,2.31,5.421,5.421,0,0,0,1.127,2.863,12.365,12.365,0,0,0,4.729,4.18,5.415,5.415,0,0,0,3.322.693,2.834,2.834,0,0,0,1.866-1.317,2.314,2.314,0,0,0,.16-1.317C16.676,15.848,16.491,15.778,16.217,15.644Z"
          transform="translate(0 -2.25)"
          fill="#b91381"
        />
      </Svg>
    </SvgView>
  );
};

export default WhatsAppIcon;

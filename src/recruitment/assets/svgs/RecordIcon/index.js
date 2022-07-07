import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.View`
  justify-content: center;
  align-items: center;
`;

const RecordIcon = ({ width, height, color }) => {
  return (
    <SvgView>
      <Svg width={width} height={height} viewBox="0 0 28.35 24.486">
        <G
          id="Icon_material-record-voice-over"
          data-name="Icon material-record-voice-over"
          transform="translate(-1.5 -3)">
          <Path
            id="Path_655"
            data-name="Path 655"
            d="M17.81,12.655A5.155,5.155,0,1,1,12.655,7.5,5.155,5.155,0,0,1,17.81,12.655Z"
            transform="translate(-0.845 -0.634)"
            fill={color}
          />
          <Path
            id="Path_656"
            data-name="Path 656"
            d="M11.81,19.753c-3.441,0-10.31,1.727-10.31,5.155v2.577H22.12V24.908C22.12,21.48,15.251,19.753,11.81,19.753Zm10-12.423L19.645,9.508a4.275,4.275,0,0,1,0,5.013L21.81,16.7A6.6,6.6,0,0,0,21.81,7.33ZM26.076,3l-2.1,2.1a10.282,10.282,0,0,1,0,13.841l2.1,2.1A12.667,12.667,0,0,0,26.076,3Z"
            fill={color}
          />
        </G>
      </Svg>
    </SvgView>
  );
};

export default RecordIcon;

import React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.TouchableOpacity`
  margin-horizontal: 8px;
  justify-content: center;
  align-items: center;
`;

const EmailSocialIcon = ({ width, height }) => {
  return (
    <SvgView>
      <Svg
        id="Group_147"
        data-name="Group 147"
        width={width}
        height={height}
        viewBox="0 0 22.348 22.348">
        <G
          id="Ellipse_314"
          data-name="Ellipse 314"
          fill="none"
          stroke="#b91381"
          stroke-width="1">
          <Circle cx="11.174" cy="11.174" r="11.174" stroke="none" />
          <Circle cx="11.174" cy="11.174" r="10.674" fill="none" />
        </G>
        <G
          id="Icon_feather-mail"
          data-name="Icon feather-mail"
          transform="translate(4.836 6.103)">
          <Path
            id="Path_708"
            data-name="Path 708"
            d="M4.269,6H14.424a1.273,1.273,0,0,1,1.269,1.269v7.616a1.273,1.273,0,0,1-1.269,1.269H4.269A1.273,1.273,0,0,1,3,14.885V7.269A1.273,1.273,0,0,1,4.269,6Z"
            transform="translate(-3 -6)"
            fill="none"
            stroke="#b91381"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
          />
          <Path
            id="Path_709"
            data-name="Path 709"
            d="M15.693,9,9.347,13.443,3,9"
            transform="translate(-3 -7.731)"
            fill="none"
            stroke="#b91381"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
          />
        </G>
      </Svg>
    </SvgView>
  );
};

export default EmailSocialIcon;

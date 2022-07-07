import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import styled from 'styled-components';

const SvgView = styled.View`
  justify-content: center;
  align-items: center;
`;

const MobilePhoneIcon = ({ width, height, color }) => {
  return (
    <SvgView>
      <Svg width={width} height={height} viewBox="0 0 14.75 23.6">
        <Path
          id="Icon_awesome-mobile-alt"
          data-name="Icon awesome-mobile-alt"
          d="M12.538,0H2.213A2.213,2.213,0,0,0,0,2.213V21.388A2.213,2.213,0,0,0,2.213,23.6H12.538a2.213,2.213,0,0,0,2.212-2.212V2.213A2.213,2.213,0,0,0,12.538,0ZM7.375,22.125A1.475,1.475,0,1,1,8.85,20.65,1.473,1.473,0,0,1,7.375,22.125Zm5.163-4.978a.555.555,0,0,1-.553.553H2.766a.555.555,0,0,1-.553-.553V2.766a.555.555,0,0,1,.553-.553h9.219a.555.555,0,0,1,.553.553Z"
          fill={color}
        />
      </Svg>
    </SvgView>
  );
};

export default MobilePhoneIcon;

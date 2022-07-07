import React from 'react';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';

const SvgView = styled.TouchableOpacity`
  margin-horizontal: 8px;
  justify-content: center;
  align-items: center;
`;

const FbIcon = ({ width, height }) => {
  return (
    <SvgView>
      <Svg width={width} height={height} viewBox="0 0 22.484 22.347">
        <Path
          id="Icon_simple-facebook"
          data-name="Icon simple-facebook"
          d="M22.484,11.242a11.242,11.242,0,1,0-13,11.105V14.492H6.631v-3.25H9.485V8.765c0-2.818,1.678-4.374,4.246-4.374a17.289,17.289,0,0,1,2.517.22V7.378H14.831A1.625,1.625,0,0,0,13,9.133v2.109h3.118l-.5,3.25H13v7.856A11.245,11.245,0,0,0,22.484,11.242Z"
          fill="#b91381"
        />
      </Svg>
    </SvgView>
  );
};

export default FbIcon;

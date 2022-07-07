import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { styles } from './styles';

const UploadButtonIcon = ({ width, height }) => {
  return (
    <View style={styles.container}>
      <Svg width={width} height={height} viewBox="0 0 16.628 16.625">
        <Path
          id="Icon_awesome-upload"
          data-name="Icon awesome-upload"
          d="M9.613,12.474h-2.6a.778.778,0,0,1-.779-.779V6.238H3.387a.648.648,0,0,1-.458-1.107L7.869.188a.629.629,0,0,1,.887,0L13.7,5.131a.648.648,0,0,1-.458,1.107H10.392v5.456A.778.778,0,0,1,9.613,12.474Zm7.015-.26v3.637a.778.778,0,0,1-.779.779H.779A.778.778,0,0,1,0,15.851V12.214a.778.778,0,0,1,.779-.779H5.2v.26a1.82,1.82,0,0,0,1.819,1.819h2.6a1.82,1.82,0,0,0,1.819-1.819v-.26h4.417A.778.778,0,0,1,16.628,12.214ZM12.6,15.072a.65.65,0,1,0-.65.65A.651.651,0,0,0,12.6,15.072Zm2.078,0a.65.65,0,1,0-.65.65A.651.651,0,0,0,14.679,15.072Z"
          transform="translate(0 -0.005)"
          fill="#fff"
        />
      </Svg>
    </View>
  );
};

export default UploadButtonIcon;

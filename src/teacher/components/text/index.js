import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { defaultConfig, TextScaling } from '../../globals/index';
import { FONTFAMILY } from '../../constants/index';
import { scale } from '../../constants/PixelRatio';

const TextComponent = ({
  title,
  size,
  color,
  handlePress,
  center,
  customStyles,
  touchableStyle,
  family,
  numLines,
}) => {
  return typeof handlePress === 'function' ? (
    <TouchableOpacity
      style={touchableStyle}
      activeOpacity={defaultConfig.touchOpacity}
      onPress={handlePress}>
      <Text
        numberOfLines={numLines}
        allowFontScaling={TextScaling}
        style={[
          {
            fontSize: scale(Number(size)),
            color,
            fontFamily: family ? FONTFAMILY[family] : FONTFAMILY.REGULAR,
            textAlign: center ? 'center' : 'auto',
          },
          customStyles,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  ) : (
    <Text
      numberOfLines={numLines}
      allowFontScaling={TextScaling}
      style={[
        {
          fontSize: scale(Number(size)),
          color,
          fontFamily: family ? FONTFAMILY[family] : FONTFAMILY.REGULAR,
          textAlign: center ? 'center' : 'auto',
        },
        customStyles,
      ]}>
      {title}
    </Text>
  );
};

export default React.memo(TextComponent);

import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import TextComponent from '../../../teacher/components/text';
import { defaultConfig } from '../../../teacher/globals/index';
import { getLineHeight } from '../../../teacher/constants/index';

import styles from './styles';

const Button = ({
  title,
  handlePress,
  customStyles,
  lineHeight,
  color,
  size,
  family,
  center,
  disabled = false,
}) => {
  const buttonPress = () => handlePress();

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={defaultConfig.touchOpacity}
      onPress={buttonPress}>
      <View style={[styles.buttonContainer, customStyles]}>
        <TextComponent
          family={family}
          color={color}
          customStyles={lineHeight ? getLineHeight(lineHeight) : {}}
          center={center}
          size={size}
          title={title}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Button;

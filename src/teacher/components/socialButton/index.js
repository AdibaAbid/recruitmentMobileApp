import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { defaultConfig } from '../../globals/index';

import styles from './styles';

const SocialButtonComponent = ({ handlePress, customStyles, icon }) => {
  const buttonPress = () => handlePress();

  return (
    <TouchableOpacity
      activeOpacity={defaultConfig.touchOpacity}
      onPress={buttonPress}>
      <View style={[styles.socialBtn, customStyles]}>
        <SvgXml xml={icon} />
      </View>
    </TouchableOpacity>
  );
};

export default SocialButtonComponent;

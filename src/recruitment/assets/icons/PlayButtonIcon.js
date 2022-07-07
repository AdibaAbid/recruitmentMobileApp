import { color } from '@styles/colorConstant';
import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PlayButtonIcon = ({ size = 18, colors = color.white }) => {
  return (
    <View>
      <Icon name="play" size={size} color={colors} />
    </View>
  );
};

export default PlayButtonIcon;

import { color } from '@styles/colorConstant';
import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const CheckIcon = ({ size = 18, colorIcon = color.themeColorShockingPink }) => {
  return (
    <View>
      <Icon name="check" size={size} color={colorIcon} />
    </View>
  );
};

export default CheckIcon;

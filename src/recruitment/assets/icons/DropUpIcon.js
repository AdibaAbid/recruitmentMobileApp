import { color } from '@styles/colorConstant';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const DropUpIcon = () => {
  return (
    <TouchableOpacity style={{ marginTop: 5 }}>
      <Icon name="up" size={12} color={color.themeColorShockingPink} />
    </TouchableOpacity>
  );
};

export default DropUpIcon;

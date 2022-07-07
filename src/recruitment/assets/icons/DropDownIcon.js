import { color } from '@styles/colorConstant';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const DropDownIcon = () => {
  return (
    <TouchableOpacity>
      <Icon name="down" size={12} color={color.themeColorShockingPink} />
    </TouchableOpacity>
  );
};

export default DropDownIcon;

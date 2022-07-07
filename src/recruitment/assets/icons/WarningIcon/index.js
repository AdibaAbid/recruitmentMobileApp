import { color } from '@styles/colorConstant';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const WarningIcon = ({ iconColor = color.white, size = 47 }) => {
  return <Icon name="warning-outline" size={size} color={iconColor} />;
};

export default WarningIcon;

import { color } from '@styles/colorConstant';
import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CalenderIcon = () => {
  return (
    <View style={{ marginTop: 5 }}>
      <Icon name="calendar-sharp" size={18} color={color.blackBorderColor} />
    </View>
  );
};

export default CalenderIcon;

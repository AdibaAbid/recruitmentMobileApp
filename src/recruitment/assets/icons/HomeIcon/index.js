import { styles } from './styles';
import { color } from '@styles/colorConstant';
import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const HomeeIcon = ({ iconColor = color.themeColorShockingPink, size = 20 }) => {
  return (
    <View style={styles.ContainerBox}>
      <Icon name="home" size={size} color={iconColor} />
    </View>
  );
};

export default HomeeIcon;

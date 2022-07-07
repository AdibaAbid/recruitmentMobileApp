import { styles } from './styles';
import { color } from '@styles/colorConstant';
import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileIcon = ({
  iconColor = color.themeColorShockingPink,
  size = 20,
}) => {
  return (
    <View style={styles.ContainerBox}>
      <Icon name="face-woman-profile" size={size} color={iconColor} />
    </View>
  );
};

export default ProfileIcon;

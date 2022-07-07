import { styles } from './styles';
import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HamburgerMenuIcon = ({ colorIcon }) => {
  return (
    <View style={styles.ContainerBox}>
      <Icon name="menu" size={30} color={colorIcon} />
    </View>
  );
};

export default HamburgerMenuIcon;

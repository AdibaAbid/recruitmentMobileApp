import React from 'react';
import { Pressable, View } from 'react-native';
import { styles } from './styles';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import { color } from '@styles/colorConstant';
import BackIconButton from '@assets/icons/BackIconButton.js';

const HeaderComponent = ({ modalLabel, setModalVisible, width }) => {
  return (
    <View style={[styles.modalHeader, { width }]}>
      <Pressable
        onPress={() => setModalVisible(false)}
        style={styles.modalHeaderBtn}>
        <BackIconButton />
      </Pressable>
      <Text
        size={SIZE.LARGE}
        color={color.themeColorShockingPink}
        fontFamily={FONT_FAMILY.BOLD}>
        {modalLabel}
      </Text>
    </View>
  );
};

export default HeaderComponent;

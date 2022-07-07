import React, { useContext } from 'react';
import { Pressable, View } from 'react-native';
import { styles } from './style';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import { color } from '@styles/colorConstant';
import BackIconButton from '@assets/icons/BackIconButton.js';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';

const HeaderComponent = ({
  modalLabel,
  setModalVisible,
  width,
  isMultiple,
}) => {
  const { setSubmitBtnAtModal } = useContext(CredientialsContext);
  return (
    <View style={[styles().modalHeader, { width }]}>
      <Pressable
        onPress={() => setModalVisible(false)}
        style={styles().modalHeaderBtn}>
        <BackIconButton />
      </Pressable>

      <Text
        size={SIZE.LARGE}
        color={color.themeColorShockingPink}
        fontFamily={FONT_FAMILY.BOLD}>
        {modalLabel}
      </Text>
      {isMultiple && (
        <Pressable
          onPress={() => setSubmitBtnAtModal(true)}
          style={styles().modalHeaderBtn}>
          <Text
            size={SIZE.SMALL}
            color={color.themeColorShockingPink}
            fontFamily={FONT_FAMILY.REGULAR}>
            {'submit'}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default HeaderComponent;

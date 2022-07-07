import React from 'react';
import { color } from '@styles/colorConstant';
import { Modal, Pressable, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import CircleCloseIcon from '@assets/icons/CircleCloseIcon.js';

const CustomAlertToast = ({
  modalVisible,
  setModalVisible,
  errorMessage,
  errorBgColor,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <TouchableOpacity
        style={styles().modalContainer}
        onPress={() => {
          setModalVisible(false);
        }}>
        <TouchableOpacity style={styles().modal} activeOpacity={1}>
          {/* Modal Content... */}
          <View style={styles(errorBgColor).centeredView}>
            <View style={styles().textStyle}>
              <Text
                fontFamily={FONT_FAMILY.BOLD}
                size={SIZE.SMALLEST}
                numberOfLines={0}
                color={color.white}>
                {errorMessage}
              </Text>
            </View>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={styles().closeBtn}>
              <CircleCloseIcon size={20} iconColor={color.white} />
            </Pressable>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomAlertToast;

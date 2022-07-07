import NoInternetSVG from '@assets/svgs/NoInternetSVG';
import Button from '@components/Button';
import { color } from '@styles/colorConstant';
import React from 'react';
import { Modal, Text, View } from 'react-native';
import { styles } from './styles';

const NoInternetModal = ({ show, onRetry, isRetrying }) => (
  <Modal
    isVisible={show}
    style={styles.modal}
    animationType={'slide'}
    animationInTiming={2000}
    transparent={true}>
    <View style={styles.centeredView}>
      <View style={styles.modalContainer}>
        <View style={styles.SVGView}>
          <NoInternetSVG width={170} height={170} />
        </View>
        <Text style={styles.modalTitle}>Connection Error</Text>
        <Text style={styles.modalText}>
          Oops! Looks like your device is not connected to the Internet.
        </Text>
        <Button
          borderRadius={5}
          disabled={isRetrying}
          onPress={onRetry}
          label={'Try Again'}
          textColor={color.redBtn}
          isBackgroundColor={color.white}
          isBorderColor={color.redBtn}
          width={'80%'}
          height={50}
          isUppercase
        />
      </View>
    </View>
  </Modal>
);

export default NoInternetModal;

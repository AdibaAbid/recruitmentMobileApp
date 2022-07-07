import React from 'react';
import CheckIcon from '@assets/icons/CheckIcon';
import CircleCloseIcon from '@assets/icons/CircleCloseIcon.js';
import PendingIcon from '@assets/icons/PendingIcon';
import { CompalintScreenConstant } from '@constants/strings';
import { color } from '@styles/colorConstant';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    toggleModal();
  }, [scaleValue, visible]);

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const MsgModal = ({
  showModal,
  setShowModal,
  showMsg,
  showStatus,
  emailResolver,
}) => {
  return (
    <SafeAreaView>
      <ModalPoup visible={showModal}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
              <CircleCloseIcon size={20} iconColor={color.errorAlertColor} />
            </TouchableOpacity>
          </View>
          <View>
            {showStatus === 'unsolve' ? (
              <View style={styles.headerIcon}>
                <PendingIcon size={40} colorIcon={color.green} />
                <Text style={styles.headingText}>
                  {CompalintScreenConstant.pendingMsg}
                </Text>
              </View>
            ) : (
              <View style={styles.headerIcon}>
                <CheckIcon size={40} colorIcon={color.greenValid} />
                <Text style={styles.headingText}>
                  {CompalintScreenConstant.resolveMsg}
                </Text>
                <Text style={styles.subHeadingText}>
                  {`By Fakhar Alam \n ${emailResolver}`}
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.MsgView}>
          <ScrollView>
            <Text style={styles.msgText}>{showMsg}</Text>
          </ScrollView>
        </View>
      </ModalPoup>
    </SafeAreaView>
  );
};

export default MsgModal;

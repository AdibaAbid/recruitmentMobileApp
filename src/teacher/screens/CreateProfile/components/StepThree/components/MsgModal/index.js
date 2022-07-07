import React from 'react';
import CircleCloseIcon from '@assets/icons/CircleCloseIcon.js';
import { color } from '@styles/colorConstant';
import Button from '@teacher/button';
import { Size } from '../../../../../../globals';
import { theme } from '../../../../../../theme';
import TextComponent from '../../../../../../components/text';

import { View, Modal, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import checkCircle from '../../assets/svg/checkCircle';
import { WP, HP } from '../../../../../../constants';
import { FontFamilyEnum } from '../../../../../../constants/FontFamily';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { SCREENS } from '@constants/strings';

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
  title,
  showModal,
  setShowModal,
  showMsg,
  showBtn,
  btnTitle,
  showClose = false,
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ModalPoup visible={showModal}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
              {showClose && (
                <CircleCloseIcon size={20} iconColor={color.errorAlertColor} />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.headerIcon}>
              <View style={{ marginHorizontal: WP('2') }}>
                <SvgXml xml={checkCircle} />
              </View>
              <TextComponent
                title={title}
                size={Size.L}
                color={theme.textDark}
                family={FontFamilyEnum.SEMIBOLD}
                customStyles={styles.textStyle}
              />
            </View>
          </View>
        </View>
        <View style={styles.MsgView}>
          <TextComponent
            title={showMsg}
            size={Size.S}
            center
            color={theme.textNormal}
            family={FontFamilyEnum.REGULAR}
            customStyles={{ padding: WP('2'), marginTop: -HP('2') }}
          />
        </View>
        {showBtn && (
          <Button
            title={btnTitle}
            center
            size={Size.DEFAULT}
            family={FontFamilyEnum.MEDIUM}
            color={theme.bgTheme}
            handlePress={() => navigation.replace(SCREENS.TRAINING_VIDEOS)}
            customStyles={{
              backgroundColor: theme.bgColorBtn,
            }}
          />
        )}
      </ModalPoup>
    </SafeAreaView>
  );
};

export default MsgModal;

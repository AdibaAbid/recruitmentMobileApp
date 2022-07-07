import React from 'react';
import CircleCloseIcon from '@assets/icons/CircleCloseIcon.js';
import { color } from '@styles/colorConstant';
import Button from '@teacher/button';
import { Size } from '../../../../globals';
import { theme } from '../../../../theme';
import TextComponent from '../../../../components/text';

import { View, Modal, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import checkCircle from '../../../../assets/svgs/checkmark';
import { WP, HP } from '../../../../constants';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import styles from './styles';
import eduBadgeWithOutline from '@teacher/assets/svgs/eduBadgeWithOutline';
import superTutorWithOutline from '@teacher/assets/svgs/superTutorWithOutline';
import teacherMangBadgeWithOutline from '@teacher/assets/svgs/teacherMangBadgeWithOutline';

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
  showBtn,
  btnTitle,
  icon,
  title,
  showCloseBtn = false,
  midContentComponent,
  handlePress,
  btnTextColor,
}) => {
  return (
    <SafeAreaView>
      <ModalPoup visible={showModal}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
              {showCloseBtn && (
                <CircleCloseIcon size={20} iconColor={color.errorAlertColor} />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.headerIcon}>
              <View style={{ marginHorizontal: WP('2') }}>
                <SvgXml xml={icon ? icon : checkCircle} />
              </View>
              <TextComponent
                title={title}
                size={Size.L}
                color={theme.textDefault}
                family={FontFamilyEnum.MEDIUM}
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
            customStyles={{ padding: WP('1'), marginTop: -HP('3') }}
          />
        </View>

        {midContentComponent && (
          <View style={styles.row}>
            <View style={styles.badgeBg}>
              <View style={styles.svgIcon}>
                <SvgXml xml={eduBadgeWithOutline} />
                <TextComponent
                  title={'Graduate \nTeacher'}
                  size={Size.S}
                  center
                  color={theme.textNormal}
                  family={FontFamilyEnum.REGULAR}
                  customStyles={{ padding: WP('1') }}
                />
              </View>
            </View>
            <View style={styles.badgeBg}>
              <View style={styles.svgIcon}>
                <SvgXml xml={superTutorWithOutline} />
                <TextComponent
                  title={'Super \nTutor'}
                  size={Size.S}
                  center
                  color={theme.textNormal}
                  family={FontFamilyEnum.REGULAR}
                  customStyles={{ padding: WP('1') }}
                />
              </View>
            </View>

            <View style={styles.badgeBg}>
              <View style={styles.svgIcon}>
                <SvgXml xml={teacherMangBadgeWithOutline} />
                <TextComponent
                  title={'Teacher\nManager'}
                  size={Size.S}
                  center
                  color={theme.textNormal}
                  family={FontFamilyEnum.REGULAR}
                  customStyles={{ padding: WP('1') }}
                />
              </View>
            </View>
          </View>
        )}

        {showBtn && (
          <Button
            title={btnTitle}
            center
            size={Size.DEFAULT}
            family={FontFamilyEnum.MEDIUM}
            color={btnTextColor ? btnTextColor : theme.textOnBtn}
            handlePress={handlePress}
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

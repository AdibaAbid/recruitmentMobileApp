import React, { useEffect, useState } from 'react';

import { View, TouchableOpacity, Animated } from 'react-native';

import { defaultConfig } from '../../globals/index';
import { getLineHeight } from '../../constants/index';
import TextComponent from '../text';
import chevronDown from '../assets/svgs/chevronDown';
import { theme } from '../../theme/index';
import { SvgXml } from 'react-native-svg';
import { FontFamilyEnum } from '../../constants/FontFamily';
import sizes from '../../globals/sizes';

import styles from './styles';

const SelectComponent = ({
  handleSelect,
  selectLabel,
  color = '',
  customStyles,
  error,
  touched,
}) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const Animation = () => {
      if (error && touched) {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: false,
        }).start();
      }
    };

    void Animation();
  }, [error, touched, fadeAnim]);

  return (
    <>
      <TouchableOpacity
        onPress={handleSelect}
        activeOpacity={defaultConfig.touchOpacity}>
        <View
          style={[
            styles.selectPickerContainer,
            touched && error ? styles.errorStyle : {},
          ]}>
          <View style={[styles.label, customStyles]}>
            <TextComponent
              title={selectLabel}
              size={sizes.S}
              customStyles={getLineHeight(21)}
              color={color}
            />
          </View>

          <View>
            <SvgXml xml={chevronDown} />
          </View>
        </View>
      </TouchableOpacity>

      <Animated.View style={{ opacity: fadeAnim }}>
        <View style={styles.errorContainer}>
          {touched && error ? (
            <TextComponent
              title={error}
              size={11}
              family={FontFamilyEnum.ITALIC}
              color={theme.bgNotification}
              customStyles={getLineHeight(17)}
            />
          ) : null}
        </View>
      </Animated.View>
    </>
  );
};

export default SelectComponent;

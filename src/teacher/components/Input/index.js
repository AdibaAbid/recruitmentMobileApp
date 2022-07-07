import React, { useEffect, useRef, useState } from 'react';

import { TextInput, TouchableOpacity, View, Animated } from 'react-native';
import { SvgXml } from 'react-native-svg';
import TextInputMask from 'react-native-masked-input';

import { defaultConfig, TextScaling } from '../../globals/index';
import TextComponent from '../text';
import { FontFamilyEnum } from '../../constants/FontFamily';
import { theme } from '../../theme/index';
import eyeOpen from './assets/svgs/eyeOpen';
import { getLineHeight } from '../../constants/index';
import eyeClose from './assets/svgs/eyeClose';

import styles from './styles';

const InputComponent = (
  {
    secure = false,
    keyboardType = 'default',
    placeHolder,
    handleChange,
    submitEditingHandle,
    customStyle,
    error,
    touched,
    multiline = false,
    onBlur,
    maxLength,
    value,
    icon,
    mask,
  },
  ref,
) => {
  const [visible, setVisible] = useState(false);
  const [textSecure, setTextSecure] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  const phoneRef = useRef(null);
  const onChangeText = e => handleChange(e);
  const onMaskInputChange = (_, e) => handleChange(e.toString());

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

  useEffect(() => {
    if (secure) {
      if (visible) {
        setTextSecure(false);
      } else {
        setTextSecure(true);
      }
    }
  }, [secure, visible]);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <View
        style={{
          ...styles.container,
          borderColor:
            touched && error ? theme.bgNotification : theme.borderColorInput,
          ...customStyle,
        }}>
        <View style={styles.input}>
          {multiline ? (
            <TextInput
              ref={ref}
              style={[styles.inputStyle, styles.multilineStyle]}
              keyboardType={keyboardType}
              placeholder={placeHolder}
              autoCapitalize={'none'}
              multiline={true}
              numberOfLines={5}
              onBlur={onBlur}
              textAlignVertical={'top'}
              returnKeyType={'next'}
              allowFontScaling={TextScaling}
              onSubmitEditing={submitEditingHandle}
              onChangeText={onChangeText}
              placeholderTextColor={theme.textNormal}
            />
          ) : placeHolder === 'Phone number' || placeHolder === 'Expiry' ? (
            <TextInputMask
              ref={phoneRef}
              refInput={ref}
              type={'custom'}
              options={{
                mask,
              }}
              onChangeText={onMaskInputChange}
              placeholder={placeHolder}
              onBlur={onBlur}
              returnKeyType={'next'}
              maxLength={maxLength}
              placeholderTextColor={theme.textNormal}
              style={styles.inputStyle}
              keyboardType={keyboardType}
              allowFontScaling={TextScaling}
              onSubmitEditing={submitEditingHandle}
              value={value}
            />
          ) : (
            <TextInput
              ref={ref}
              style={styles.inputStyle}
              autoCapitalize={'none'}
              onBlur={onBlur}
              maxLength={maxLength}
              value={value}
              keyboardType={keyboardType}
              secureTextEntry={textSecure}
              placeholder={placeHolder}
              textAlignVertical={'center'}
              returnKeyType={'next'}
              allowFontScaling={TextScaling}
              onSubmitEditing={submitEditingHandle}
              onChangeText={onChangeText}
              placeholderTextColor={theme.textNormal}
            />
          )}
        </View>

        {secure && (
          <TouchableOpacity
            onPress={handleVisible}
            activeOpacity={defaultConfig.touchOpacity}>
            <View style={styles.eyeIcon}>
              {visible ? <SvgXml xml={eyeOpen} /> : <SvgXml xml={eyeClose} />}
            </View>
          </TouchableOpacity>
        )}

        {icon ? (
          <View style={styles.iconStyle}>
            <SvgXml xml={icon} />
          </View>
        ) : null}
      </View>

      <Animated.View style={{ opacity: fadeAnim, height: 22 }}>
        {touched && error ? (
          <TextComponent
            title={error}
            size={11}
            family={FontFamilyEnum.ITALIC}
            color={theme.bgColorBtn}
            customStyles={getLineHeight(17)}
          />
        ) : null}
      </Animated.View>
    </>
  );
};

export default React.forwardRef(InputComponent);

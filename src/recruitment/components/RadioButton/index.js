/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { color } from '@styles/colorConstant';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import { View, TouchableOpacity } from 'react-native';
import Text from '@components/Text';
import styles from './styles';

const RadioButton = ({
  PROP,
  label,
  onChangeValue,
  defaultOption,
  setNationality,
  spaceBetween,
  error,
  marginBottom,
  top,
  errorShow,
}) => {
  const [value, setValue] = useState(defaultOption);

  useEffect(() => {
    if (typeof defaultOption === 'boolean') {
      if (defaultOption === true) {
        setValue('true');
      } else {
        setValue('false');
      }
    } else {
      setValue(defaultOption);
    }
  }, [defaultOption]);

  return (
    <View style={{ marginBottom }}>
      <Text
        size={SIZE.SMALLEST}
        fontFamily={FONT_FAMILY.SEMI_BOLD}
        customStyle={{ marginBottom: marginBottom ? marginBottom : 3 }}
        color={color.blackBorderColor}>
        {label}
      </Text>
      <View style={styles(top).topContainer}>
        {PROP.map((res, id) => {
          return (
            <View
              key={id.toString()}
              style={[
                styles().container,
                {
                  paddingRight: spaceBetween ? '15%' : 8,
                },
              ]}>
              <TouchableOpacity
                style={styles().onPressTouch}
                onPress={() => {
                  setValue(res.key);
                  onChangeValue && onChangeValue(res.key);
                  setNationality && setNationality(res.key);
                }}>
                <View
                  style={
                    value === res.key
                      ? styles().selectedRadioCircle
                      : styles().radioInnerCircle
                  }>
                  {value === res.key && <View style={styles().selectedRb} />}
                </View>
                <Text
                  size={SIZE.XXSMALL}
                  fontFamily={FONT_FAMILY.MEDIUM}
                  color={color.black}
                  style={styles().radioText}>
                  {res.text}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={styles().ErrorView}>
        <Text
          fontFamily={FONT_FAMILY.SEMI_BOLD}
          size={SIZE.XSMALLEST}
          color={error && errorShow ? color.pinkRed : color.white}>
          {error}
        </Text>
      </View>
    </View>
  );
};

export default RadioButton;

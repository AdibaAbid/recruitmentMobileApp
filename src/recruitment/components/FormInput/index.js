import React, { useState } from 'react';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';
import { scaleHeight } from 'src/recruitment/utils/platformUtils';
import { color } from '@styles/colorConstant';
import { fontFamilyConstant } from '@styles/FontProperties';
import { TextInput, View } from 'react-native';
import styles from './styles';

const FormInput = (
  {
    title,
    error,
    value,
    onChangeText,
    isRequired,
    editable,
    onEndEditing,
    numberOfLines,
    errorShow,
    defaultValue,
    customStyle,
    ...rest
  },
  ref,
) => {
  const [wasOnFocus, setWasOnFocus] = useState(false);

  let borderColor = color.borderColor;
  let borderWidth = 1;
  let font = fontFamilyConstant.poppinsRegular;

  if (value) {
    font = fontFamilyConstant.poppinsRegular;
  }

  return (
    <View {...rest} style={[customStyle, styles.InputContainer]}>
      <Text
        fontFamily={FONT_FAMILY.SEMI_BOLD}
        size={SIZE.SMALLEST}
        numberOfLines={numberOfLines}
        customStyle={{
          top: scaleHeight(2),
        }}
        color={color.blackBorderColor}>
        {title}
      </Text>
      {editable === false ? (
        <View style={styles.InputBoxContainer}>
          <TextInput
            ref={ref}
            allowFontScaling={false}
            borderWidth={borderWidth}
            placeholder={rest.placeholder}
            placeholderTextColor={color.lightPink}
            defaultValue={defaultValue}
            fontFamily={font}
            autoCapitalize="none"
            textAlignVertical={'center'}
            autoCorrect={false}
            secureTextEntry={rest.passwordTextField}
            showSoftInputOnFocus={rest.dontShowKeyboard}
            multiline={rest.multiline}
            numberOfLines={rest.numberOfLines}
            editable={editable}
            keyboardType={rest.keyboardType}
            style={[
              {
                borderWidth,
              },
              styles.InputBoxWithNoEdit,
            ]}
          />
          <View style={styles.IconContainer}>{rest.svgIcon}</View>
        </View>
      ) : (
        <View style={styles.InputBoxContainer}>
          <TextInput
            ref={ref}
            allowFontScaling={false}
            borderColor={borderColor}
            borderWidth={borderWidth}
            placeholder={rest.placeholder}
            placeholderTextColor={color.borderColor}
            onChangeText={onChangeText}
            onFocus={rest.onPress}
            onBlur={() => setWasOnFocus(true)}
            defaultValue={defaultValue}
            textAlignVertical={'center'}
            fontFamily={font}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={rest.passwordTextField}
            showSoftInputOnFocus={rest.dontShowKeyboard}
            keyboardType={rest.keyboardType}
            style={[
              {
                borderColor,
                borderWidth,
              },
              styles.InputBox,
            ]}
          />
          <View style={styles.IconContainer}>{rest.svgIcon}</View>
        </View>
      )}
      <View style={styles.ErrorView}>
        <Text
          fontFamily={FONT_FAMILY.SEMI_BOLD}
          size={SIZE.XSMALLEST}
          color={
            (error && wasOnFocus) || errorShow ? color.pinkRed : color.white
          }>
          {error}
        </Text>
      </View>
    </View>
  );
};

export default React.forwardRef(FormInput);

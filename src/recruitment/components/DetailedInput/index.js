import React, { useState } from 'react';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';
import { color } from '@styles/colorConstant';
import { TextInput, View } from 'react-native';
import { styles } from './styles';

const DetailedInput = ({
  title,
  error,
  value,
  onChangeText,
  isRequired,
  editable,
  onEndEditing,
  numberOfLines,
  errorShow,
  ...rest
}) => {
  const [wasOnFocus, setWasOnFocus] = useState(false);

  return (
    <View style={{ ...rest }}>
      <Text
        fontFamily={FONT_FAMILY.MEDIUM}
        size={SIZE.SMALLEST}
        numberOfLines={numberOfLines}
        customStyle={styles.TextWrapper}
        color={color.blackBorderColor}>
        {title}
      </Text>

      <View style={styles.InputBoxContainer}>
        <TextInput
          allowFontScaling={false}
          placeholder={rest.placeholder}
          placeholderTextColor={color.TextColor}
          onChangeText={onChangeText}
          onFocus={rest.onPress}
          onBlur={() => setWasOnFocus(true)}
          value={value}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={rest.passwordTextField}
          showSoftInputOnFocus={rest.dontShowKeyboard}
          multiline={rest.multiline}
          numberOfLines={rest.numberOfLines}
          keyboardType={rest.keyboardType}
          style={styles.InputBox}
        />
        <View style={styles.IconContainer}>{rest.svgIcon}</View>
      </View>

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

export default DetailedInput;

import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {
  scaleHeight,
  scaleWidth,
  scale,
} from 'src/recruitment/utils/platformUtils';
import { color } from '@styles/colorConstant';
import { FONT_FAMILY, getFontFamily, SIZE } from '@styles/FontProperties';
import { Platform, Pressable } from 'react-native';
import Text from './Text';
import ErrorIcon from '@assets/icons/ErrorIcon';

const InputBox = styled.TextInput`
  color: ${color.black};
  background-color:${color.white}
  font-size: ${scale(13)}px;
  padding-left: ${scaleWidth(4)}px;
  width: 85%;
  padding-bottom: ${Platform.OS === 'android' ? 8 : 0}px;
  font-family: ${getFontFamily(FONT_FAMILY.REGULAR)};
  height: 40px;
`;

const InputContainer = styled.View``;

const InputBoxContainer = styled.View`
  border-color: ${color.borderColor};
  border-radius: ${scaleHeight(5)}px;
  border-width: ${borderWidth => borderWidth}px;
  flex-direction: row;
  align-items: center;
`;
const SvgIconWrapper = styled.View`
  padding-left: 4px;
`;
const TextWrapper = styled(Text)`
  margin-bottom: -10px;
`;
const ErrorView = styled.View`
  height: 25px;
`;

const InputFormBox = (
  {
    error,
    value,
    SvgIcon,
    ShowAndHidePassIcon,
    handlePasswordVisibility,
    onChangeText,
    isRequired,
    onEndEditing,
    passwordTextField,
    onSubmitEditing,
    blurOnSubmit,
    isPasswordEyeIcon,
    errorShow,
    ...rest
  },
  ref,
) => {
  const [wasOnFocus, setWasOnFocus] = useState(false);

  let borderColor = color.blackBorderColor;
  let borderWidth = 1;

  return (
    <InputContainer {...rest}>
      <InputBoxContainer borderColor={borderColor} borderWidth={borderWidth}>
        <SvgIconWrapper>{SvgIcon}</SvgIconWrapper>
        <InputBox
          ref={ref}
          multiline={false}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
          allowFontScaling={false}
          testID="input-box"
          returnKeyType="next"
          placeholder={rest.placeholder}
          underlineColorAndroid="transparent"
          placeholderTextColor={color.blackBorderColor}
          onBlur={() => {
            setWasOnFocus(true);
          }}
          onChangeText={onChangeText}
          value={value}
          autoCapitalize="none"
          autoCorrect={false}
          onEndEditing={onEndEditing}
          secureTextEntry={passwordTextField}
        />
        {isPasswordEyeIcon && (
          <SvgIconWrapper>
            <Pressable onPress={handlePasswordVisibility}>
              {ShowAndHidePassIcon}
            </Pressable>
          </SvgIconWrapper>
        )}

        {error && wasOnFocus && !isPasswordEyeIcon ? (
          <SvgIconWrapper>
            <ErrorIcon />
          </SvgIconWrapper>
        ) : errorShow && error && !isPasswordEyeIcon ? (
          <SvgIconWrapper>
            <ErrorIcon />
          </SvgIconWrapper>
        ) : (
          error === null && null
        )}
      </InputBoxContainer>

      <ErrorView>
        <TextWrapper
          fontFamily={FONT_FAMILY.SEMI_BOLD}
          size={SIZE.XSMALLEST}
          color={
            (error && wasOnFocus) || errorShow ? color.pinkRed : color.white
          }>
          {error}
        </TextWrapper>
      </ErrorView>
    </InputContainer>
  );
};

export default React.forwardRef(InputFormBox);

InputFormBox.propTypes = {
  error: PropTypes.string,
  isRequired: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  SvgIcon: PropTypes.func,
};
InputFormBox.defaultProps = {
  error: null,
  isRequired: true,
  value: null,
};

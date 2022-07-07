import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import {
  scale,
  scaleHeight,
  scaleWidth,
} from 'src/recruitment/utils/platformUtils';
import { color } from '@styles/colorConstant';

const InputBox = styled.TextInput`
  border-color: ${({ borderColor }) => borderColor};
  border-width: ${({ borderWidth }) => borderWidth}px;
  border-radius: ${scaleHeight(5)}px;
  color: ${color.lightBlack};
  background-color:${color.white}
  font-size: ${scale(14)}px;
  height: ${Platform.OS === 'android' ? scaleHeight(50) : scaleHeight(35)}px;
  padding-left: ${scaleWidth(8)}px;
  padding-top: ${
    Platform.OS === 'android' ? scaleHeight(15) : scaleHeight(5)
  }px;
  width: 100%;
`;

const InputContainer = styled.View`
  justify-content: flex-end;
`;

const TextWrapper = styled(Text)`
  margin-bottom: ${scaleHeight(4)};
`;

const InputBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InputBoxWithTitle = ({
  title,
  error,
  value,
  onChangeText,
  isRequired,
  editable,
  onEndEditing,
  passwordTextField,
  ...rest
}) => {
  const [wasOnFocus, setWasOnFocus] = useState(false);
  let borderColor = color.silverWhite;
  let borderWidth = 1;

  if (wasOnFocus) {
    if (isRequired || error) {
      borderColor = !error ? color.greenValid : color.pinkRed;
      borderWidth = 2;
    }
  }

  return (
    <InputContainer {...rest}>
      <TextWrapper
        fontFamily={FONT_FAMILY.REGULAR}
        size={SIZE.XSMALL}
        color={color.white}>
        {title}
      </TextWrapper>
      <InputBoxContainer borderColor={borderColor} borderWidth={borderWidth}>
        <InputBox
          allowFontScaling={false}
          testID="input-box"
          placeholder={rest.placeholder}
          placeholderTextColor={color.lightPurple}
          onChangeText={onChangeText}
          onBlur={() => setWasOnFocus(true)}
          value={value}
          returnKeyType="next"
          returnKeyLabel="next"
          autoCapitalize="none"
          autoCorrect={false}
          onEndEditing={onEndEditing}
          secureTextEntry={passwordTextField}
        />
      </InputBoxContainer>
    </InputContainer>
  );
};

InputBoxWithTitle.defaultProps = {
  error: null,
  isRequired: false,
  value: null,
  editable: true,
};

InputBoxWithTitle.propTypes = {
  error: PropTypes.string,
  isRequired: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onEndEditing: PropTypes.func.isRequired,
};

export default InputBoxWithTitle;

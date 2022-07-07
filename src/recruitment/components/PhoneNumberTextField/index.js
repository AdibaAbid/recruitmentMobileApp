import React, { useRef, useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import {
  FONT_FAMILY,
  getFontFamily,
  getFontSize,
  SIZE,
} from '@styles/FontProperties';
import Text from '@components/Text';
import { scaleHeight, scaleWidth } from 'src/recruitment/utils/platformUtils';
import { color } from '@styles/colorConstant';
import { fontFamilyConstant } from '@styles/FontProperties';
import DropDownIconSvg from '@assets/svgs/DropDownIcon';
import ModalView from './ModalView';
import Flag from 'react-native-flags';
import TextInputMask from 'react-native-masked-input';
import { Platform } from 'react-native';
import ErrorIcon from '@assets/icons/ErrorIcon';

const CodeBox = styled.TextInput`
  border-radius: ${scaleHeight(5)}px;
  color: ${color.black};
  font-size: ${getFontSize(SIZE.XXSMALL)}px;
  background-color: ${color.transparent};
  font-family: ${getFontFamily(FONT_FAMILY.REGULAR)};
  padding-vertical: 6px;
  top: ${Platform.OS === 'android' ? 2 : 1}px;
`;

const InputContainer = styled.View`
  justify-content: flex-end;
  top: 8px;
`;

const TextWrapper = styled(Text)``;

const InputBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-color: ${({ borderColor }) => borderColor};
  border-width: ${({ borderWidth }) => borderWidth}px;
  border-radius: ${scaleHeight(3)}px;
`;

const CodeBoxView = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const ErrorView = styled.View`
  height: 15px;
`;
const DropDownSvgView = styled.View`
  padding-horizontal: ${scaleWidth(5)}px;
`;
const SvgIconWrapper = styled.View`
  padding-left: -3px;
  left: -5px;
`;

const PhoneNumberTextField = (
  {
    title,
    error,
    onChangeText,
    countryCode,
    countrycode,
    isRequired,
    codeData,
    onEndEditing,
    numberOfLines,
    onChangeCode,
    errorShow,
    defaultValue,
    onPress,
    onBlur,
    borderColor,
    borderWidth,
    placeholder,
    showErrorSvg,
    flags,
    customStyle,
    ...rest
  },
  ref,
) => {
  const [wasOnFocus, setWasOnFocus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [flag, setFlag] = useState(flags ? flags.toString() : 'PK');
  const [masked, setMasked] = React.useState('9999 9999999');
  const PhoneRef = useRef();

  let font = fontFamilyConstant.poppinsRegular;

  if (defaultValue) {
    font = fontFamilyConstant.poppinsRegular;
  }

  return (
    <>
      <InputContainer {...rest} style={customStyle}>
        <TextWrapper
          fontFamily={FONT_FAMILY.SEMI_BOLD}
          size={SIZE.SMALLEST}
          numberOfLines={numberOfLines}
          color={color.blackBorderColor}>
          {title}
        </TextWrapper>

        <InputBoxContainer borderColor={borderColor} borderWidth={borderWidth}>
          <CodeBoxView onPress={() => setModalVisible(true)}>
            <Flag code={flag} size={24} type={'flat'} />

            <DropDownSvgView>
              <DropDownIconSvg width={10} height={10} />
            </DropDownSvgView>

            <CodeBox
              allowFontScaling={false}
              testID="input-code-box"
              placeholder={rest.placeholder}
              placeholderTextColor={color.TextColor}
              textColor={color.black}
              defaultValue={countryCode}
              fontFamily={font}
              autoCapitalize="none"
              textAlignVertical={'center'}
              autoCorrect={false}
              secureTextEntry={rest.passwordTextField}
              showSoftInputOnFocus={rest.dontShowKeyboard}
              multiline={rest.multiline}
              numberOfLines={rest.numberOfLines}
              editable={false}
              keyboardType={'numeric'}
            />
          </CodeBoxView>

          <TextInputMask
            ref={PhoneRef}
            refInput={ref}
            type={'custom'}
            placeholder={placeholder}
            placeholderTextColor={color.TextColor}
            value={defaultValue}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: color.black,
              width: '70%',
              paddingVertical: Platform.OS === 'android' ? 7 : 10,
              alignItems: 'center',
              justifyContent: 'center',
              left: -10,
              fontWeight: '400',
              fontSize: 14,
            }}
            onBlur={() => setWasOnFocus(true)}
            onChangeText={(mask, unmasked) => {
              onChangeText(unmasked.toString());
            }}
            allowFontScaling={false}
            returnKeyType={'next'}
            keyboardType={'numeric'}
            options={{
              mask: masked,
              maskType: 'INTERNATIONAL',
            }}
          />
          {showErrorSvg && error && wasOnFocus ? (
            <SvgIconWrapper>
              <ErrorIcon />
            </SvgIconWrapper>
          ) : showErrorSvg && errorShow && error ? (
            <SvgIconWrapper>
              <ErrorIcon />
            </SvgIconWrapper>
          ) : (
            error === null && null
          )}
        </InputBoxContainer>

        <ErrorView>
          {(error && wasOnFocus) ||
            (errorShow && (
              <Text
                fontFamily={FONT_FAMILY.SEMI_BOLD}
                size={SIZE.XSMALLEST}
                color={error ? color.pinkRed : color.white}>
                {error}
              </Text>
            ))}
        </ErrorView>
      </InputContainer>

      <ModalView
        modalLabel={'Select Country'}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        setText={countryCode}
        countrycode={countrycode}
        data={codeData}
        setFlag={setFlag}
        onChangeText={onChangeText}
        showFlag={true}
        searchBarShow={true}
        onChangeCode={onChangeCode}
        setMasked={setMasked}
      />
    </>
  );
};

export default React.forwardRef(PhoneNumberTextField);

PhoneNumberTextField.defaultProps = {
  backgroundColor: color.white,
  textColor: color.blackBorderColor,
};

PhoneNumberTextField.propTypes = {
  title: PropTypes.string.isRequired,
};

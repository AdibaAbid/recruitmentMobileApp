import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, View } from 'react-native';
import styled from 'styled-components/native';
import { color } from '@styles/colorConstant';
import { scaleHeight } from 'src/recruitment/utils/platformUtils';
import PhoneInput from 'react-native-phone-number-input';
import { styles } from './styles';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import { VALIDATIONS_MESSAGES_SIGN_UP_FORM } from '@constants/strings';
import ErrorIcon from '@assets/icons/ErrorIcon';

const PhoneNumberInputWrapper = styled.View`
  border-radius: ${scaleHeight(3)}px;
  background-color: ${color.white};
  flex-direction: row;

  border-color: ${color.lightPink};
  border-width: ${({ borderWidth }) => borderWidth}px;
  margin-bottom: -2px;
`;
const TextWrapper = styled(Text)`
  margin-top: 0px;
  margin-bottom: -2px;
`;
const SvgIconWrapper = styled.View`
  padding-left: 3px;
  right: 0px;
  left: 0px;
  top: 10px;
`;

const PhoneNumberInput = (
  {
    defaultValue,
    placeholder,
    onChangeValue,
    onChangeFormattedText,
    isContactNumber,
    onChangeCountry,
    countryCodeValue,
    // defaultCode,
    error,
    onSubmitEditing,
    errorShow,
    showErrorSvg,
    ...rest
  },
  ref,
) => {
  const phoneInput = useRef(null);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null);
  const [formattedNum, setFormattedNum] = useState();
  const [wasOnFocus, setWasOnFocus] = useState(false);
  const [countryCode, setCountryCode] = useState([countryCodeValue]);

  return (
    <KeyboardAvoidingView>
      <PhoneNumberInputWrapper borderWidth={isContactNumber ? 1 : 2}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={defaultValue}
          defaultCode={'PK'}
          placeholder={placeholder}
          containerStyle={styles.containerStyle}
          textContainerStyle={styles.textContainerStyle}
          onChangeCountry={e => {
            setCountryCode(e.callingCode);
          }}
          layout={'first'}
          flagButtonStyle={styles.flagBtnStyle}
          onChangeFormattedText={e => {
            const isError = phoneInput.current?.isValidNumber(`${e}`);
            setIsValidPhoneNumber(isError);
            setFormattedNum(e);
          }}
          onChangeText={e => {
            onChangeValue(countryCode.concat(e).join(''));
          }}
          textInputProps={{
            ref: ref,
            returnKeyType: 'next',
            placeholderTextColor: color.lightPink,
            onBlur: () => setWasOnFocus(true),
            keyboardType: 'phone-pad',
            onSubmitEditing: onSubmitEditing,
          }}
          textInputStyle={styles.textInputStyle}
          codeTextStyle={styles.codeTextStyle}
        />
        {(showErrorSvg && error && wasOnFocus) || errorShow ? (
          <SvgIconWrapper>
            <ErrorIcon />
          </SvgIconWrapper>
        ) : showErrorSvg && !isValidPhoneNumber && formattedNum?.length >= 4 ? (
          <SvgIconWrapper>
            <ErrorIcon />
          </SvgIconWrapper>
        ) : (
          error === null && null
        )}
      </PhoneNumberInputWrapper>

      {(error && wasOnFocus) || errorShow ? (
        <View style={styles.errorViewStyle}>
          <TextWrapper
            fontFamily={FONT_FAMILY.SEMI_BOLD}
            size={SIZE.XSMALLEST}
            color={error ? color.pinkRed : color.white}>
            {error}
          </TextWrapper>
        </View>
      ) : (
        <View style={styles.errorViewStyle}>
          {!isValidPhoneNumber && formattedNum?.length >= 4 && (
            <TextWrapper
              fontFamily={FONT_FAMILY.SEMI_BOLD}
              size={SIZE.XSMALLEST}
              color={!isValidPhoneNumber ? color.pinkRed : color.white}>
              {
                VALIDATIONS_MESSAGES_SIGN_UP_FORM.PHONE_NUMBER_VALIDATION_MESSAGE
              }
            </TextWrapper>
          )}
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default React.forwardRef(PhoneNumberInput);

PhoneNumberInput.defaultProps = {
  isContactNumber: false,
};

PhoneNumberInput.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

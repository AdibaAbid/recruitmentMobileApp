import React, { useCallback, useEffect, useState } from 'react';
import { color } from '@styles/colorConstant';
import {
  AlertConstant,
  NavigationStack,
  otpScreenConstant,
  SCREENS,
} from '@constants/strings';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Button from '@components/Button';
import FormBox from '@components/FormBox';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';
import LinkButton from '@components/LinkButton';
import { FetchOTP, ResendOTPLink } from 'src/recruitment/api/Axios/client';
import Text from '@components/Text';
import { Keyboard, TouchableOpacity, View } from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';
import { useToast } from 'react-native-toast-notifications';

const OtpScreenView = ({ navigation }) => {
  const { replace } = navigation;
  const [counter, setCounter] = useState(60);
  const [min, setMin] = useState();
  const [sec, setSec] = useState();
  const [msgOTPCode, setMsgOTPCode] = useState();
  const toast = useToast();

  const [disabled, setDisabled] = useState(true);
  const [disabledContinue, setDisabledContinue] = useState(false);

  useEffect(() => {
    RNOtpVerify.getHash()
      .then(msg => console.log(`msg.then->${msg}`))
      .catch(err => console.log(`msg.catch->${err}`));

    startListeningForOtp();

    return () => RNOtpVerify.removeListener();
  }, [startListeningForOtp]);

  useEffect(() => {
    const sendOtp = async () => {
      await OTPSubmit();
    };

    if (msgOTPCode && msgOTPCode.length === 5) {
      setDisabled(false);
      sendOtp();
    } else {
      setDisabled(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msgOTPCode]);

  const startListeningForOtp = useCallback(() => {
    RNOtpVerify.getOtp()
      .then(p => RNOtpVerify.addListener(otpHandler))
      .catch(p => console.log(`Errormsg->${p}`));
  }, []);

  const otpHandler = message => {
    if (message) {
      const otp = message?.match(/(\d+)/)[0];
      if (message === 'Timeout Error') {
        console.log(
          '🚀 ~ file: OtpScreenView.js ~ line 63 ~ OtpScreenView ~ message',
          message,
        );
      } else {
        if (otp) {
          setMsgOTPCode(otp);
          setDisabledContinue(true);
          setDisabled(false);
          RNOtpVerify.removeListener();
          Keyboard.dismiss();
        }
      }
    }
  };

  useEffect(() => {
    let minutes = Math.floor(counter / 60);
    let seconds = counter % 60;

    minutes = minutes < 10 ? minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    setMin(minutes);
    setSec(seconds);

    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  const OTPSubmit = async () => {
    const res = await FetchOTP(msgOTPCode);
    if (res.success) {
      return replace(NavigationStack.RECRUITMENT, {
        screen: SCREENS.PERSONAL_INFO_SCREEN,
      });
    } else {
      toast.show(res.message, {
        type: 'danger',
        normalColor: color.errorAlertColor,
      });
    }
  };

  const ResendOTP = async () => {
    startListeningForOtp();
    const res = await ResendOTPLink();

    if (res.success === false) {
      toast.show(res.message, {
        type: 'danger',
        normalColor: color.errorAlertColor,
      });
    } else {
      toast.show(res.message, {
        type: 'success',
        normalColor: color.successAlertColor,
      });
    }
  };

  const onCodeChanged = code => {
    setMsgOTPCode(code);
  };

  return (
    <FormBox
      title={otpScreenConstant.enterYourOTP}
      subTitle={otpScreenConstant.otpSubHeadingText}
      titleFontFamily={FONT_FAMILY.BOLD}
      subTitleFontFamily={FONT_FAMILY.LIGHT}
      titleSize={SIZE.LARGE}
      subTitleSize={SIZE.XXXXSMALL}>
      <OTPInputView
        style={styles.otpStyleBase}
        pinCount={5}
        textContentType={'oneTimeCode'}
        code={msgOTPCode}
        // autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeChanged={onCodeChanged}
      />
      <View style={styles.ButtonRow}>
        <View style={styles.ContainerView}>
          <Button
            borderRadius={5}
            disabled={disabled}
            isBorderColor={!disabled ? color.redBtn : color.lightGrey}
            isBackgroundColor={!disabled ? color.redBtn : color.lightGrey}
            onPress={OTPSubmit}
            size={SIZE.XXSMALL}
            label={otpScreenConstant.continue}
            textColor={color.white}
            height={50}
            width={'auto'}
          />

          {sec === '00' || min > 1 ? (
            <LinkButton
              onPress={ResendOTP}
              label={otpScreenConstant.resendOTPText}
              textColor={color.redBtn}
              isUppercase
              isUnderlined
            />
          ) : (
            <TouchableOpacity
              onPress={() => {
                toast.show(AlertConstant.pleaseWait, {
                  type: 'success',
                  normalColor: color.successAlertColor,
                });
              }}>
              <Text
                alignCenter
                size={SIZE.XSMALLEST}
                fontFamily={FONT_FAMILY.SEMI_BOLD}
                isUnderlined
                customStyle={styles.TextWrapper}
                color={color.redBtn}>
                {otpScreenConstant.resendOtp(min, sec)}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </FormBox>
  );
};

OtpScreenView.navigationOptions = () => ({ header: null });

export default OtpScreenView;

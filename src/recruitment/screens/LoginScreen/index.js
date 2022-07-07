import React, { useRef, useState } from 'react';
import { Text, View, Keyboard } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Formik } from 'formik';
import { NavigationStack, SCREENS } from '../../constants/strings';
import { TextScaling } from '../../../teacher/globals/index';
import InputComponent from '../../../teacher/components/Input';
import TextComponent from '../../../teacher/components/text';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginFormSchema } from 'src/recruitment/utils/validations';
import { theme } from '../../../teacher/theme/index';
import sizes from '../../../teacher/globals/sizes';
// import facebook from '../../../teacher/components/assets/svgs/facebook';
// import google from '../../../teacher/components/assets/svgs/google';
// import apple from '../../../teacher/components/assets/svgs/apple';
import { defaultStyles } from '../../../teacher/globals/defaults';
import { useToast } from 'react-native-toast-notifications';
import * as actions from '../../../teacher/store/actions';
import { color } from '../../styles/colorConstant';

import styles from './styles';
import ButtonLoader from '@components/Loader';
import Button from '@components/Button';
import { SIZE } from '@styles/FontProperties';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '@assets/svgs/Logo';
import StatusBarComponent from '@components/StatusBarComponent';

// const socialButtons = [
//   {
//     id: '0',
//     name: 'Login with Facebook',
//     icon: facebook,
//     social: 'facebook',
//   },
//   {
//     id: '1',
//     name: 'Login with Google',
//     icon: google,
//     social: 'google',
//   },
//   {
//     id: '2',
//     name: 'Login with Apple',
//     icon: apple,
//     social: 'apple',
//   },
// ];

const Login = ({ navigation }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const formRef = useRef(null);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  const use = useRef(null);

  use.current = null;

  const handleSubmitEditing = param => {
    if (param === 'email') {
      passwordRef.current?.focus();
    } else {
      formRef.current?.handleSubmit();
    }
  };

  const onSubmit = values => {
    setIsLoading(true);
    Keyboard.dismiss();
    action
      .LoginUser(values)
      .then(response => {
        setIsLoading(false);
        if (response === 'unactive') {
          return navigation.navigate(NavigationStack.LANDING, {
            screen: SCREENS.OTP_SCREEN,
          });
        } else {
          if (response.role === 'teacher') {
            action.DeviceToken();
            AsyncStorage.setItem('Role', 'teacher');
            return navigation.replace(NavigationStack.TEACHER, {
              screen: NavigationStack.TEACHER,
            });
          } else {
            // action.DeviceToken();
            AsyncStorage.setItem('Role', 'recuitment');
            return navigation.replace(NavigationStack.RECRUITMENT, {
              screen: NavigationStack.RECRUITMENT,
            });
          }
        }
      })
      .catch(err => {
        setIsLoading(false);
        toast.show(err, {
          type: 'danger',
          normalColor: color.errorAlertColor,
        });
      });
  };

  // const handleSocialLogin = type => {
  //   switch (type) {
  //     case 'google':
  //       // action.handleGoogleLogin();
  //       break;

  //     case 'facebook':
  //       // action.handleFacebookLogin();
  //       break;

  //     case 'apple':
  //       // action.handleSocialLogout();
  //       break;

  //     default:
  //       break;
  //   }
  // };

  return (
    <View style={[defaultStyles.container, { backgroundColor: theme.bgTheme }]}>
      <StatusBarComponent statusBarColor={theme.bgTheme} isBarStyle={false} />

      <View style={defaultStyles.modalHeader}>
        <View style={styles.logo}>
          <SvgXml xml={Logo} width={'100%'} />
        </View>
      </View>

      <View style={styles.textInputContainer}>
        <Formik
          innerRef={formRef}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={onSubmit}
          validateOnChange
          validateOnBlur
          validateOnMount
          validationSchema={loginFormSchema}
          enableReinitialize>
          {({ handleChange, handleBlur, handleSubmit, errors, touched }) => {
            return (
              <>
                <InputComponent
                  ref={emailRef}
                  error={errors.email}
                  touched={touched.email}
                  onBlur={handleBlur('email')}
                  placeHolder={'Email'}
                  submitEditingHandle={() => handleSubmitEditing('email')}
                  handleChange={handleChange('email')}
                  keyboardType={'email-address'}
                  customStyle={{ backgroundColor: theme.bgWhite }}
                />

                <InputComponent
                  ref={passwordRef}
                  error={errors.password}
                  touched={touched.password}
                  onBlur={handleBlur('password')}
                  placeHolder={'Password'}
                  submitEditingHandle={() => handleSubmitEditing('password')}
                  handleChange={handleChange('password')}
                  keyboardType={'default'}
                  secure
                  customStyle={{ backgroundColor: theme.bgWhite }}
                />

                <Button
                  borderRadius={10}
                  isBorderColor={theme.bgColorBtn}
                  isBackgroundColor={theme.bgColorBtn}
                  onPress={handleSubmit}
                  label={'Login'}
                  textColor={theme.bgTheme}
                  height={45}
                  size={SIZE.XXSMALL}
                  width={'100%'}
                  loading={isLoading}
                  loader={
                    <ButtonLoader animating={true} bgColor={theme.bgTheme} />
                  }
                />
              </>
            );
          }}
        </Formik>

        <View style={styles.forgotPass}>
          <TextComponent
            handlePress={() => {
              // action.setModalComponent(<ForgotPassword />);
              navigation.navigate(SCREENS.FORGOT_PASSWORD);
            }}
            size={sizes.S}
            center
            color={theme.bgWhite}
            title={'Forgot Password?'}
          />
        </View>

        <View style={styles.hrow}>
          <View style={styles.line} />

          <View style={styles.orView}>
            <TextComponent
              color={theme.bgWhite}
              center
              customStyles={{ lineHeight: 25 }}
              title={'OR'}
              size={sizes.S}
            />
          </View>

          <View style={styles.line} />
        </View>

        {/* <FlatList
          data={socialButtons}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.social}
          renderItem={({ item }) => {
            return (
              <SocialButtonComponent
                icon={item.icon}
                handlePress={() => handleSocialLogin(item.social)}
                customStyles={styles.socialBtn}
              />
            );
          }}
        /> */}

        <View style={styles.terms}>
          <Text
            numberOfLines={2}
            allowFontScaling={TextScaling}
            style={styles.termsAndCondition}>
            {'By tapping Login you are agreeing to Dot & Line Learning'}

            <Text
              numberOfLines={2}
              allowFontScaling={TextScaling}
              style={[styles.termsAndCondition, { color: theme.bgColorBtn }]}>
              {' Terms & Conditions'}
            </Text>
          </Text>
        </View>

        <View style={styles.signUp}>
          <Button
            borderRadius={10}
            isBorderColor={theme.bgColorBtn}
            isBackgroundColor={'transparent'}
            onPress={() => navigation.navigate(SCREENS.SIGN_UP_SCREEN)}
            label={'Create an account'}
            textColor={theme.bgColorBtn}
            height={45}
            size={SIZE.XXSMALL}
            width={'100%'}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

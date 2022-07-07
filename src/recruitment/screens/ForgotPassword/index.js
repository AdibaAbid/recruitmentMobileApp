import React, { useRef } from 'react';

import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Formik } from 'formik';

import InputComponent from '../../../teacher/components/Input';
import TextComponent from '../../../teacher/components/text';
import Button from '../../../teacher/components/button';
import { Size } from '../../../teacher/globals';
import { theme } from '../../../teacher/theme';
import { useNavigation } from '@react-navigation/native';
import { forGotPasswordFormSchema } from '../../utils/validations';
import { getLineHeight, HP } from '../../../teacher/constants';
import * as actions from '../../../teacher/store/actions';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { defaultStyles } from '../../../teacher/globals/defaults';
import { useToast } from 'react-native-toast-notifications';
import { bindActionCreators } from 'redux';
import { color } from '@styles/colorConstant';
import { FontFamilyEnum } from '../../../teacher/constants/FontFamily';
import Logo from '@assets/svgs/Logo';
import StatusBarComponent from '@components/StatusBarComponent';

const ForgotPassword = () => {
  const emailRef = useRef(null);
  const formRef = useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  const toast = useToast();

  const handleSubmitEditing = param => {
    if (param === 'email') {
      formRef.current?.handleSubmit();
    }
  };

  const onSubmit = values => {
    action
      .ForgetPassword(values)
      .then(response => {
        toast.show(response.message, {
          type: 'success',
          normalColor: color.successAlertColor,
        });
      })
      .catch(err => {
        toast.show(err, {
          type: 'danger',
          normalColor: color.errorAlertColor,
        });
      });
  };

  return (
    <View style={styles.container}>
      <StatusBarComponent statusBarColor={theme.bgTheme} isBarStyle={false} />

      <View
        style={{
          marginTop: HP('8'),
        }}>
        <View style={defaultStyles.modalHeader}>
          <View style={styles.logo}>
            <SvgXml xml={Logo} width={'100%'} />
          </View>
        </View>

        <View style={styles.forgotPasswordWrapper}>
          <TextComponent
            title={'Forgot Password'}
            size={Size.M}
            center
            family={FontFamilyEnum.BOLD}
            customStyles={getLineHeight(30)}
            color={theme.bgColorBtn}
          />

          <TextComponent
            title={
              'Forgot your password? Not to worry, it happens. Just enter your registered email address and you can reset it. '
            }
            size={Size.S}
            center
            color={theme.bgWhite}
            customStyles={{ ...getLineHeight(24), marginVertical: HP('2') }}
          />

          <Formik
            innerRef={formRef}
            initialValues={{
              email: '',
            }}
            onSubmit={onSubmit}
            validateOnChange
            validateOnBlur
            validateOnMount
            validationSchema={forGotPasswordFormSchema}
            enableReinitialize>
            {({ handleChange, handleBlur, handleSubmit, errors, touched }) => {
              return (
                <>
                  <View style={styles.input}>
                    <InputComponent
                      ref={emailRef}
                      placeHolder={'Email'}
                      error={errors.email}
                      touched={touched.email}
                      onBlur={handleBlur('email')}
                      submitEditingHandle={() => handleSubmitEditing('email')}
                      handleChange={handleChange('email')}
                      keyboardType={'email-address'}
                      customStyle={{ backgroundColor: theme.bgWhite }}
                    />
                  </View>

                  <Button
                    title={'Send Email'}
                    center
                    size={Size.S}
                    family={FontFamilyEnum.SEMIBOLD}
                    color={theme.bgTheme}
                    handlePress={handleSubmit}
                    customStyles={defaultStyles.btnFilled}
                  />
                </>
              );
            }}
          </Formik>

          <View style={styles.signUp}>
            <TextComponent
              title={'Back to'}
              size={Size.S}
              center
              color={theme.bgWhite}
              customStyles={{ ...getLineHeight(24), marginVertical: HP('2') }}
            />
            <Button
              title={' Login'}
              center
              loadType={'signup'}
              size={Size.DEFAULT}
              color={theme.bgColorBtn}
              handlePress={() => navigation.goBack()}
              customStyles={styles.btnBackToLogin}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;

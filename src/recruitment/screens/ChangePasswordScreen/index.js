import React, { useRef, useState } from 'react';
import ToggleOffIcon from '@assets/icons/ToggleIcon';
import ToggleOnIcon from '@assets/icons/ToggleOnIcon';
import PasswordIcon from '@assets/svgs/PasswordIcon';
import FormInput from '@components/FormInput';
import SubmitButton from '@components/SubmitButton';
import { ChangePasswordScreenConstant } from '@constants/strings';
import { color } from '@styles/colorConstant';
import { Formik } from 'formik';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ChangePasswordFormSchema } from 'src/recruitment/utils/validations';
import { ChangePassword } from 'src/recruitment/api/Axios/client';
import { useToast } from 'react-native-toast-notifications';

const ChangePasswordScreen = () => {
  const [errorShow, setErrorShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const toast = useToast();

  const [fieldsNeedValidate, setFieldsNeedValidate] = useState([
    'oldpassword',
    'newpassword',
    'retypenewpassword',
  ]);
  const newPassword = useRef();
  const retypenewpassword = useRef();
  const [initialValues, setInitialValues] = useState({
    oldpassword: '',
    newpassword: '',
    retypenewpassword: '',
  });

  const onSubmit = (values, { resetForm }) => {
    setIsLoading(true);

    setTimeout(async () => {
      const res = await ChangePassword(values);
      if (res.success) {
        setIsLoading(false);

        toast.show(res.message, {
          type: 'success',
          normalColor: color.successAlertColor,
        });
        resetForm();
      } else {
        setIsLoading(false);

        toast.show(res.message, {
          type: 'danger',
          normalColor: color.errorAlertColor,
        });
      }
    }, 3000);
  };

  return (
    <View style={styles.parentView}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnChange
        validateOnBlur
        validateOnMount
        validationSchema={ChangePasswordFormSchema}
        enableReinitialize>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          values,
          touched,
        }) => {
          return (
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps={'handled'}>
              <FormInput
                title={ChangePasswordScreenConstant.previousPassword}
                onChangeText={handleChange('oldpassword')}
                onBlur={handleBlur('oldpassword')}
                passwordTextField={passwordVisibility}
                defaultValue={values.oldpassword}
                errorShow={errorShow}
                error={errors.oldpassword}
                isRequired={true}
                onSubmitEditing={() => {
                  newPassword.current.focus();
                }}
              />

              <FormInput
                ref={newPassword}
                title={ChangePasswordScreenConstant.newPassword}
                onChangeText={handleChange('newpassword')}
                onBlur={handleBlur('newpassword')}
                defaultValue={values.newpassword}
                error={errors.newpassword}
                errorShow={errorShow}
                passwordTextField={passwordVisibility}
                SvgIcon={<PasswordIcon width={15} height={15} />}
                blurOnSubmit={true}
                onSubmitEditing={() => {
                  retypenewpassword.current.focus();
                }}
              />

              <FormInput
                ref={retypenewpassword}
                title={ChangePasswordScreenConstant.reTypeNewPassword}
                onChangeText={handleChange('retypenewpassword')}
                onBlur={handleBlur('retypenewpassword')}
                defaultValue={values.retypenewpassword}
                error={errors.retypenewpassword}
                errorShow={errorShow}
                passwordTextField={passwordVisibility}
                SvgIcon={<PasswordIcon width={15} height={15} />}
                blurOnSubmit={true}
              />
              <View style={styles.toggleView}>
                <View style={styles.ToggleButton}>
                  <TouchableOpacity
                    onPress={() => {
                      if (showToggle) {
                        setShowToggle(false);
                        setPasswordVisibility(true);
                      } else {
                        setShowToggle(true);
                        setPasswordVisibility(false);
                      }
                    }}>
                    {showToggle ? <ToggleOnIcon /> : <ToggleOffIcon />}
                  </TouchableOpacity>

                  <Text style={styles.toggleTex}>
                    {ChangePasswordScreenConstant.ShowPassword}
                  </Text>
                </View>
              </View>

              <SubmitButton
                fieldsNeedValidate={fieldsNeedValidate}
                onPress={handleSubmit}
                error={errors}
                setErrorShow={setErrorShow}
                touched={touched}
                disabledButton={isLoading}
                label={'Save'}
                loading={isLoading}
                width={'100%'}
              />
            </ScrollView>
          );
        }}
      </Formik>
    </View>
  );
};

export default ChangePasswordScreen;

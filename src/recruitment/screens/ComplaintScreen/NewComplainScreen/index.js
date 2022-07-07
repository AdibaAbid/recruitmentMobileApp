import React, { useContext, useState } from 'react';
import FormInput from '@components/FormInput';
import SubmitButton from '@components/SubmitButton';
import { newComplaintScreenConstant, SCREENS } from '@constants/strings';
import { color } from '@styles/colorConstant';
import { Formik } from 'formik';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { newCompalintScreenSchema } from 'src/recruitment/utils/validations';
import { styles } from './styles';
import DetailedInput from '@components/DetailedInput';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import { formStepsArray } from 'src/recruitment/arrayConst';
import DeviceInfo from 'react-native-device-info';
import { ComplaintRegistration } from 'src/recruitment/api/Axios/client';
import { useToast } from 'react-native-toast-notifications';

const NewComplainScreen = ({ navigation }) => {
  const [errorShow, setErrorShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const [userDevice, setUserDevice] = useState();

  const [fieldsNeedValidate, setFieldsNeedValidate] = useState(['comments']);
  const { stepNumber, userID } = useContext(CredientialsContext);
  React.useEffect(() => {
    const checkDeviceInfo = () => {
      if (DeviceInfo.isTablet()) {
        setUserDevice('Tablet');
      } else {
        setUserDevice('Mobile');
      }
    };
    checkDeviceInfo();
  }, [stepNumber]);

  const onSubmit = async (values, { resetForm }) => {
    setIsLoading(true);

    const res = await ComplaintRegistration(values);
    if (res.success) {
      setIsLoading(false);
      toast.show(newComplaintScreenConstant.successMsg, {
        type: 'success',
        normalColor: color.successAlertColor,
      });
      setTimeout(() => {
        navigation.navigate(SCREENS.MINIMUM_CRITERIA);
      }, 600);
    } else {
      setIsLoading(false);
      toast.show(res.message, {
        type: 'danger',
        normalColor: color.errorAlertColor,
      });
    }
    resetForm();
  };

  return (
    <View style={styles.parentView}>
      <Formik
        initialValues={{
          h1Text: formStepsArray[stepNumber - 1],
          comments: '',
          id: userID,
          device_status: userDevice,
        }}
        onSubmit={onSubmit}
        validateOnChange
        validateOnBlur
        validateOnMount
        validationSchema={newCompalintScreenSchema}
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
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              keyboardDismissMode={true}>
              <FormInput
                title={newComplaintScreenConstant.CurrentStage}
                passwordTextField={false}
                defaultValue={values.h1Text}
                isRequired={true}
                customStyle={{ marginBottom: 6 }}
                editable={false}
              />
              <DetailedInput
                title={newComplaintScreenConstant.Details}
                onChangeText={handleChange('comments')}
                onBlur={handleBlur('comments')}
                passwordTextField={false}
                value={values.comments}
                error={errors.comments}
                errorShow={errorShow}
                isRequired={true}
                multiline
                numberOfLines={6}
              />

              <SubmitButton
                fieldsNeedValidate={fieldsNeedValidate}
                onPress={handleSubmit}
                error={errors}
                setErrorShow={setErrorShow}
                touched={touched}
                disabledButton={isLoading}
                label={newComplaintScreenConstant.Submit}
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

export default NewComplainScreen;

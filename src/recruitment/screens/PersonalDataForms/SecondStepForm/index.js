import React, { useEffect, useState, useContext } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {
  getWindowWidth,
  scaleHeight,
  scaleWidth,
} from 'src/recruitment/utils/platformUtils';
import { EducationAndWorkExprience } from '@constants/strings';
import ActionSheetDropDownWithoutCountry from '@components/ActionSheetDropDownWithoutCountry';
import FormInput from '@components/FormInput';
import CounterButton from '@components/CounterButton';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import { defaultProp, highestEducationArray } from 'src/recruitment/arrayConst';
import RadioButton from '@components/RadioButton';
import { fetchInstitue, fetchSubjects } from 'src/recruitment/api/Fetch';
import { fetch, getFullYear } from 'src/recruitment/api/Fetch/FetchApiData';
import { color } from '@styles/colorConstant';
import Button from '@components/Button';
import SubmitButton from '@components/SubmitButton';
import { useToast } from 'react-native-toast-notifications';
import { View } from 'react-native';
import styles from './styles';

const SecondStepForm = ({
  handleChange,
  handleBlur,
  errors,
  values,
  setFieldValue,
  handleSubmit,
  decreaseLevel,
  touched,
}) => {
  const [yearOfGrad, setYearOfGrad] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [institutes, setInstitues] = useState([]);
  const [errorShow, setErrorShow] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const [fieldsNeedValidate, setFieldsNeedValidate] = useState([
    'education',
    'institute',
    'gradyear',
    'major',
    'currentlyworking',
    'subjectatdotandline',
  ]);
  let { setSubjectsData } = useContext(CredientialsContext);

  useEffect(() => {
    const verifyInformation = () => {
      let validateFields = fieldsNeedValidate;
      setFieldsNeedValidate(validateFields);
    };
    verifyInformation();
  }, [fieldsNeedValidate]);

  useEffect(() => {
    let unmounted = false;

    const result = getFullYear();
    if (!unmounted) {
      setYearOfGrad(result);
    }
    return () => {
      unmounted = true;
    };
  }, []);

  useEffect(() => {
    let unmounted = false;
    async function fetchData(fetchAPI) {
      const response = await fetch(fetchAPI);

      if (!unmounted) {
        setSubjects(response);
        setSubjectsData(response);
      }
    }
    fetchData(fetchSubjects);
    return () => {
      unmounted = true;
    };
  }, [setSubjectsData]);

  useEffect(() => {
    let unmounted = false;

    async function fetchData(fetchAPI) {
      const response = await fetch(fetchAPI);

      if (!unmounted) {
        setInstitues(response);
      }
    }
    fetchData(fetchInstitue);
    return () => {
      unmounted = true;
    };
  }, []);

  const submitBtn = async error => {
    setIsLoading(true);

    setTimeout(() => {
      if (Object.keys(error).length > 0) {
        setErrorShow(true);
        setIsLoading(false);
        toast.show('Resolve all the errors', {
          type: 'danger',
          normalColor: color.errorAlertColor,
        });
      } else {
        setIsLoading(false);
        handleSubmit();
      }
    }, 2000);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <ActionSheetDropDownWithoutCountry
        title={values.education}
        labelText={EducationAndWorkExprience.higestQualification}
        modalLabel={EducationAndWorkExprience.chooseOptions}
        data={highestEducationArray}
        preSelected={[{ value: values.education }]}
        onChangeText={handleChange('education')}
        error={errors.education}
        errorShow={errorShow}
        searchBar={false}
        width={'100%'}
      />

      <ActionSheetDropDownWithoutCountry
        title={values.institute}
        labelText={EducationAndWorkExprience.nameOfInstitute}
        modalLabel={EducationAndWorkExprience.chooseOptions}
        data={institutes}
        preSelected={[{ value: values.institute }]}
        onChangeText={handleChange('institute')}
        addButtonText={EducationAndWorkExprience.addInstituteBtn}
        error={errors.institute}
        errorShow={errorShow}
        searchBar={true}
        width={'100%'}
      />

      <View style={styles.Row}>
        <ActionSheetDropDownWithoutCountry
          title={values.gradyear}
          labelText={EducationAndWorkExprience.yearOfGrad}
          modalLabel={EducationAndWorkExprience.chooseOptions}
          data={yearOfGrad}
          preSelected={[{ value: values.gradyear }]}
          onChangeText={handleChange('gradyear')}
          error={errors.gradyear}
          errorShow={errorShow}
          searchBar={true}
          width={getWindowWidth() / 2.3}
        />

        <FormInput
          title={EducationAndWorkExprience.majorSpecialization}
          onChangeText={handleChange('major')}
          onBlur={handleBlur('major')}
          defaultValue={values.major}
          error={errors.major}
          errorShow={errorShow}
          isRequired={true}
          width={getWindowWidth() / 2.3}
          customStyle={{
            marginBottom: scaleWidth('2'),
          }}
        />
      </View>

      <View style={styles.Row}>
        <View style={styles.RadioBtnView}>
          <RadioButton
            PROP={defaultProp}
            label={EducationAndWorkExprience.currentlyWorking}
            onChangeValue={handleChange('currentlyworking')}
            defaultOption={values.currentlyworking}
            errorShow={errorShow}
            error={errors.currentlyworking}
            spaceBetween={true}
            marginBottom={13}
          />
        </View>

        <CounterButton
          labelText={EducationAndWorkExprience.teachingExprience}
          onChangeText={handleChange('yearofteaching')}
          value={Number(values.yearofteaching)}
          error={errors.yearofteaching}
          valueText={'Years'}
          errorShow={errorShow}
          width={getWindowWidth() / 2.4}
        />
      </View>

      {values.currentlyworking === 'yes' && (
        <FormInput
          title={EducationAndWorkExprience.whereWorking}
          onChangeText={handleChange('workingwhere')}
          onBlur={handleBlur('workingwhere')}
          defaultValue={values.workingwhere}
          errorShow={errorShow}
          error={errors.workingwhere}
          width={'100%'}
          customStyle={{
            marginBottom: scaleWidth('2'),
            marginTop: scaleHeight('-5'),
          }}
        />
      )}
      <ActionSheetDropDownWithoutCountry
        title={values.subjectatdotandline?.map(item =>
          item?.label ? item?.label : item,
        )}
        labelText={EducationAndWorkExprience.teachUsWithDotAndLine}
        modalLabel={EducationAndWorkExprience.chooseOptions}
        data={subjects}
        multiple
        addButtonText={EducationAndWorkExprience.addSubjectsBtn}
        preSelected={values.subjectatdotandline}
        onChangeText={e => setFieldValue('subjectatdotandline', e)}
        error={errors.subjectatdotandline}
        errorShow={errorShow}
        searchBar={true}
        width={'100%'}
      />

      <View style={styles.Row}>
        <Button
          borderRadius={6}
          isBorderColor={color.transparent}
          isBackgroundColor={color.lightPink}
          onPress={() => {
            decreaseLevel();
          }}
          label={EducationAndWorkExprience.previous}
          textColor={color.themeColorShockingPink}
          height={50}
          width={getWindowWidth() / 2.4}
          isUppercase
          isBeforeTextIcon={false}
        />

        <SubmitButton
          fieldsNeedValidate={fieldsNeedValidate}
          onPress={() => submitBtn(errors)}
          error={errors}
          touched={touched}
          width={getWindowWidth() / 2.4}
          disabledButton={isLoading}
          loading={isLoading}
          label={EducationAndWorkExprience.next}
        />
      </View>
    </ScrollView>
  );
};

export default SecondStepForm;

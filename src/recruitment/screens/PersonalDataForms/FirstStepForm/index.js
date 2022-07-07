import React, { useContext, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import FormInput from '@components/FormInput';
import { PersonalInfoScreenConstant } from '@constants/strings';
import { color } from '@styles/colorConstant';
import {
  fetchCountries,
  fetchCities,
  fetchAboutUsAPI,
  fetchBloggerNameAPI,
  fetchPhoneNumberAPI,
  fetchSocialMediaAPI,
  fetchTeacherNameAPI,
} from '../../../api/Fetch';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
// import PhoneNumberInput from '@components/PhoneNumberInput';
import RadioButton from '@components/RadioButton';
import CustomDatePicker from '@components/CustomDatePicker';
import GooglePlacesAddressApi from '@components/GooglePlacesAddressApi';
import ActionSheetDropDown from '@components/ActionSheetDropDown';
import ActionSheetDropDownWithoutCountry from '@components/ActionSheetDropDownWithoutCountry';
import { genderArray } from 'src/recruitment/arrayConst';
import { styles } from './styles';
import PhoneNumberTextField from '@components/PhoneNumberTextField';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import { useToast } from 'react-native-toast-notifications';
import SubmitButton from '@components/SubmitButton';

const FirstStepForm = ({
  handleChange,
  handleBlur,
  errors,
  values,
  setBlogger,
  setOtherAboutUs,
  handleSubmit,
  touched,
}) => {
  const phoneNumberInput = useRef();
  const lastName = useRef();
  const toast = useToast();

  const [countryData, setCountryData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [aboutUsOptions, setAboutUsOptions] = useState([]);
  const [bloggerName, setbloggerName] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const [countryCodeData, setCountryCodeData] = useState([]);
  const [errorShow, setErrorShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fieldsNeedValidate, setFieldsNeedValidate] = useState([
    'firstname',
    'lastname',
    'phoneNumber',
    'dateofbirth',
    'gender',
    'country',
    'city',
    'area',
    'address',
    'aboutus',
    'otheraboutus',
  ]);

  useEffect(() => {
    const verifyInformation = () => {
      let validateFields = fieldsNeedValidate;
      setFieldsNeedValidate(validateFields);
    };
    verifyInformation();
  }, [fieldsNeedValidate]);

  const { userPhoneNumber, storeName } = useContext(CredientialsContext);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      if (userPhoneNumber) {
        values.phoneNumber = userPhoneNumber;
        if (values.firstname !== '') {
          values.firstname;
        } else {
          values.firstname = storeName;
        }
      }
    }
    return () => {
      unmounted = true;
    };
  }, [countryCodeData, storeName, userPhoneNumber, values]);

  useEffect(() => {
    // Teachers API

    let unmounted = false;
    async function fetchData(fetchAPI) {
      const res = await fetchAPI();
      let arr = [];
      if (!unmounted) {
        Object.keys(res).forEach(async (key, index) => {
          arr.push({
            id: index,
            value: res[key],
            label: res[key],
          });
        });
        setTeacherData(arr);
        setOtherAboutUs(arr);
      }
    }
    fetchData(fetchTeacherNameAPI);
    return () => {
      unmounted = true;
    };
  }, [setOtherAboutUs]);

  useEffect(() => {
    // Bloggers API
    let unmounted = false;

    async function fetchData(fetchAPI) {
      const res = await fetchAPI();
      if (!unmounted) {
        const bloggerOptions = res.data.map(({ title, id }) => {
          return {
            label: title,
            value: id,
            id: id,
          };
        });
        setbloggerName(bloggerOptions);
        setBlogger(bloggerOptions);
      }
    }
    fetchData(fetchBloggerNameAPI);
    return () => {
      unmounted = true;
    };
  }, [setBlogger]);

  useEffect(() => {
    // socialMedia API
    let unmounted = false;

    async function fetchData(fetchAPI) {
      const res = await fetchAPI();
      if (!unmounted) {
        const socialMediaOptions = res.map((item, id) => {
          return {
            label: item,
            value: item,
            id: id,
          };
        });

        setSocialMedia(socialMediaOptions);
      }
    }
    fetchData(fetchSocialMediaAPI);
    return () => {
      unmounted = true;
    };
  }, []);

  useEffect(() => {
    // phoneNumber API
    let unmounted = false;

    async function fetchData(fetchAPI) {
      const res = await fetchAPI();
      if (!unmounted) {
        setCountryCodeData(res.data);
      }
    }
    fetchData(fetchPhoneNumberAPI);
    return () => {
      unmounted = true;
    };
  }, []);

  useEffect(() => {
    // country and city API
    let unmounted = false;

    async function fetchCountryAndCity() {
      if (values.country) {
        const res = await fetchCities(values.countrycode_2);

        if (!unmounted) {
          const citiesOptions = res.map(({ name, id }) => {
            return {
              label: name,
              value: name,
              id: id,
            };
          });
          setCityData(citiesOptions);
        }
      }

      const res = await fetchCountries();
      if (!unmounted) {
        const countryOptions = res.map(({ name, iso2, id }) => {
          return {
            label: name,
            value: iso2,
            id: id,
          };
        });
        setCountryData(countryOptions);
      }
    }
    fetchCountryAndCity();
    return () => {
      unmounted = true;
    };
  }, [values.country, values.countrycode_2, values]);

  useEffect(() => {
    // About us API
    const fetchData = async () => {
      const response = await fetchAboutUsAPI();
      const result = response.data.map((item, id) => {
        return {
          label: item,
          value: item,
          id: id,
        };
      });
      setAboutUsOptions(result);
    };
    fetchData();
  }, []);

  const checkSwitch = param => {
    switch (param) {
      case 'Social media':
        return (
          <ActionSheetDropDownWithoutCountry
            title={values.otheraboutus}
            labelText={PersonalInfoScreenConstant.socialMedia}
            modalLabel={PersonalInfoScreenConstant.selectOptions}
            data={socialMedia}
            isMultiple={false}
            onChangeText={handleChange('otheraboutus')}
            onChangeBlogger={handleChange('socialMediaName')}
            isBlogger={true}
            error={errors.otheraboutus}
            errorShow={errorShow}
            searchBar={false}
            width={'100%'}
          />
        );
      case 'Dot & Line Teacher Partner':
        return (
          <ActionSheetDropDownWithoutCountry
            title={values.otheraboutus}
            labelText={PersonalInfoScreenConstant.dotAndLineTeacherPartner}
            modalLabel={PersonalInfoScreenConstant.selectOptions}
            data={teacherData}
            isMultiple={false}
            onChangeText={handleChange('otheraboutus')}
            isBlogger={false}
            preSelected={[{ value: values.otheraboutus }]}
            error={errors.otheraboutus}
            errorShow={errorShow}
            searchBar={true}
            width={'100%'}
          />
        );

      case 'Influencer':
        return (
          <ActionSheetDropDownWithoutCountry
            title={
              values.otheraboutus
                ? bloggerName.find(item => item.id == values.otheraboutus)
                    ?.label
                : ''
            }
            labelText={PersonalInfoScreenConstant.bloggerName}
            modalLabel={PersonalInfoScreenConstant.selectOptions}
            data={bloggerName}
            isMultiple={false}
            onChangeText={handleChange('otheraboutus')}
            onChangeBlogger={handleChange('bloggerName')}
            isBlogger={true}
            error={errors.bloggerName}
            errorShow={errorShow}
            searchBar={true}
            width={'100%'}
          />
        );
      default:
        null;
    }
  };

  const SubmitBtn = async error => {
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
    <View style={styles.SafeAreaView}>
      <View style={styles.Row}>
        <FormInput
          title={PersonalInfoScreenConstant.firstName}
          onChangeText={handleChange('firstname')}
          onBlur={handleBlur('firstname')}
          defaultValue={values.firstname}
          error={errors.firstname}
          isRequired={true}
          errorShow={errorShow}
          onSubmitEditing={() => {
            lastName.current.focus();
          }}
          customStyle={styles.InputNameBoxWrapper}
        />
        <FormInput
          ref={lastName}
          title={PersonalInfoScreenConstant.lastName}
          onChangeText={handleChange('lastname')}
          onBlur={handleBlur('lastname')}
          defaultValue={values.lastname}
          error={errors.lastname}
          isRequired={true}
          errorShow={errorShow}
          customStyle={styles.InputNameBoxWrapper}
        />
      </View>

      {/* <ContactNumberContainer>
        <TextWrapper
          fontFamily={FONT_FAMILY.REGULAR}
          size={SIZE.SMALLEST}
          color={color.themeColorShockingPink}>
          {PersonalInfoScreenConstant.contactNumber}
        </TextWrapper>
        <PhoneNumberInput
          ref={phoneNumber}
          defaultValue={values.number}
          placeholder={PersonalInfoScreenConstant.contactNumber}
          isContactNumber={true}
          error={errors.number}
          // onChangeCountry={handleChange('phoneCountryCode')}
          countryCodeValue={values.countryCode}
          onChangeValue={handleChange('number')}
          showErrorSvg={false}
          onSubmitEditing={() => {
            cnicpassport.current.focus();
          }}
        />
      </ContactNumberContainer> */}

      <PhoneNumberTextField
        ref={phoneNumberInput}
        title={PersonalInfoScreenConstant.contactNumber}
        borderColor={color.borderColor}
        borderWidth={1}
        onChangeText={handleChange('phoneNumber')}
        onBlur={handleBlur('phoneNumber')}
        defaultValue={userPhoneNumber}
        codeData={countryCodeData}
        countryCode={values.phonecode}
        countrycode={handleChange('countrycode')}
        onChangeCode={handleChange('phonecode')}
        error={errors.phoneNumber}
        errorShow={errorShow}
        showErrorSvg={false}
        flags={values.countrycode}
        customStyle={styles.PhoneNumberTextBox}
      />

      <View style={styles.DatePickerView}>
        <Text
          color={color.blackBorderColor}
          size={SIZE.SMALLEST}
          fontFamily={FONT_FAMILY.SEMI_BOLD}>
          {PersonalInfoScreenConstant.dob}
        </Text>
        <CustomDatePicker
          textStyle={styles.datePickerTextStyle}
          defaultDate={values.dateofbirth}
          onDateChange={handleChange('dateofbirth')}
          error={errors.dateofbirth}
          errorShow={errorShow}
        />
      </View>

      <RadioButton
        PROP={genderArray}
        label={PersonalInfoScreenConstant.gender}
        onChangeValue={handleChange('gender')}
        defaultOption={values.gender}
        error={errors.gender}
        errorShow={errorShow}
      />

      <ActionSheetDropDown
        title={values.country}
        placeholder={PersonalInfoScreenConstant.chooseCountry}
        labelText={PersonalInfoScreenConstant.country}
        modalLabel={PersonalInfoScreenConstant.countryModalText}
        data={countryData}
        onBlur={handleBlur('country')}
        onChangeText={handleChange('country')}
        ChangeCity={handleChange('city')}
        ChangeArea={handleChange('area')}
        onChangeCode={handleChange('countrycode_2')}
        countryCode={values.countrycode_2}
        error={errors.country}
        errorShow={errorShow}
        showFlag={true}
        searchBar={true}
      />
      <ActionSheetDropDownWithoutCountry
        title={values.city}
        placeholder={PersonalInfoScreenConstant.chooseCity}
        labelText={PersonalInfoScreenConstant.city}
        modalLabel={PersonalInfoScreenConstant.citiesModalText}
        data={cityData}
        onChangeText={handleChange('city')}
        error={errors.city}
        errorShow={errorShow}
        preSelected={[{ value: values.city }]}
        searchBar={true}
        width={'100%'}
      />

      <GooglePlacesAddressApi
        onChangeText={handleChange('area')}
        error={errors.area}
        errorShow={errorShow}
        labelText={PersonalInfoScreenConstant.area}
        title={values.area}
        placeholder={PersonalInfoScreenConstant.chooseArea}
        modalLabel={PersonalInfoScreenConstant.selectArea}
        countryCode={values.countrycode_2}
        value={values.area}
      />
      <FormInput
        title={PersonalInfoScreenConstant.address}
        onChangeText={handleChange('address')}
        placeholder={PersonalInfoScreenConstant.addressPlaceHolder}
        onBlur={handleBlur('address')}
        defaultValue={values.address}
        error={errors.address}
        errorShow={errorShow}
        isRequired={true}
        style={styles.InputBoxWrapper}
      />
      <ActionSheetDropDownWithoutCountry
        title={values.aboutus}
        labelText={PersonalInfoScreenConstant.howDidYouHear}
        modalLabel={PersonalInfoScreenConstant.selectOptions}
        data={aboutUsOptions}
        isMultiple={false}
        preSelected={[{ value: values.aboutus }]}
        onChangeText={handleChange('aboutus')}
        changeOtherAboutUs={handleChange('otheraboutus')}
        clearOtherAboutUs={values.otheraboutus}
        error={errors.aboutus}
        errorShow={errorShow}
        searchBar={false}
        width={'100%'}
      />
      {/* Other About US Options using switch case */}
      {checkSwitch(values.aboutus)}

      <SubmitButton
        fieldsNeedValidate={fieldsNeedValidate}
        onPress={() => SubmitBtn(errors)}
        error={errors}
        touched={touched}
        disabledButton={isLoading}
        width={'100%'}
        loading={isLoading}
        label={PersonalInfoScreenConstant.next}
        setErrorShow={setErrorShow}
      />
    </View>
  );
};

export default FirstStepForm;

import React, { useRef, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { ActivityIndicator, View } from 'react-native';
import {
  StepFourSchema,
  StepOneSchema,
  StepThreeSchema,
  StepTwoSchema,
} from 'src/recruitment/utils/validations';
import { color } from '@styles/colorConstant';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import FirstStepForm from '../../FirstStepForm';
import SecondStepForm from '../../SecondStepForm';
import FourthStepForm from '../../FourthStepForm';
import FivthStepForm from '../../FivthStepForm';

import {
  AsyncStorageDataConstant,
  MultiStepFormConstant,
  SCREENS,
} from '@constants/strings';
import ThirdStepForm from '../../ThirdStepForm';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import { styles } from '../style';
import {
  GetUserData,
  SubmitApplication,
  UserPersonalInfo,
} from 'src/recruitment/api/Axios/client';
import { initialValues, socialMediaName } from 'src/recruitment/arrayConst';
import { useFocusEffect } from '@react-navigation/core';
import { useToast } from 'react-native-toast-notifications';
import {
  getFirstStepData,
  getUserDataStepFour,
  getUserDataStepOne,
  getUserDataStepThree,
  getUserDataStepTwo,
} from './Steps';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProgressStepsForm = ({
  navigation,
  setActiveStepNumber,
  activeStepNumber,
}) => {
  let {
    stepNumber,
    wifiSpeed,
    setUserProfileImage,
    setUserPhoneNumber,
    setIsFormSubmited,
    stepNoEditBtn,
    userPhoneNumber,
    setUserEmail,
    subjectData,
    setStoreName,
    setStepNoEditBtn,
    isReviewApplication,
  } = useContext(CredientialsContext);

  const toast = useToast();

  useFocusEffect(
    React.useCallback(() => {
      if (stepNoEditBtn !== null) {
        setActiveStepNumber(stepNoEditBtn);
      }
    }, [setActiveStepNumber, stepNoEditBtn]),
  );

  const formRef = useRef();
  const formRef2 = useRef();
  const formRef3 = useRef();
  const formRef4 = useRef();

  const [isError, setIsError] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [loader, setLoader] = useState(false);
  const [otherAboutUs, setOtherAboutUs] = useState([]);
  const [blogger, setBlogger] = useState([]);
  const [count, setCount] = useState(0);

  const [userInitialDataFromAPI, setUserInitialDataFromAPI] =
    useState(initialValues);
  const [apiData, setApiData] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (apiData && counter === 0) {
      setCounter(1);
    }
  }, [apiData, userPhoneNumber, counter]);

  useEffect(() => {
    if (stepNumber !== null) {
      setActiveStepNumber(stepNumber);
    }
  }, [stepNumber, setActiveStepNumber]);

  useEffect(() => {
    appData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setUserProfileImage, activeStepNumber]);

  const appData = async () => {
    const res = await GetUserData();

    const code = res.userdata.phonecode;
    setUserProfileImage(res.userdata.profilepicture);
    setUserEmail(res.userdata.email);

    Object.keys(res.userdata).forEach(async (key, index) => {
      if (userInitialDataFromAPI.hasOwnProperty(key)) {
        userInitialDataFromAPI[key] = res.userdata[key];

        if (key == 'phoneNumber') {
          const number = res.userdata[key].slice(code ? code.length : 3);

          setUserPhoneNumber(number);
        }
        if (key == 'name') {
          setStoreName(res.userdata[key]);
        } else {
          setApiData({
            ...userInitialDataFromAPI,
            key: res.userdata[key],
          });
        }
      }
    });
  };

  useEffect(() => {
    if (subjectData && subjectData.length && userInitialDataFromAPI && !count) {
      setCount(1);

      let subjects = userInitialDataFromAPI?.subjectatdotandline.map(item => {
        return subjectData.find(subject => subject.label === item);
      });

      formRef2.current.setFieldValue('subjectatdotandline', subjects);
    }
  }, [count, subjectData, userInitialDataFromAPI]);

  const increseLevel = () => {
    if (activeStepNumber >= 0 && activeStepNumber < 5) {
      setIsError(false);
      setActiveStepNumber(prevCount => prevCount + 1);
      setDisabled(false);
    }
  };

  const decreaseLevel = () => {
    if (activeStepNumber < 5 && activeStepNumber > 0) {
      setActiveStepNumber(prevCount => prevCount - 1);
      setDisabled(false);
    }
  };

  const levelOneHit = async DataStepOne => {
    const data = {
      level: 1,
      ...DataStepOne,
      name: `${DataStepOne.firstname} ${DataStepOne.lastname}`,
      phoneNumber: DataStepOne.phonecode + DataStepOne.phoneNumber,
    };
    let bloggerId = blogger.find(
      item => item.value === DataStepOne.otheraboutus,
    );

    let teacherId = otherAboutUs.find(
      item => item.value === DataStepOne.otheraboutus,
    );

    const res = await UserPersonalInfo({
      ...data,
      otheraboutus:
        bloggerId?.id.toString() ||
        teacherId?.value ||
        DataStepOne.otheraboutus,
    });

    if (res.status) {
      let getLevelData = getFirstStepData(
        res.userdata,
        userPhoneNumber,
        socialMediaName,
      );
      Object.keys(getLevelData).forEach(key => {
        formRef.current.setFieldValue(key, getLevelData[key]);
      });
      isReviewApplication ? setStepNoEditBtn(4) : increseLevel();
    } else {
      toast.show(res.message, {
        type: 'danger',
        normalColor: color.errorAlertColor,
      });
    }
  };

  const levelTwoHit = async DataStepTwo => {
    const data = {
      level: 2,
      ...DataStepTwo,
      subjectatdotandline: DataStepTwo.subjectatdotandline.map(
        item => item.label,
      ),
    };

    const res = await UserPersonalInfo(data);
    if (res.status == 'false') {
      toast.show(res.message, {
        type: 'danger',
        normalColor: color.errorAlertColor,
      });
    } else {
      isReviewApplication ? setStepNoEditBtn(4) : increseLevel();
    }
  };

  const levelThreeHit = async DataStepThree => {
    setIsError(true);

    const data = {
      level: 3,
      ...DataStepThree,
      netSpeed: wifiSpeed ? wifiSpeed : DataStepThree.netSpeed,
      hoursperweek: parseInt(DataStepThree.hoursperweek, 10),
      haveLaptop: 'true' ? true : false,
      stableInternet: 'true' ? true : false,
    };

    const res = await UserPersonalInfo(data);
    if (res.status) {
      isReviewApplication ? setStepNoEditBtn(4) : increseLevel();
    } else {
      setIsError(true);
      toast.show(res.error, {
        type: 'danger',
        normalColor: color.errorAlertColor,
      });
    }
  };

  const levelFourHit = async val => {
    setIsError(true);
    setDisabled(true);

    const data = {
      level: 4,
      profilepicture: val.profilepicture,
      video: val.video,
    };

    if (data.profilepicture && data.video) {
      setDisabled(true);

      const res = await UserPersonalInfo(data);

      if (res.status) {
        isReviewApplication ? setStepNoEditBtn(4) : increseLevel();
      } else {
        toast.show(res.error, {
          type: 'danger',
          normalColor: color.errorAlertColor,
        });
      }
    } else {
      setIsError(true);
      toast.show('Kindly filled video and picture filled of step four', {
        type: 'danger',
        normalColor: color.errorAlertColor,
      });
    }
  };

  const onSubmit = async () => {
    setLoader(true);
    const res = await SubmitApplication();

    if (res.status == 'true') {
      setLoader(false);
      navigation.navigate(SCREENS.THANK_YOU_SCREEN);
      setIsFormSubmited('true');
      AsyncStorage.setItem(AsyncStorageDataConstant.FORM_SUBMITED, 'true');
    }
  };

  return (
    <>
      <View>
        <View style={styles.FooterContainer}>
          <ProgressSteps
            {...styles.progressStepsStyle}
            activeStep={activeStepNumber}>
            <ProgressStep
              scrollable={false}
              onNext={() => {
                formRef.current.handleSubmit();
              }}
              label={MultiStepFormConstant.firstStepHeading}
              nextBtnStyle={styles.firstNextButton}
              nextBtnTextStyle={styles.textColor}
              nextBtnText={MultiStepFormConstant.next}
              removeBtnRow>
              <Formik
                innerRef={formRef}
                initialValues={getUserDataStepOne(
                  userInitialDataFromAPI,
                  userPhoneNumber,
                )}
                onSubmit={levelOneHit}
                validateOnChange
                validationSchema={StepOneSchema}
                validateOnMount={true}
                validateOnBlur={true}
                enableReinitialize={true}>
                {({
                  handleChange,
                  handleBlur,
                  errors,
                  handleSubmit,
                  values,
                  setFieldValue,
                  touched,
                }) => {
                  return (
                    <FirstStepForm
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                      errors={errors}
                      setOtherAboutUs={setOtherAboutUs}
                      setBlogger={setBlogger}
                      values={values}
                      formRef={formRef}
                      handleSubmit={handleSubmit}
                      touched={touched}
                    />
                  );
                }}
              </Formik>
            </ProgressStep>

            <ProgressStep
              scrollable={false}
              onNext={() => {
                formRef2.current.handleSubmit();
              }}
              nextBtnDisabled={disabled}
              label={MultiStepFormConstant.sencondStepHeading}
              nextBtnStyle={styles.nextButton}
              nextBtnTextStyle={styles.textColor}
              nextBtnText={MultiStepFormConstant.next}
              onPrevious={decreaseLevel}
              previousBtnStyle={styles.previousButtonStyle}
              previousBtnTextStyle={styles.textColor}
              previousBtnText={MultiStepFormConstant.previous}
              removeBtnRow>
              <Formik
                innerRef={formRef2}
                initialValues={getUserDataStepTwo(userInitialDataFromAPI)}
                onSubmit={levelTwoHit}
                validateOnChange
                validationSchema={StepTwoSchema}
                validateOnMount={true}
                validateOnBlur={true}
                enableReinitialize={true}>
                {({
                  handleChange,
                  handleBlur,
                  errors,
                  handleSubmit,
                  values,
                  setFieldValue,
                  isValid,
                  touched,
                }) => {
                  return (
                    <SecondStepForm
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                      errors={errors}
                      handleSubmit={handleSubmit}
                      isValid={isValid}
                      values={values}
                      formRef2={formRef2}
                      decreaseLevel={decreaseLevel}
                      touched={touched}
                    />
                  );
                }}
              </Formik>
            </ProgressStep>

            <ProgressStep
              scrollable={false}
              onNext={() => {
                formRef3.current.handleSubmit();
              }}
              nextBtnDisabled={disabled}
              label={MultiStepFormConstant.thirdStepHeading}
              nextBtnStyle={styles.nextButton}
              onPrevious={decreaseLevel}
              nextBtnTextStyle={styles.textColor}
              previousBtnStyle={styles.previousButtonStyle}
              previousBtnTextStyle={styles.textColor}
              previousBtnText={MultiStepFormConstant.previous}
              nextBtnText={MultiStepFormConstant.next}
              removeBtnRow>
              <Formik
                innerRef={formRef3}
                initialValues={getUserDataStepThree(userInitialDataFromAPI)}
                onSubmit={levelThreeHit}
                validateOnChange
                validateOnMount={true}
                validateOnBlur={true}
                validationSchema={StepThreeSchema}
                enableReinitialize={true}>
                {({
                  handleChange,
                  handleBlur,
                  errors,
                  handleSubmit,
                  values,
                  setFieldValue,
                  touched,
                }) => {
                  return (
                    <ThirdStepForm
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                      errors={errors}
                      values={values}
                      formRef3={formRef3}
                      decreaseLevel={decreaseLevel}
                      handleSubmit={handleSubmit}
                      touched={touched}
                    />
                  );
                }}
              </Formik>
            </ProgressStep>

            <ProgressStep
              label={MultiStepFormConstant.forthStepHeading}
              nextBtnStyle={styles.nextButton}
              onNext={() => {
                formRef4.current.handleSubmit();
              }}
              nextBtnDisabled={disabled}
              onPrevious={decreaseLevel}
              nextBtnTextStyle={styles.textColor}
              previousBtnStyle={styles.previousButtonStyle}
              previousBtnTextStyle={styles.textColor}
              previousBtnText={MultiStepFormConstant.previous}
              nextBtnText={MultiStepFormConstant.next}
              removeBtnRow
              errors={isError}>
              <Formik
                innerRef={formRef3}
                initialValues={getUserDataStepFour(userInitialDataFromAPI)}
                onSubmit={values => levelFourHit(values)}
                validateOnChange
                validateOnMount={true}
                validateOnBlur={true}
                validationSchema={StepFourSchema}
                enableReinitialize={true}>
                {({ errors, handleSubmit, values, touched, handleChange }) => {
                  return (
                    <FourthStepForm
                      errors={errors}
                      values={values}
                      decreaseLevel={decreaseLevel}
                      handleSubmit={handleSubmit}
                      handleChange={handleChange}
                      touched={touched}
                    />
                  );
                }}
              </Formik>
            </ProgressStep>

            <ProgressStep
              label={MultiStepFormConstant.fivthStepHeading}
              onSubmit={onSubmit}
              onPrevious={decreaseLevel}
              nextBtnStyle={styles.submitButton}
              nextBtnTextStyle={styles.textColor}
              previousBtnStyle={styles.previousButtonStyle}
              previousBtnTextStyle={styles.textColor}
              removeBtnRow
              previousBtnText={MultiStepFormConstant.previous}
              finishBtnText={MultiStepFormConstant.submit}>
              <Formik
                innerRef={formRef3}
                initialValues={getUserDataStepThree(userInitialDataFromAPI)}
                onSubmit={onSubmit}
                validateOnChange
                validateOnMount={true}
                validateOnBlur={true}
                validationSchema={StepThreeSchema}
                enableReinitialize={true}>
                {({ handleSubmit, values, touched }) => {
                  return (
                    <FivthStepForm
                      values={values}
                      navigation={navigation}
                      blogger={blogger}
                      decreaseLevel={decreaseLevel}
                      handleSubmit={handleSubmit}
                      touched={touched}
                    />
                  );
                }}
              </Formik>
            </ProgressStep>
          </ProgressSteps>
        </View>

        {loader && (
          <View style={styles.centeredView}>
            <ActivityIndicator
              style={styles.LoaderStyling}
              size="large"
              color={color.themeColorShockingPink}
            />
          </View>
        )}
      </View>
    </>
  );
};

ProgressStepsForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProgressStepsForm;

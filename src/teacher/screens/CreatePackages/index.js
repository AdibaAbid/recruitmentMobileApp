import React, { useRef, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik } from 'formik';

import * as actions from '../../store/actions';
import ProgramDetails from './component/ProgramDetails';
import Description from './component/Description';
import ProgramSettings from './component/ProgramSettings';
import TimeSlots from './component/TimeSlots';
import MsgModal from './component/MsgModal';
import checkCircle from '../CreateProfile/components/StepThree/assets/svg/checkCircle';
import { SCREENS } from '@constants/strings';
import StatusBarComponent from '@components/StatusBarComponent';
import { FontFamilyEnum } from '../../constants/FontFamily';
import { theme } from '../../theme';
import { Size } from '../../globals';
import Button from '@teacher/button';
import UploadCourseImage from './component/UploadCourseImage';
import privateMode from './assets/svg/privateMode';

import styles from './styles';

const CreatePackages = () => {
  const [showModal, setShowModal] = useState(false);
  const [createPackageCompleted] = useState(true);

  const formRef = useRef();
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  const navigation = useNavigation();

  const HeaderComponent = ({
    handleChange,
    values,
    errors,
    handleBlur,
    touched,
  }) => (
    <View style={styles.parentContainer}>
      <StatusBarComponent statusBarColor={theme.bgWhite} />

      <ProgramDetails
        handleChange={handleChange}
        values={values}
        errors={errors}
      />

      <Description
        handleChange={handleChange}
        values={values}
        handleBlur={handleBlur}
        touched={touched}
        errors={errors}
      />

      <UploadCourseImage />

      <ProgramSettings
        handleChange={handleChange}
        values={values}
        errors={errors}
      />
    </View>
  );

  const FooterComponent = () => (
    <View style={styles.parentContainer}>
      <TimeSlots />
    </View>
  );

  return (
    <View style={styles.container}>
      <Formik
        innerRef={formRef}
        initialValues={{
          program: '',
          grade: '',
          subjects: '',
          teachingMode: '',
          searchDescp: '',
          description: '',
          enrollmentMode: '',
          ageRange: '',
        }}
        onSubmit={() => setShowModal(true)}
        validateOnChange
        validateOnBlur
        validateOnMount
        validationSchema={null}
        enableReinitialize>
        {({ handleChange, handleBlur, errors, touched, values }) => {
          return (
            <FlatList
              data={[]}
              keyExtractor={() => 'items'}
              renderItem={() => null}
              ListHeaderComponent={
                <HeaderComponent
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                  values={values}
                />
              }
              ListFooterComponent={<FooterComponent />}
            />
          );
        }}
      </Formik>

      <View style={styles.BtnView}>
        <Button
          title={'Submit'}
          center
          size={Size.DEFAULT}
          color={theme.bgTheme}
          family={FontFamilyEnum.MEDIUM}
          handlePress={() => formRef.current.handleSubmit()}
          customStyles={styles.customBtnStyle}
        />
      </View>

      {createPackageCompleted ? (
        <MsgModal
          showModal={showModal}
          setShowModal={setShowModal}
          showMsg={
            'Please complete course details to make the course accessible on your profile. Course will be kept on Private Mode until then.'
          }
          showBtn={true}
          btnTitle={'Okay'}
          title={'Private Mode'}
          icon={privateMode}
          handlePress={() => setShowModal(false)}
          btnTextColor={theme.bgTheme}
        />
      ) : (
        <MsgModal
          showModal={showModal}
          setShowModal={setShowModal}
          showMsg={
            'You have created your first Package. Your course will now apear in the course listing. Happy Teaching!'
          }
          showBtn={true}
          btnTitle={'Go to Home'}
          title={'Congratulations'}
          icon={checkCircle}
          handlePress={() => navigation.navigate(SCREENS.HOME)}
          btnTextColor={theme.bgTheme}
        />
      )}
    </View>
  );
};

export default CreatePackages;

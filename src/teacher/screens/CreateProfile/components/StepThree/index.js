import React, { useRef, useState } from 'react';
import { FlatList, View } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { SvgXml } from 'react-native-svg';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/core';

import { theme } from '../../../../theme';
import Button from '@teacher/button';
import { Size } from '../../../../globals';
import TextComponent from '../../../../components/text';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import InputComponent from '../../../../components/Input';
import { WP } from '../../../../constants';
import MsgModal from './components/MsgModal';
import dropDown from './assets/svg/dropDown';
import uploadImg from './assets/svg/uploadImg';

import styles from './styles';
import { SCREENS } from '@constants/strings';

const StepThree = () => {
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);
  const [videoName, setVideoName] = useState(null);
  const [videoType, setVideoType] = useState('');

  const formRef = useRef(null);

  const data = [
    {
      id: '0',
      name: 'experience',
      placeholder: 'Experience',
      value: '',
      ref: useRef(null),
      keyboardType: 'default',
      isDropDown: true,
    },
    {
      id: '1',
      name: 'level',
      placeholder: 'Level',
      value: '',
      ref: useRef(null),
      keyboardType: 'default',
      isDropDown: true,
    },
    {
      id: '2',
      name: 'graduation',
      placeholder: 'Graduation',
      value: '',
      ref: useRef(null),
      keyboardType: 'default',
      isDropDown: true,
    },
    {
      id: '3',
      name: 'tagLine',
      placeholder: 'Tag Line',
      value: '',
      ref: useRef(null),
      keyboardType: 'default',
    },
    {
      id: '4',
      name: 'bio',
      placeholder: 'Bio',
      value: '',
      ref: useRef(null),
      keyboardType: 'default',
    },
    {
      id: '5',
      name: 'video',
      placeholder: 'Video',
      value: '',
      ref: useRef(null),
      keyboardType: 'default',
    },
  ];

  const handleEditing = param => {
    const index = data.findIndex(item => item.name === param);

    switch (param) {
      case 'experience':
        data[index + 1].ref.current?.focus();
        break;
      case 'level':
        data[index + 1].ref.current?.focus();
        break;
      case 'graduation':
        data[index + 1].ref.current?.focus();
        break;
      case 'tagLine':
        data[index + 1].ref.current?.focus();
        break;
      case 'bio':
        data[index + 1].ref.current?.focus();
        break;

      default:
        break;
    }
  };

  const openGalleryForImageOrVideo = async () => {
    let fileSizeCount;
    const videoOptions = {
      mediaType: 'video',
      includeBase64: true,
    };

    ImagePicker.launchImageLibrary(videoOptions, response => {
      if (response.didCancel) {
      } else if (response.errorCode) {
      } else {
        const src = {
          uri: response.assets[0],
        };
        fileSizeCount = response.assets[0].fileSize / 1024;
        fileSizeCount = fileSizeCount / 1024;

        setVideoName(response.assets[0].fileName);
        setVideoType(response.assets[0].type);
      }
    });
  };

  return (
    <View style={styles.formContainer}>
      <Formik
        innerRef={formRef}
        initialValues={{
          experience: '',
          level: '',
          graduation: '',
          tagLine: '',
          bio: '',
        }}
        onSubmit={() => setShowModal(true)}
        validateOnChange
        validateOnBlur
        validateOnMount
        validationSchema={null}
        enableReinitialize>
        {({
          handleChange,
          handleBlur,
          errors,
          values,
          touched,
          handleSubmit,
        }) => {
          return (
            <>
              <View style={styles.HeadingView}>
                <TextComponent
                  title={'Professional Information'}
                  size={Size.DEFAULT}
                  center
                  color={theme.textDefault}
                  family={FontFamilyEnum.MEDIUM}
                />
              </View>

              <FlatList
                data={data}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                  return (
                    <View key={item.id} style={styles.countryCodeContainer}>
                      {item.name === 'video' && (
                        <View style={styles.videoContainer}>
                          <View style={styles.countryCodeContainer}>
                            <View style={{ marginHorizontal: WP('2') }}>
                              <SvgXml xml={uploadImg} />
                            </View>

                            <View style={styles.formInputsContainer}>
                              <TextComponent
                                title={'Upload a demo video'}
                                size={Size.DEFAULT}
                                color={theme.bgTheme}
                                family={FontFamilyEnum.REGULAR}
                                customStyles={styles.customTextStyle}
                              />
                              <TextComponent
                                title={
                                  'A demo video helps parents get to know you through your profile.'
                                }
                                size={Size.S}
                                color={theme.textDefault}
                                family={FontFamilyEnum.REGULAR}
                                customStyles={styles.customTextStyle}
                              />
                              {!!videoName && (
                                <View style={styles.videoNameContainer}>
                                  <TextComponent
                                    title={`${videoName}.${
                                      videoType.split('/')?.[1]
                                    }`}
                                    size={Size.XS}
                                    color={theme.bgTheme}
                                    family={FontFamilyEnum.MEDIUM}
                                    customStyles={[
                                      styles.videNameBg,
                                      styles.customTextStyle,
                                    ]}
                                  />
                                </View>
                              )}
                              <View style={styles.btnContainer}>
                                <Button
                                  title={'How to upload'}
                                  center
                                  size={Size.XS}
                                  family={FontFamilyEnum.MEDIUM}
                                  color={theme.bgTheme}
                                  handlePress={() =>
                                    navigation.navigate(
                                      SCREENS.TEACHER_QUIZ_MODULE,
                                    )
                                  }
                                  customStyles={styles.howUploadBtn}
                                />
                                <View style={styles.uploadBtnView}>
                                  <Button
                                    title={
                                      videoName == null ? 'Upload' : 'Re-Upload'
                                    }
                                    center
                                    size={Size.XS}
                                    family={FontFamilyEnum.MEDIUM}
                                    color={theme.bgTheme}
                                    handlePress={openGalleryForImageOrVideo}
                                    customStyles={styles.uploadBtn}
                                  />
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      )}
                      <View style={styles.formInputsContainer}>
                        <InputComponent
                          ref={item.ref}
                          touched={touched[item.name]}
                          error={errors[item.name]}
                          value={values[item.name]}
                          onBlur={handleBlur(item.name)}
                          submitEditingHandle={() => handleEditing(item.name)}
                          keyboardType={item.keyboardType}
                          handleChange={handleChange(item.name)}
                          placeHolder={item.placeholder}
                          multiline={item.name === 'bio'}
                          icon={item.isDropDown && dropDown}
                        />
                      </View>
                    </View>
                  );
                }}
              />

              <View style={styles.BtnView}>
                <Button
                  title={'Finish'}
                  center
                  family={FontFamilyEnum.MEDIUM}
                  size={Size.DEFAULT}
                  color={theme.bgTheme}
                  handlePress={handleSubmit}
                  customStyles={styles.customBtnStyle}
                />
              </View>
            </>
          );
        }}
      </Formik>
      {showModal && (
        <MsgModal
          showModal={showModal}
          setShowModal={setShowModal}
          showMsg={
            'You’re all set up! Your teaching journey starts here- time to get trained!'
          }
          title={'Congratulations'}
          showBtn={true}
          btnTitle={'Let’s go!'}
        />
      )}
    </View>
  );
};

export default StepThree;

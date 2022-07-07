import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useToast } from 'react-native-toast-notifications';
import { Formik } from 'formik';
import * as ImagePicker from 'react-native-image-picker';

import { theme } from '../../../../theme';
import Button from '@teacher/button';
import { Size } from '../../../../globals';
import TextComponent from '../../../../components/text';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import camera from '../../assets/svg/camera';

import styles from './styles';

const StepOne = ({ setCurrentPage, currentPage }) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');
  const toast = useToast();

  const openGalleryForImageOrVideo = async () => {
    let fileSizeCount;
    setShow(false);
    const imageOptions = {
      mediaType: 'photo',
    };

    ImagePicker.launchImageLibrary(imageOptions, response => {
      if (response.didCancel) {
      } else if (response.errorCode) {
      } else {
        const src = {
          uri: response.assets[0],
        };
        fileSizeCount = response.assets[0].fileSize / 1024;
        fileSizeCount = fileSizeCount / 1024;

        setImage(src.uri.uri);
        // onChange({
        //   uri: response.assets[0].uri,
        //   type: response.assets[0].type,
        //   fileName: response.assets[0].fileName,
        // });
      }
    });
  };

  const submit = () => {
    if (image) {
      if (currentPage >= 0 && currentPage < 3) {
        setCurrentPage(prevCount => prevCount + 1);
      }
    } else {
      toast.show('Image should be uploaded', {
        type: 'danger',
        normalColor: theme.bgNotification,
        offset: -30,
      });
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          image: '',
        }}
        onSubmit={submit}
        validateOnChange
        validationSchema={null}
        validateOnMount={true}
        validateOnBlur={true}
        enableReinitialize={true}>
        {({ handleSubmit, setFieldValue, handleChange, values }) => {
          return (
            <>
              <View style={styles.ParentView}>
                <View style={styles.ChildView}>
                  <View style={styles.HeadingView}>
                    <TextComponent
                      title={'Upload Picture'}
                      size={Size.DEFAULT}
                      center
                      color={theme.textDefault}
                      family={FontFamilyEnum.MEDIUM}
                    />
                  </View>
                  {image ? (
                    <TouchableOpacity
                      style={styles.AddPictureView}
                      onPress={e => openGalleryForImageOrVideo()}>
                      <Image
                        style={styles.ImageView}
                        source={{
                          uri: image,
                        }}
                        resizeMode="cover"
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.AddPictureView}
                      onPress={() => openGalleryForImageOrVideo()}>
                      <SvgXml xml={camera} />
                    </TouchableOpacity>
                  )}
                </View>

                <View style={styles.BtnView}>
                  <Button
                    title={'Next'}
                    center
                    size={Size.DEFAULT}
                    family={FontFamilyEnum.MEDIUM}
                    color={theme.bgTheme}
                    handlePress={handleSubmit}
                    customStyles={styles.customBtnStyle}
                  />
                </View>
              </View>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default StepOne;

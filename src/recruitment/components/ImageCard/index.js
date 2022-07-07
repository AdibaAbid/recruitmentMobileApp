import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { color } from '@styles/colorConstant';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';
import UserNameIcon from '@assets/svgs/UserNameIcon';
import * as ImagePicker from 'react-native-image-picker';
import {
  View,
  Modal,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import UploadButtonIcon from '@assets/svgs/UploadButtonIcon';
import Button from '../Button';
import { VideoAndPicture } from '@constants/strings';
import { styles } from './styles';
import VideoIcon from '@assets/svgs/VideoIcon';
import {
  GetUserData,
  UploadImageFiles,
  UploadVideoFiles,
} from 'src/recruitment/api/Axios/client';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import { PROFILE_IMAGE_URL } from 'src/recruitment/api/Axios/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'react-native-toast-notifications';
import CheckIcon from '@assets/icons/CheckIcon';

const ImageCard = ({
  title,
  subTitle,
  isImageUpload,
  subTitle2,
  highlitedText,
  handleChange,
  error,
  showErrors,
}) => {
  const toast = useToast();

  const [image, setImage] = useState('');
  const [show, setShow] = useState(false);
  let {
    setVideoFileProgressPercent,
    setImageFileProgressPercent,
    setImageFileFromAPI,
    setVideoFileFromAPI,
    userProfileImage,
    setUserProfileImage,
    s,
    setShowError,
    userEmail,
    setShowProgressBar,
  } = useContext(CredientialsContext);
  const [userImage, setUserImage] = useState();

  useEffect(() => {
    const getUserImage = async () => {
      const res = await AsyncStorage.getItem('imageFileFromAPI');
      setUserImage(res);
    };
    getUserImage();
  }, []);

  useEffect(() => {
    let unmounted = false;
    const appData = async () => {
      const res = await GetUserData();
      if (res.success) {
        if (!unmounted) {
          setUserProfileImage(res.userdata.profilepicture);
        }
      }
    };
    appData();
    return () => {
      unmounted = true;
    };
  }, [setUserProfileImage, userProfileImage]);

  const UploadFilesData = async (data, dataType) => {
    const values = {
      type: dataType,
      [dataType]: data,
    };

    if (dataType === 'profilepicture') {
      const res = await UploadImageFiles(values, setImageFileProgressPercent);

      if (res.status) {
        toast.show('Successfully uploaded file', {
          type: 'success',
          normalColor: color.successAlertColor,
        });
        setImageFileFromAPI(res.filename);
        handleChange(res.filename);
        setUserProfileImage(res.filename);
      } else {
        toast.show('Something Went Wrong', {
          type: 'danger',
          normalColor: color.errorAlertColor,
        });
      }
    } else {
      let res = await UploadVideoFiles(
        values,
        setVideoFileProgressPercent,
        setShowProgressBar,
        setShowError,
        setVideoFileFromAPI,
      );

      handleChange(res.filename);

      if (res.status === 'true') {
        toast.show('Successfully uploaded file', {
          type: 'success',
          normalColor: color.successAlertColor,
        });
      } else if (showErrors) {
        toast.show('Something Went Wrong', {
          type: 'danger',
          normalColor: color.errorAlertColor,
        });
      }
    }
  };

  const openCamera = () => {
    setShow(false);
    const imageOptions = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      // includeBase64: true,
    };
    ImagePicker.launchCamera(imageOptions, response => {
      const src = {
        uri: 'data:image/jpeg;base64,' + response.assets[0].base64,
      };
      setImage(src);
    });
  };

  const openGalleryForImageOrVideo = async isVideoUploadOption => {
    setShow(false);
    const imageOptions = {
      mediaType: 'photo',
    };
    const videoOptions = {
      mediaType: 'video',
      includeBase64: true,
    };

    ImagePicker.launchImageLibrary(
      isVideoUploadOption ? imageOptions : videoOptions,
      response => {
        if (response.didCancel) {
        } else if (response.errorCode) {
        } else {
          const src = {
            uri: response.assets[0],
          };
          if (!isVideoUploadOption) {
            if (response.assets[0].type === 'video/mp4') {
              setImage(src.uri.uri);
              UploadFilesData(src.uri, 'video');
            } else {
              toast.show(
                'Acceptable formats are: mp4, m4v, mov, mpg, av & Maximum size is 150MB',
                {
                  type: 'danger',
                  normalColor: color.errorAlertColor,
                },
              );
            }
          } else {
            setImage(src.uri.uri);
            UploadFilesData(src.uri, 'profilepicture');
            AsyncStorage.setItem('imageFileFromAPI', src.uri.uri);
          }
        }
      },
    );
  };

  return (
    <>
      <TouchableOpacity
        style={styles.CardContainer}
        onPress={() => setShow(true)}>
        <ImageBackground style={styles.ImageContainer}>
          {!image ? (
            isImageUpload ? (
              userProfileImage ? (
                <Image
                  style={styles.StyledImage}
                  source={{
                    uri: PROFILE_IMAGE_URL(userProfileImage, userEmail),
                  }}
                  resizeMode="cover"
                />
              ) : (
                <UserNameIcon width={15} height={15} />
              )
            ) : (
              <VideoIcon width={18} height={15} />
            )
          ) : image && isImageUpload ? (
            <Image
              style={styles.StyledImage}
              source={{
                uri: image,
              }}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.checkIconStyle}>
              <CheckIcon size={30} colorIcon={color.successAlertColor} />
            </View>
          )}
        </ImageBackground>

        <View style={styles.TextContainer}>
          <Text
            fontFamily={FONT_FAMILY.BOLD}
            size={SIZE.SMALLEST}
            customStyle={styles.TextWrapper}
            color={color.themeColorShockingPink}>
            {title}
          </Text>
          <Text
            fontFamily={FONT_FAMILY.LIGHT}
            size={SIZE.XSMALLEST}
            customStyle={styles.TextWrapper}
            color={color.themeColorShockingPink}>
            {subTitle}
          </Text>

          <View style={styles.Row}>
            <Text
              fontFamily={FONT_FAMILY.LIGHT}
              size={SIZE.XSMALLEST}
              customStyle={styles.TextWrapper}
              color={color.themeColorShockingPink}>
              {subTitle2}
            </Text>
            <Text
              fontFamily={FONT_FAMILY.BOLD}
              size={SIZE.XSMALLEST}
              customStyle={styles.TextHight}
              color={color.themeColorShockingPink}>
              {highlitedText}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.ImagePickerButton}
          onPress={() => setShow(true)}>
          <UploadButtonIcon width={14} height={14} color={color.white} />
        </TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.ErrorView}>
        <Text
          fontFamily={FONT_FAMILY.SEMI_BOLD}
          size={SIZE.XSMALLEST}
          color={error && showErrors ? color.pinkRed : color.white}>
          {error}
        </Text>
      </View>

      <Modal
        visible={show}
        animationType={'fade'}
        transparent={true}
        onRequestClose={() => {
          setShow(!show);
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setShow(!show);
          }}
          style={styles.parentModalView}>
          <View style={styles.modalView}>
            <View style={styles.ButtonWrapper}>
              <Button
                borderRadius={6}
                isBorderColor={color.transparent}
                isBackgroundColor={color.themeColorShockingPink}
                onPress={() => openGalleryForImageOrVideo(isImageUpload)}
                label={VideoAndPicture.chooseFromGallery}
                textColor={color.white}
                height={50}
                isUppercase
                marginVertical={5}
                width={'100%'}
              />
              <Button
                borderRadius={6}
                isBorderColor={color.lightPink}
                isBackgroundColor={color.white}
                onPress={() => setShow(!show)}
                label={VideoAndPicture.close}
                textColor={color.themeColorShockingPink}
                height={40}
                isUppercase
                marginVertical={5}
                width={'100%'}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

ImageCard.defaultProps = {
  isImageUpload: false,
};

ImageCard.propTypes = {
  isImageUpload: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
export default ImageCard;

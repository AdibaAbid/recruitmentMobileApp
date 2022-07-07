import React, { useContext, useEffect, useState } from 'react';
import Button from '@components/Button';
import { VideoAndPicture } from '@constants/strings';
import { color } from '@styles/colorConstant';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import EditIcon from '@assets/icons/EditIcon';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import { PROFILE_IMAGE_URL } from 'src/recruitment/api/Axios/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import VideoIcon from '@assets/svgs/VideoIcon';
import { Image, ImageBackground, View } from 'react-native';
import { styles } from './styles';

const VideoAndPictureData = ({ values, setModalVisible }) => {
  let { userEmail, setStepNoEditBtn, setIsReviewApplication } =
    useContext(CredientialsContext);
  const [userImage, setUserImage] = useState();

  useEffect(() => {
    const getUserImage = async () => {
      const res = await AsyncStorage.getItem('imageFileFromAPI');
      setUserImage(res);
    };
    getUserImage();
  }, []);
  return (
    <View style={styles.MainContainer}>
      <Text
        fontFamily={FONT_FAMILY.BOLD}
        color={color.themeColorShockingPink}
        customStyle={{
          marginBottom: 10,
        }}
        size={SIZE.SMALL}>
        {VideoAndPicture.heading}
      </Text>

      <View style={styles.Row}>
        <View>
          <Text
            fontFamily={FONT_FAMILY.BOLD}
            size={SIZE.SMALLEST}
            color={color.themeColorShockingPink}>
            {VideoAndPicture.picture}
          </Text>

          <ImageBackground style={styles.ImageContainer}>
            <Image
              style={styles.StyledImage}
              source={{
                uri: PROFILE_IMAGE_URL(values.profilepicture, userEmail),
              }}
              resizeMode="cover"
            />
          </ImageBackground>
        </View>

        <View>
          <Text
            fontFamily={FONT_FAMILY.BOLD}
            size={SIZE.SMALLEST}
            color={color.themeColorShockingPink}>
            {VideoAndPicture.video}
          </Text>

          <ImageBackground style={styles.ImageContainer}>
            <View style={styles.VideoThumbnail}>
              <VideoIcon width={35} height={35} />
            </View>
          </ImageBackground>
        </View>
      </View>

      <Button
        borderRadius={6}
        isBorderColor={color.themeColorShockingPink}
        isBackgroundColor={color.themeColorShockingPink}
        onPress={() => {
          setStepNoEditBtn(3);
          setIsReviewApplication(true);
          setModalVisible(false);
        }}
        label={VideoAndPicture.editBtnText}
        textColor={color.white}
        height={40}
        width={'100%'}
        isBeforeTextIcon={true}
        IconSvg={() => <EditIcon />}
      />
      {/* <View style={styles.HrView} /> */}
    </View>
  );
};

export default VideoAndPictureData;

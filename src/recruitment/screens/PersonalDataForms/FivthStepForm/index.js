import React, { useContext, useEffect, useState } from 'react';
import Text from '@components/Text';
import { color } from '@styles/colorConstant';
import {
  getWindowWidth,
  scaleHeight,
} from 'src/recruitment/utils/platformUtils';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Button from '@components/Button';
import { submitApplication } from '@constants/strings';
import UserNameIcon from '@assets/svgs/UserNameIcon';
import { ActivityIndicator, Image, View } from 'react-native';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import BottomSheetModalReviewApplication from './BottomSheetModalReviewApplication/index';
import { PROFILE_IMAGE_URL } from 'src/recruitment/api/Axios/config';
import { GetUserData } from 'src/recruitment/api/Axios/client';
import { initialValues } from 'src/recruitment/arrayConst';
import { styles } from './styles';

const FivthStepForm = ({ navigation, decreaseLevel, handleSubmit }) => {
  const [loader, setLoader] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [number, setNumber] = useState(null);
  const [userValue, setUserValues] = useState(initialValues);

  let { userProfileImage, userEmail, setUserEmail, setUserProfileImage } =
    useContext(CredientialsContext);

  useEffect(() => {
    let unmounted = false;
    const appData = async () => {
      const res = await GetUserData();
      if (res.success) {
        if (!unmounted) {
          Object.keys(res.userdata).forEach(async (key, index) => {
            if (userValue.hasOwnProperty(key)) {
              userValue[key] = res.userdata[key];

              setUserValues({
                ...userValue,
                key: res.userdata[key],
              });
            }
          });
          if (res.userdata.profilepicture) {
            setUserProfileImage(res.userdata.profilepicture);
            setUserEmail(res.userdata.email);
            setNumber(res.userdata.number);
          }
        }
      }
    };
    appData();
    return () => {
      unmounted = true;
    };
  }, [userProfileImage, setUserProfileImage, userValue, setUserEmail]);

  React.useEffect(() => {
    if (userValue.firstname && userValue.lastname) {
      setLoader(false);
    }
  }, [userValue]);

  return (
    <View>
      <View
        style={styles.Container}
        // onPress={() => setModalVisible(true)}
        // activeOpacity={1}
      >
        <>
          <View style={styles.CardView}>
            <View style={styles.Wrapper}>
              {loader ? (
                <ActivityIndicator
                  size="large"
                  color={color.themeColorShockingPink}
                />
              ) : (
                <>
                  <View style={styles.ImageContainer}>
                    {userEmail && userProfileImage ? (
                      <Image
                        source={{
                          uri: PROFILE_IMAGE_URL(
                            userValue.profilepicture,
                            userEmail,
                          ),
                          cache: 'reload',
                        }}
                        resizeMode="cover"
                        width={100}
                        height={100}
                        style={styles.StyledImage}
                      />
                    ) : (
                      <UserNameIcon width={30} height={40} />
                    )}
                  </View>

                  <View style={styles.TextContainer}>
                    <Text
                      fontFamily={FONT_FAMILY.BOLD}
                      size={SIZE.SMALL}
                      numberOfLines={2}
                      color={color.blackBorderColor}
                      customStyle={styles.width}
                      marginTop={0}>
                      {`${
                        userValue.firstname.charAt(0).toUpperCase() +
                        userValue.firstname.slice(1)
                      } ${
                        userValue.lastname.charAt(0).toUpperCase() +
                        userValue.lastname.slice(1)
                      }`}
                    </Text>

                    <Text
                      fontFamily={FONT_FAMILY.REGULAR}
                      size={SIZE.XXXXSMALL}
                      color={color.blackBorderColor}
                      customStyle={[
                        {
                          marginTop: scaleHeight('-4'),
                        },
                        styles.width,
                      ]}>
                      {number ? number : userValue.phoneNumber}
                    </Text>
                    <View style={styles.Row}>
                      <Text
                        fontFamily={FONT_FAMILY.BOLD}
                        size={SIZE.XXXXSMALL}
                        color={color.blackBorderColor}
                        numberOfLines={2}
                        marginTop={1}
                        customStyle={styles.width}
                        isBeforeTextIcon={true}>
                        {`${
                          userValue.city.charAt(0).toUpperCase() +
                          userValue.city.slice(1)
                        },${userValue.country}`}
                      </Text>
                    </View>

                    <Text
                      fontFamily={FONT_FAMILY.REGULAR}
                      size={SIZE.XXXXSMALL}
                      color={color.blackBorderColor}
                      customStyle={[
                        {
                          marginTop: scaleHeight('-3'),
                        },
                        styles.width,
                      ]}>
                      {userValue.address}
                    </Text>
                  </View>
                </>
              )}
            </View>

            <Button
              borderRadius={10}
              isBorderColor={color.transparent}
              isBackgroundColor={color.lightPink}
              onPress={() => setModalVisible(true)}
              label={submitApplication.reviewApplication}
              textColor={color.themeColorShockingPink}
              height={50}
              width={'100%'}
              isUppercase
              isBeforeTextIcon={false}
            />
          </View>
          <BottomSheetModalReviewApplication
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            values={userValue}
            navigation={navigation}
          />
        </>
      </View>

      <View style={styles.BtnRow}>
        <Button
          borderRadius={6}
          isBorderColor={color.transparent}
          isBackgroundColor={color.lightPink}
          onPress={() => {
            decreaseLevel();
          }}
          label={submitApplication.previous}
          textColor={color.themeColorShockingPink}
          height={50}
          width={getWindowWidth() / 2.4}
          isUppercase
          isBeforeTextIcon={false}
        />
        <Button
          borderRadius={6}
          isBorderColor={color.transparent}
          isBackgroundColor={color.themeColorShockingPink}
          onPress={handleSubmit}
          label={submitApplication.submits}
          textColor={color.white}
          height={50}
          width={getWindowWidth() / 2.4}
          isUppercase
          isBeforeTextIcon={false}
        />
      </View>
    </View>
  );
};

export default FivthStepForm;

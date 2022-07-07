import React, { useContext, useEffect, useState } from 'react';
// import Button from '@components/Button';
import { PersonalInfoScreenConstant } from '@constants/strings';
import { color } from '@styles/colorConstant';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import TextWithHeading from '@components/TextWithHeading';
import EditIcon from '@assets/icons/EditIcon';
import { scaleHeight } from 'src/recruitment/utils/platformUtils';
import { View } from 'react-native';
import Flag from 'react-native-flags';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import { GetUserData } from 'src/recruitment/api/Axios/client';
import { bloggerName } from 'src/recruitment/arrayConst';
import { styles } from './styles';
import Button from '@components/Button';

const PersonalInfoData = ({ values, setModalVisible }) => {
  let { setStepNoEditBtn, userPhoneNumber, setIsReviewApplication } =
    useContext(CredientialsContext);

  const [number, setNumber] = useState(null);

  useEffect(() => {
    let unmounted = false;
    const appData = async () => {
      const res = await GetUserData();
      if (res.success) {
        if (!unmounted) {
          if (res.userdata.number) {
            setNumber(res.userdata.number);
          }
        }
      }
    };
    appData();
    return () => {
      unmounted = true;
    };
  }, [userPhoneNumber]);

  const Submit = () => {
    setStepNoEditBtn(0);
    setIsReviewApplication(true);
    setModalVisible(false);
  };
  return (
    <View style={styles.MainContainer}>
      <Text
        fontFamily={FONT_FAMILY.BOLD}
        color={color.themeColorShockingPink}
        customStyle={{
          marginBottom: scaleHeight('10'),
        }}
        size={SIZE.SMALL}>
        {PersonalInfoScreenConstant.personalInfo}
      </Text>

      <View style={styles.Row}>
        <TextWithHeading
          title={PersonalInfoScreenConstant.firstName}
          values={
            values.firstname.charAt(0).toUpperCase() + values.firstname.slice(1)
          }
        />
        <TextWithHeading
          title={PersonalInfoScreenConstant.lastName}
          values={
            values.lastname.charAt(0).toUpperCase() + values.lastname.slice(1)
          }
        />
        <TextWithHeading
          title={PersonalInfoScreenConstant.contactNumber}
          width={100}
          values={number ? number : values.phoneNumber}
        />
      </View>

      <View style={styles.Row}>
        <TextWithHeading
          title={PersonalInfoScreenConstant.gender}
          values={
            values.gender.charAt(0).toUpperCase() + values.gender.slice(1)
          }
        />
        <TextWithHeading
          title={PersonalInfoScreenConstant.country}
          values={values.country}
          numberOfLines={3}
          width={100}
          isBeforeTextIcon={true}
          IconSvg={() => (
            <Flag code={values.countrycode_2} size={24} type={'flat'} />
          )}
        />
      </View>

      <View>
        <TextWithHeading
          title={PersonalInfoScreenConstant.address}
          numberOfLines={2}
          width={'100%'}
          values={values.address}
        />
      </View>

      <View style={styles.Row}>
        <TextWithHeading
          title={PersonalInfoScreenConstant.dob}
          numberOfLines={2}
          values={values.dateofbirth}
        />

        <TextWithHeading
          title={PersonalInfoScreenConstant.city}
          values={values.city}
          width={100}
        />
      </View>

      <View>
        <TextWithHeading
          title={PersonalInfoScreenConstant.area}
          width={'100%'}
          numberOfLines={2}
          values={values.area}
        />
      </View>

      <View style={styles.Row}>
        <TextWithHeading
          title={PersonalInfoScreenConstant.howDidYouHear}
          numberOfLines={2}
          width={'50%'}
          values={values.aboutus}
        />
        {values.aboutus == 'Influencer' ? (
          <View style={styles.HighlightView}>
            <Text
              fontFamily={FONT_FAMILY.BOLD}
              size={SIZE.SMALLEST}
              customStyle={styles.TextWithHighlight}
              color={color.white}>
              {bloggerName[values.otheraboutus]}
            </Text>
          </View>
        ) : (
          values.otheraboutus !== '' && (
            <View style={styles.HighlightView}>
              <Text
                fontFamily={FONT_FAMILY.MEDIUM}
                size={SIZE.SMALLEST}
                customStyle={styles.TextWithHighlight}
                color={color.white}>
                {values.otheraboutus}
              </Text>
            </View>
          )
        )}
      </View>

      <Button
        borderRadius={6}
        isBorderColor={color.themeColorShockingPink}
        isBackgroundColor={color.themeColorShockingPink}
        onPress={Submit}
        label={PersonalInfoScreenConstant.editBtnText}
        textColor={color.white}
        height={40}
        loading={false}
        width={'100%'}
        isBeforeTextIcon={true}
        IconSvg={() => <EditIcon />}
      />
      <View style={styles.HrView} />
    </View>
  );
};

export default PersonalInfoData;

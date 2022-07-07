import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';

import TeacherInfoForm from './TeacherInfoForm';
import { getWindowWidth } from 'src/recruitment/utils/platformUtils';
import { GetUserData } from 'src/recruitment/api/Axios/client';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import SkeletonLoaderForHomeScreen from '@components/SkeletonLoader/SkeletonLoaderForHomeScreen';

const PersonalDataForms = ({ navigation }) => {
  const [loader, setLoader] = useState(true);

  let { setUserProfileImage, setUserPhoneNumber, setStepNumber } =
    useContext(CredientialsContext);

  useEffect(() => {
    let unmounted = false;
    const appData = async () => {
      const res = await GetUserData();
      if (res.success) {
        if (!unmounted) {
          setStepNumber(res.userdata?.level);

          setTimeout(() => {
            setLoader(false);
          }, 3000);

          setUserProfileImage(res.userdata.profilepicture);
        }
      } else {
        setLoader(false);
      }
    };
    appData();
    return () => {
      unmounted = true;
    };
  }, [setStepNumber, setUserPhoneNumber, setUserProfileImage]);

  return (
    <>
      {loader ? (
        <SkeletonLoaderForHomeScreen
          width={getWindowWidth() / 1.12}
          numberOfRender={8}
        />
      ) : (
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          styles={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TeacherInfoForm navigation={navigation} />
        </View>
      )}
    </>
  );
};

export default PersonalDataForms;

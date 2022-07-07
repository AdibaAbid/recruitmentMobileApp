import React, { useContext } from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaContainer } from '@styles/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LandingStackScreens from './LandingStack';
import { navigationRef, isReadyRef } from './RootNavigation';
import { NavigationStack, USERINFO } from '../recruitment/constants/strings';

import StackScreens from './StackScreen';
import { color } from '../recruitment/styles/colorConstant';
import { GetUserData } from 'src/recruitment/api/Axios/client';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import RecruitmentNavigation from './RecruitmentNavigation';
import OnBoardingStackScreens from './OnBoardingStack';
import TeacherStackScreens from './TeacherNavigation';
import { View } from 'react-native';

const RootStack = createStackNavigator();

const recruitmentTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: color.white,
    card: color.white,
  },
};
function AppNavigation({ children }) {
  const {
    setUserID,
    setUserProfileImage,
    setUserEmail,
    setIsFormSubmited,
    setUserVideo,
  } = useContext(CredientialsContext);

  React.useEffect(() => {
    const appData = async () => {
      const res = await GetUserData();
      setUserEmail(res.userdata.email);
      setUserProfileImage(res.userdata.profilepicture);
      setUserVideo(res.userdata.video);
      setUserID(res.userdata._id.$oid);
      setIsFormSubmited(res.userdata.completed);
      AsyncStorage.setItem(
        USERINFO.ACTIVE_USER,
        JSON.stringify(res.userdata.active),
      );
    };
    appData();
  }, [
    setIsFormSubmited,
    setUserEmail,
    setUserID,
    setUserProfileImage,
    setUserVideo,
  ]);

  const MyApp = () => {
    const navigation = useNavigation();

    return <View>{children(navigation)}</View>;
  };

  return (
    <SafeAreaContainer>
      <NavigationContainer
        theme={recruitmentTheme}
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}>
        <RootStack.Navigator
          // initialRouteName={NavigationStack.TEACHER}
          screenOptions={{
            headerTitle: '',
            headerTransparent: true,
            headerShown: false,
            gestureEnabled: false,
          }}>
          {StackScreens({
            name: NavigationStack.ONBOARDING,
            component: OnBoardingStackScreens,
          })}

          {StackScreens({
            name: NavigationStack.LANDING,
            component: LandingStackScreens,
          })}

          {StackScreens({
            name: NavigationStack.RECRUITMENT,
            component: RecruitmentNavigation,
          })}

          {StackScreens({
            name: NavigationStack.TEACHER,
            component: TeacherStackScreens,
          })}
        </RootStack.Navigator>
        {<MyApp />}
      </NavigationContainer>
    </SafeAreaContainer>
  );
}

export default AppNavigation;

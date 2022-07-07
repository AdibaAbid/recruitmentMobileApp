import React, { useLayoutEffect } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SCREENS,
  AsyncStorageDataConstant,
  USERINFO,
  NavigationStack,
} from '@constants/strings';

import StackScreens from './StackScreen';
import OnBoardingScreens from 'src/recruitment/screens/OnBoardingScreens/Screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '@screens/SplashScreen';
import { useNavigation, CommonActions } from '@react-navigation/native';
const OnBoardingStack = createStackNavigator();

export default function OnBoardingStackScreens() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    appData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const appData = async () => {
    const res = await AsyncStorage.getItem(
      AsyncStorageDataConstant.ALREADY_LAUNCHED_APP,
    );
    const storedToken = await AsyncStorage.getItem(USERINFO.USER_SIGN_IN_TOKEN);
    const activeUser = await AsyncStorage.getItem(USERINFO.ACTIVE_USER);
    const role = await AsyncStorage.getItem('Role');

    setTimeout(() => {
      if (res === 'true') {
        if (storedToken) {
          if (role === 'recuitment' && activeUser == 1) {
            resetRoute(NavigationStack.RECRUITMENT);
          } else if (role === 'teacher') {
            resetRoute(NavigationStack.TEACHER);
          } else {
            resetRoute(NavigationStack.LANDING);
          }
        } else {
          resetRoute(NavigationStack.LANDING);
        }
      } else {
        resetRoute(SCREENS.ON_BOARDING_SCREEN);
      }
    }, 2000);
  };

  const resetRoute = routeName =>
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: routeName }],
      }),
    );

  return (
    <>
      <OnBoardingStack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
        }}>
        {Platform.OS === 'android' &&
          StackScreens({
            name: SCREENS.SPLASH_SCREEN,
            component: SplashScreen,
          })}

        {StackScreens({
          name: SCREENS.ON_BOARDING_SCREEN,
          component: OnBoardingScreens,
        })}
      </OnBoardingStack.Navigator>
    </>
  );
}

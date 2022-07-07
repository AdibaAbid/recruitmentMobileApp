import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

import { SCREENS } from '@constants/strings';
import SignUpScreen from 'src/recruitment/screens/SignUpScreen';
import OtpScreen from 'src/recruitment/screens/OtpScreen';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../teacher/store/actions';
import { useSelector } from 'react-redux';
import { BackHandler } from 'react-native';

import StackScreens from './StackScreen';
import LoginScreenForm from 'src/recruitment/screens/LoginScreen';
import ForgotPassword from 'src/recruitment/screens/ForgotPassword/index';
import NetInfo from '@react-native-community/netinfo';
import NoInternetModal from '@components/NoInternetModal';

const LandingStack = createStackNavigator();

export default function LandingStackScreens() {
  const [isOffline, setOfflineStatus] = useState(false);
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  const { modalToggle } = useSelector(state => state.commonReducers);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (modalToggle) {
          setTimeout(() => {
            action.setModalToggle(false);
          }, 100);

          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [action, modalToggle]),
  );

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });

    return () => removeNetInfoSubscription();
  }, []);

  return (
    <>
      <LandingStack.Navigator
        initialRouteName={SCREENS.LOGIN_SCREEN}
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
        }}>
        {StackScreens({
          name: SCREENS.LOGIN_SCREEN,
          component: LoginScreenForm,
        })}

        {StackScreens({
          name: SCREENS.SIGN_UP_SCREEN,
          component: SignUpScreen,
        })}

        {StackScreens({
          name: SCREENS.FORGOT_PASSWORD,
          component: ForgotPassword,
        })}

        {StackScreens({ name: SCREENS.OTP_SCREEN, component: OtpScreen })}
      </LandingStack.Navigator>

      {isOffline && <NoInternetModal show={isOffline} isRetrying={false} />}
    </>
  );
}

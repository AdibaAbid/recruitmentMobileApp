import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../teacher/store/actions';
import { useSelector } from 'react-redux';
import { BackHandler } from 'react-native';
import { SCREENS } from '@constants/strings';

import TeacherDrawerNavigator from './TeacherDrawerNavigator';
import StackScreens from './StackScreen';
import { SvgXml } from 'react-native-svg';
import { theme } from '../teacher/theme';
import { WP } from '../teacher/constants/index';
import Logo from '@assets/svgs/Logo';

const TeacherStack = createStackNavigator();

export default function TeacherStackScreens() {
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

  return (
    <>
      <TeacherStack.Navigator
        initialRouteName={SCREENS.TEACHER_DRAWER}
        screenOptions={{
          gestureEnabled: false,
          // headerShown: false,
          headerLeft: () => <SvgXml xml={Logo} />,
          headerStyle: {
            backgroundColor: theme.bgTheme,
          },
          headerLeftContainerStyle: {
            paddingHorizontal: WP('4'),
            top: 2,
          },
          unmountOnBlur: true,
          headerTitle: '',
        }}>
        {StackScreens({
          name: SCREENS.TEACHER_DRAWER,
          component: TeacherDrawerNavigator,
        })}
      </TeacherStack.Navigator>
    </>
  );
}

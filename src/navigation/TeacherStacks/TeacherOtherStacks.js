import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SvgXml } from 'react-native-svg';
import { Keyboard, TouchableOpacity, View } from 'react-native';
import {
  DrawerScreenConstant,
  SCREENS,
} from '../../recruitment/constants/strings';
import CreateProfile from '../../teacher/screens/CreateProfile';
import CreatePackages from '../../teacher/screens/CreatePackages';
import helpCenterSvg from '../../teacher/assets/svgs/helpCenterSvg';
import AddNewTimeSlots from '../../teacher/screens/CreatePackages/component/TimeSlots/components/AddNewSlots';
import TrainingVideos from '../../teacher/screens/TrainingVideos';
import MyPackages from 'src/teacher/screens/MyPackages';
import StackScreens from '../StackScreen';
import { WP } from '../../teacher/constants';
import { useNavigation } from '@react-navigation/native';
import HamburgerMenuIcon from '@assets/icons/HamburgerMenuIcon';
import { theme } from '../../teacher/theme';
import { FontFamilyEnum } from '../../teacher/constants/FontFamily';
import QuizModule from 'src/teacher/screens/CreateProfile/components/StepThree/components/QuizModule';
import UploadQuiz from 'src/teacher/screens/CreateProfile/components/StepThree/components/UploadQuiz';
import ReviewScreen from 'src/teacher/screens/CreateProfile/components/StepThree/components/UploadQuiz/components/ReviewScreen';

const TeacherOtherStack = createStackNavigator();

export default function TeacherOtherStackScreens() {
  const navigation = useNavigation();

  return (
    <>
      <TeacherOtherStack.Navigator
        initialRouteName={SCREENS.TEACHER_CREATE_PACKAGE}
        screenOptions={{
          gestureEnabled: false,
        }}>
        {StackScreens({
          name: SCREENS.TEACHER_CREATE_PACKAGE,
          component: CreatePackages,
          myOptions: {
            headerRight: () => (
              <View style={{ marginHorizontal: WP('4') }}>
                <SvgXml xml={helpCenterSvg} />
              </View>
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingHorizontal: WP('3') }}
                onPress={() => {
                  Keyboard.dismiss();
                  navigation.toggleDrawer();
                }}>
                <HamburgerMenuIcon colorIcon={theme.textLight} />
              </TouchableOpacity>
            ),
            headerTitle: DrawerScreenConstant.CreatePackages,
            headerTitleStyle: {
              fontSize: 20,
              color: theme.bgTheme,
              fontFamily: FontFamilyEnum.REGULAR,
            },
          },
        })}

        {StackScreens({
          name: SCREENS.TEACHER_MY_PACKAGE,
          component: MyPackages,
          myOptions: {
            headerTitleStyle: {
              fontSize: 20,
              color: theme.bgTheme,
              fontFamily: FontFamilyEnum.REGULAR,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingHorizontal: WP('3') }}
                onPress={() => {
                  Keyboard.dismiss();
                  navigation.toggleDrawer();
                }}>
                <HamburgerMenuIcon colorIcon={theme.textLight} />
              </TouchableOpacity>
            ),
            headerTitle: DrawerScreenConstant.MyPackages,
          },
        })}

        {StackScreens({
          name: SCREENS.TEACHER_ADD_NEW_TIME_SLOTS,
          component: AddNewTimeSlots,
          myOptions: {
            headerRight: null,
            headerTitle: DrawerScreenConstant.AddNewTimeSlots,
          },
        })}

        {StackScreens({
          name: SCREENS.TRAINING_VIDEOS,
          component: TrainingVideos,
          myOptions: {
            headerRight: null,
            headerTitleStyle: {
              fontSize: 20,
              color: theme.bgTheme,
              fontFamily: FontFamilyEnum.REGULAR,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingHorizontal: WP('3') }}
                onPress={() => {
                  Keyboard.dismiss();
                  navigation.toggleDrawer();
                }}>
                <HamburgerMenuIcon colorIcon={theme.bgTheme} />
              </TouchableOpacity>
            ),
            headerTitle: DrawerScreenConstant.TrainingVideos,
            headerStyle: { backgroundColor: '#ABFF45' },
          },
        })}

        {StackScreens({
          name: SCREENS.TEACHER_CREATE_PROFILE,
          component: CreateProfile,
          myOptions: {
            headerRight: null,
            headerTitleStyle: {
              fontSize: 20,
              color: theme.bgTheme,
              fontFamily: FontFamilyEnum.REGULAR,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingHorizontal: WP('3') }}
                onPress={() => {
                  Keyboard.dismiss();
                  navigation.toggleDrawer();
                }}>
                <HamburgerMenuIcon colorIcon={theme.textLight} />
              </TouchableOpacity>
            ),
            headerTitle: DrawerScreenConstant.CreateProfile,
          },
        })}

        {StackScreens({
          name: SCREENS.TEACHER_QUIZ_MODULE,
          component: QuizModule,
          myOptions: {
            headerRight: null,
            headerTitleStyle: {
              fontSize: 20,
              color: theme.bgTheme,
              fontFamily: FontFamilyEnum.REGULAR,
            },
            headerTitle: 'Module 2 Quiz',
          },
        })}

        {StackScreens({
          name: SCREENS.TEACHER_UPLOAD_QUIZ,
          component: UploadQuiz,
          myOptions: {
            headerRight: null,
            headerTitleStyle: {
              fontSize: 20,
              color: theme.bgTheme,
              fontFamily: FontFamilyEnum.REGULAR,
            },
            headerTitle: 'How to Upload a Video',
          },
        })}

        {StackScreens({
          name: SCREENS.TEACHER_QUIZ_REVIEW,
          component: ReviewScreen,
          myOptions: {
            headerRight: null,
            headerTitleStyle: {
              fontSize: 20,
              color: theme.bgTheme,
              fontFamily: FontFamilyEnum.REGULAR,
            },
            headerTitle: '',
          },
        })}
      </TeacherOtherStack.Navigator>
    </>
  );
}

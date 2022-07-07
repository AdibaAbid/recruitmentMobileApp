import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { DrawerScreenConstant, SCREENS } from '@constants/strings';
import TextComponent from '../teacher/components/text';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TeacherDrawerComponent from '../teacher/components/drawer';
import Home from 'src/teacher/screens/Home';
import MyProfile from 'src/teacher/screens/MyProfile';
import { Keyboard } from 'react-native';
import HamburgerMenuIcon from '@assets/icons/HamburgerMenuIcon';
import { theme } from '../teacher/theme';
import Notification from 'src/teacher/assets/svgs/Notification';
import { SvgXml } from 'react-native-svg';
import { Size } from 'src/teacher/globals';
import { Pressable } from 'react-native';
import { styles } from './styles';
import { WP } from '../teacher/constants/';
import { FontFamilyEnum } from '../teacher/constants/FontFamily';
import TeacherOtherStackScreens from './TeacherStacks/TeacherOtherStacks';
// import Payments from 'src/teacher/screens/Payments';
import PaymentStacks from './TeacherStacks/PaymentStacks';
// import DemoAndLeads from 'src/teacher/screens/DemoAndLeads';
import DemoAndLeadsStacks from './TeacherStacks/DemoAndLeadsStacks';
import Notifications from 'src/teacher/screens/Notifications';
import backArrow from '@screens/SignUpScreen/assets/Svg/backArrow';
import { useNavigation } from '@react-navigation/core';
import NotificationsDetails from 'src/teacher/screens/Notifications/component/NotificationsDetails';

const DrawerNavigator = createDrawerNavigator();

export default function TeacherDrawerNavigator() {
  const navigations = useNavigation();

  return (
    <DrawerNavigator.Navigator
      screenOptions={({ navigation }) => ({
        unmountOnBlur: true,
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginHorizontal: WP('4') }}
            onPress={() => {
              Keyboard.dismiss();
              navigation.toggleDrawer();
            }}>
            <HamburgerMenuIcon colorIcon={theme.textLight} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <Pressable
            style={styles.notificationBtn}
            onPress={() => {
              Keyboard.dismiss();
              navigation.navigate(SCREENS.TEACHER_NOTIFICATIONS);
            }}>
            <SvgXml xml={Notification} />
            <View style={styles.notificationText}>
              <TextComponent
                title={'2'}
                size={Size.XXS}
                family={FontFamilyEnum.SEMIBOLD}
                color={theme.textWhite}
              />
            </View>
          </Pressable>
        ),
        headerStyle: {
          backgroundColor: theme.bgWhite,
        },
      })}
      drawerContent={props => <TeacherDrawerComponent {...props} />}>
      <DrawerNavigator.Screen
        name={SCREENS.TEACHER_HOME}
        component={Home}
        options={{
          headerTitle: '',
        }}
      />

      <DrawerNavigator.Screen
        name={SCREENS.TEACHER_PROFILE}
        component={MyProfile}
        options={{
          drawerItemStyle: { display: 'none' },
          headerRight: null,
          headerTitle: DrawerScreenConstant.MyProfile,
          headerTitleStyle: {
            fontSize: 20,
            color: theme.bgTheme,
            fontFamily: FontFamilyEnum.REGULAR,
          },
        }}
      />
      <DrawerNavigator.Screen
        name={SCREENS.TEACHER_PAYMENTS_STACKS}
        component={PaymentStacks}
        options={{
          headerShown: false,
        }}
      />

      <DrawerNavigator.Screen
        name={SCREENS.TEACHER_NOTIFICATIONS}
        component={Notifications}
        options={{
          headerRight: null,
          headerTitleStyle: {
            fontSize: 20,
            color: theme.textDefault,
            fontFamily: FontFamilyEnum.REGULAR,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingHorizontal: WP('6') }}
              onPress={() => {
                Keyboard.dismiss();
                navigations.goBack();
              }}>
              <SvgXml xml={backArrow} />
            </TouchableOpacity>
          ),
        }}
      />

      <DrawerNavigator.Screen
        name={SCREENS.TEACHER_NOTIFICATIONS_DETAILS}
        component={NotificationsDetails}
        options={{
          headerRight: null,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingHorizontal: WP('6') }}
              onPress={() => {
                Keyboard.dismiss();
                navigations.navigate(SCREENS.TEACHER_NOTIFICATIONS);
              }}>
              <SvgXml xml={backArrow} />
            </TouchableOpacity>
          ),
        }}
      />

      <DrawerNavigator.Screen
        name={SCREENS.TEACHER_DEMO_LEADS_STACKS}
        component={DemoAndLeadsStacks}
        options={{
          headerShown: false,
        }}
      />

      <DrawerNavigator.Screen
        name={SCREENS.TEACHER_OTHERS}
        component={TeacherOtherStackScreens}
        options={{
          headerShown: false,
        }}
      />
    </DrawerNavigator.Navigator>
  );
}

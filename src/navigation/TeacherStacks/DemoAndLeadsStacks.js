import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Keyboard, TouchableOpacity } from 'react-native';
import {
  DrawerScreenConstant,
  SCREENS,
} from '../../recruitment/constants/strings';
import StackScreens from '../StackScreen';
import { useNavigation } from '@react-navigation/native';
import HamburgerMenuIcon from '@assets/icons/HamburgerMenuIcon';
import { theme } from '../../teacher/theme';
import { WP } from '../../teacher/constants';
import DemoAndLeads from 'src/teacher/screens/DemoAndLeads';
import InactiveDemos from 'src/teacher/screens/DemoAndLeads/components/InactiveDemos';
import { FontFamilyEnum } from 'src/teacher/constants/FontFamily';

const DemoAndLead = createStackNavigator();

export default function DemoAndLeadsStacks() {
  const navigation = useNavigation();

  return (
    <>
      <DemoAndLead.Navigator
        initialRouteName={SCREENS.TEACHER_DEMO_LEADS}
        screenOptions={{
          gestureEnabled: false,
        }}>
        {StackScreens({
          name: SCREENS.TEACHER_DEMO_LEADS,
          component: DemoAndLeads,
          myOptions: {
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
            title: DrawerScreenConstant.demoAndLeads,
            headerStyle: { backgroundColor: theme.mustard },
            headerTitleStyle: {
              fontSize: 20,
              color: theme.bgTheme,
              fontFamily: FontFamilyEnum.REGULAR,
            },
          },
        })}

        {StackScreens({
          name: SCREENS.TEACHER_INACTIVE_DEMOS,
          component: InactiveDemos,
          myOptions: {
            title: DrawerScreenConstant.inactiveDemos,
            headerTitleStyle: {
              fontSize: 20,
              color: theme.bgTheme,
              fontFamily: FontFamilyEnum.REGULAR,
            },
          },
        })}
      </DemoAndLead.Navigator>
    </>
  );
}

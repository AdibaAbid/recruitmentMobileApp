import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Keyboard, TouchableOpacity } from 'react-native';
import {
  DrawerScreenConstant,
  SCREENS,
} from '../../recruitment/constants/strings';
import StackScreens from '../StackScreen';
import InvoiceScreen from 'src/teacher/screens/Payments/components/InvoiceScreen';
import Payments from 'src/teacher/screens/Payments';
import { useNavigation } from '@react-navigation/native';
import HamburgerMenuIcon from '@assets/icons/HamburgerMenuIcon';
import { theme } from '../../teacher/theme';
import { FontFamilyEnum } from '../../teacher/constants/FontFamily';

const PaymentStack = createStackNavigator();

export default function PaymentStacks() {
  const navigation = useNavigation();

  return (
    <>
      <PaymentStack.Navigator
        initialRouteName={SCREENS.TEACHER_PAYMENTS}
        screenOptions={{
          gestureEnabled: false,
        }}>
        {StackScreens({
          name: SCREENS.TEACHER_PAYMENTS,
          component: Payments,
          myOptions: {
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingHorizontal: 15 }}
                onPress={() => {
                  Keyboard.dismiss();
                  navigation.toggleDrawer();
                }}>
                <HamburgerMenuIcon colorIcon={theme.bgTheme} />
              </TouchableOpacity>
            ),
            title: DrawerScreenConstant.Payments,
            headerTitleStyle: {
              fontSize: 20,
              color: theme.bgTheme,
              fontFamily: FontFamilyEnum.REGULAR,
            },
          },
        })}

        {StackScreens({
          name: SCREENS.TEACHER_INVOICE_SCREEN,
          component: InvoiceScreen,
          myOptions: ({ route }) => ({
            title: route.params ? route.params.name : '',
          }),
        })}
      </PaymentStack.Navigator>
    </>
  );
}

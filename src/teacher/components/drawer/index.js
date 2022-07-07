import React from 'react';

import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import avatar from '../../assets/images/avatar.jpg';
import TextComponent from '../../../teacher/components/text';
import { defaultConfig, Size } from '../../../teacher/globals';
import { theme } from '../../../teacher/theme';
import { getLineHeight } from '../../constants';
import { SvgXml } from 'react-native-svg';
import home from '../assets/svgs/drawer/home';
import homeFill from '../assets/svgs/drawer/homeFill';
import packageFill from '../assets/svgs/drawer/packageFill';
import demo from '../assets/svgs/drawer/demo';
import demoFill from '../assets/svgs/drawer/demoFill';
import payment from '../assets/svgs/drawer/payment';
import paymentFill from '../assets/svgs/drawer/paymentFill';
import help from '../assets/svgs/drawer/help';
import helpFill from '../assets/svgs/drawer/helpFill';
import logout from '../assets/svgs/drawer/logout';
import logoutFill from '../assets/svgs/drawer/logoutFill';
import { NavigationStack, SCREENS, USERINFO } from '@constants/strings';
import { FontFamilyEnum } from '../../constants/FontFamily';
import AsyncStorage from '@react-native-async-storage/async-storage';
import teacherMangBadgeWithOutline from '@teacher/assets/svgs/teacherMangBadgeWithOutline';
import superTutorWithOutline from '@teacher/assets/svgs/superTutorWithOutline';
import eduBadgeWithOutline from '@teacher/assets/svgs/eduBadgeWithOutline';
import packages from '@teacher/assets/svgs/drawer/packages';

import styles from './styles';

const data = [
  {
    id: '0',
    name: 'Home',
    route: SCREENS.TEACHER_HOME,
    icon: home,
    iconFill: homeFill,
  },
  {
    id: '1',
    name: 'My Packages',
    route: SCREENS.TEACHER_OTHERS,
    screen: SCREENS.TEACHER_MY_PACKAGE,
    icon: packages,
    iconFill: packageFill,
  },
  {
    id: '2',
    name: 'Demos & Leads',
    route: SCREENS.TEACHER_DEMO_LEADS_STACKS,
    icon: demo,
    iconFill: demoFill,
  },
  {
    id: '3',
    name: 'Payments',
    route: SCREENS.TEACHER_PAYMENTS_STACKS,
    screen: SCREENS.TEACHER_PAYMENTS,
    icon: payment,
    iconFill: paymentFill,
  },
  {
    id: '4',
    name: 'row',
  },
  {
    id: '5',
    name: 'Help & Support',
    route: 'Help',
    icon: help,
    iconFill: helpFill,
  },
  {
    id: '6',
    name: 'Signout',
    route: 'Signout',
    icon: logout,
    iconFill: logoutFill,
  },
];

const TeacherDrawerComponent = ({ state, navigation }) => {
  const { routeNames, index } = state;

  const SeperatorComponent = () => <View style={styles.seperator} />;

  const getSelectedIndex = name => routeNames && routeNames[index] === name;

  const navigateToRoute = async item => {
    if (item.screen) {
      navigation.navigate(item.route, {
        screen: item.screen,
        name: item.name,
      });
    } else {
      if (item.route === 'Signout') {
        await AsyncStorage.removeItem(USERINFO.USER_SIGN_IN_TOKEN);
        navigation.replace(NavigationStack.LANDING, {
          screen: SCREENS.LOGIN_SCREEN,
        });
      } else {
        navigation.navigate(item.route);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.avatarImg}>
          <Image source={avatar} style={styles.img} />
        </View>

        <View style={styles.profileName}>
          <TextComponent
            title={'Saima Amir!'}
            size={Size.M}
            numLines={1}
            customStyles={getLineHeight(27)}
            family={FontFamilyEnum.BOLD}
            color={theme.textDefault}
          />

          <View style={styles.row}>
            <View style={styles.badgeBg}>
              <View style={styles.svgIcon}>
                <SvgXml xml={eduBadgeWithOutline} height={20} width={20} />
              </View>
            </View>
            <View style={styles.badgeBg}>
              <View style={styles.svgIcon}>
                <SvgXml xml={superTutorWithOutline} height={20} width={20} />
              </View>
            </View>

            <View style={styles.badgeBg}>
              <View style={styles.svgIcon}>
                <SvgXml
                  xml={teacherMangBadgeWithOutline}
                  height={20}
                  width={20}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <TextComponent
              title={'View Profile'}
              size={Size.XS}
              color={theme.bgTheme}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.drawerMenuContainer}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          bounces={false}
          ItemSeparatorComponent={SeperatorComponent}
          renderItem={({ item }) =>
            item.name === 'row' ? (
              <View style={styles.hrow} />
            ) : (
              <TouchableOpacity
                onPress={() => navigateToRoute(item)}
                activeOpacity={defaultConfig.touchOpacity}>
                <View style={styles.drawerMenu}>
                  <View style={styles.icon}>
                    <SvgXml
                      xml={
                        getSelectedIndex(item.route) ? item.iconFill : item.icon
                      }
                    />
                  </View>

                  <View style={styles.text}>
                    <TextComponent
                      title={item.name}
                      size={Size.S}
                      customStyles={getLineHeight(21)}
                      color={
                        getSelectedIndex(item.route)
                          ? theme.bgTheme
                          : theme.textNormal
                      }
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )
          }
        />
      </View>

      <View style={styles.footer}>
        <TextComponent
          title={'App version: 2.71'}
          size={Size.XS}
          customStyles={getLineHeight(18)}
          color={theme.textLight}
        />
      </View>
    </View>
  );
};

export default TeacherDrawerComponent;

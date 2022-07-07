import React, { useState, useEffect, useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ComplaintScreen from '@screens/ComplaintScreen';
import MinimumCriteriaScreen from '@screens/MinimumCriteriaScreen';
import PersonalDataForms from '@screens/PersonalDataForms';
import { SCREENS } from '@constants/strings';
import CustomDrawer from '@components/CustomDrawer';
import ChangePasswordScreen from '@screens/ChangePasswordScreen';
import HamburgerMenuIcon from '@assets/icons/HamburgerMenuIcon';
import { color } from '@styles/colorConstant';
import {
  FONT_FAMILY,
  getFontFamily,
  getFontSize,
  SIZE,
} from '@styles/FontProperties';
import { TouchableOpacity } from 'react-native';
import NewComplainScreen from '@screens/ComplaintScreen/NewComplainScreen';
import { Keyboard } from 'react-native';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import { GetUserTimeSlot } from '@api/Axios/client';
import ApplicationSubmitedScreen from '@screens/ApplicationSubmitedScreen';
import ThankYouScreen from '@screens/ThankYouScreen';
import NetInfo from '@react-native-community/netinfo';
import NoInternetModal from '@components/NoInternetModal';
import ContractSigningScreen from '@screens/ContractSigningScreen';
import FAQS from '@assets/icons/FAQS';
import SupportIcon from '@assets/icons/SupportIcon';
import LoadingScreen from '@screens/LoadingScreen';
import ProfileIcon from '@assets/icons/ProfileICon';
import HomeeIcon from '@assets/icons/HomeIcon';
import InterviewConfirmedScreen from '@screens/InterviewConfirmedScreen';
import ContractSubmittedThankYou from '@screens/ContractSubmittedThankYou';
import InterviewClearedScreen from '@screens/InterviewClearedScreen';
import ApplicationRejected from '@screens/ApplicationRejected';
import TeacherStackScreens from './TeacherNavigation';

const Drawer = createDrawerNavigator();

const RecruitmentNavigation = () => {
  let { setIsFormSubmited, setIsRefresh } = useContext(CredientialsContext);
  const [isOffline, setOfflineStatus] = useState(false);
  const [acceptance, setAcceptance] = useState();
  const [submitLevel, setSubmitLevel] = useState();
  const [checkStatus, setCheckStatus] = useState();

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    return () => removeNetInfoSubscription();
  }, []);

  useEffect(() => {
    let unmounted = false;
    retrieveUserData(unmounted);
    return () => {
      unmounted = true;
    };
  });

  const retrieveUserData = async unmount => {
    if (!unmount) {
      const res = await GetUserTimeSlot();
      setAcceptance(res.userdata.acceptance);
      setSubmitLevel(res.userdata.submit);
      setIsFormSubmited(res.userdata.completed);
      setCheckStatus(res.userdata.progress[0]?.status);
      setIsRefresh(false);
      // setCheckComment(res.userdata.progress[0]?.comment);
    }
  };

  const checkHomeStatusType = (acceptanceLevel, submit, StatusCheck) => {
    let status;

    if (submit === 0 && acceptanceLevel === 0) {
      status = 'notsubmit'; //incomplete form
    } else if (
      StatusCheck === 'Application Rejected' ||
      StatusCheck === 'Application Unread'
    ) {
      status = 'Thank you screen'; //complete form and thank you screen
    } else if (StatusCheck === 'Interview') {
      status = 'Time slot screen'; //calendar screen
    } else if (StatusCheck === 'Uncalled') {
      status = 'selected TimeSlots'; //selected timeslots screen
    } else if (StatusCheck === 'Contract Sent') {
      status = 'Document Upload'; //Document screen
    } else if (StatusCheck === 'Contract Signed') {
      status = 'Document submitted screen'; //Document submitted thank you screen
    } else if (StatusCheck === 'Contract Rejected') {
      status = 'Document Upload'; //Resubmit Document screen
    } else if (StatusCheck === 'Unsent Contract') {
      status = 'Interview Cleared Screen'; //after complete interview screen
    } else if (StatusCheck === 'Interview Rejected') {
      status = 'Application Rejected'; //interview rejected
    } else if (StatusCheck === 'Contract Accepted') {
      status = 'Thank you screen'; //interview rejected
    }

    switch (status) {
      case 'Thank you screen':
        return (
          <Drawer.Screen
            name={SCREENS.HOME}
            component={ThankYouScreen}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: color.themeColorShockingPink,
              },
              drawerIcon: () => <HomeeIcon />,
            }}
          />
        );
      case 'Time slot screen':
        return (
          <Drawer.Screen
            name={SCREENS.HOME}
            component={ApplicationSubmitedScreen}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: color.themeColorShockingPink,
              },
              drawerIcon: () => <HomeeIcon />,
            }}
          />
        );
      case 'Document Upload':
        return (
          <Drawer.Screen
            name={SCREENS.HOME}
            component={ContractSigningScreen}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: color.themeColorShockingPink,
              },
              drawerIcon: () => <HomeeIcon />,
            }}
          />
        );
      case 'selected TimeSlots':
        return (
          <Drawer.Screen
            name={SCREENS.HOME}
            component={InterviewConfirmedScreen}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: color.themeColorShockingPink,
              },
              drawerIcon: () => <HomeeIcon />,
            }}
          />
        );
      case 'notsubmit':
        return (
          <Drawer.Screen
            name={SCREENS.HOME}
            component={PersonalDataForms}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: color.themeColorShockingPink,
              },
              drawerIcon: () => <HomeeIcon />,
            }}
          />
        );

      case 'Document Upload':
        return (
          <Drawer.Screen
            name={SCREENS.HOME}
            component={ContractSigningScreen}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: color.themeColorShockingPink,
              },
              drawerIcon: () => <HomeeIcon />,
              unmountOnBlur: true,
            }}
          />
        );

      case 'Document submitted screen':
        return (
          <Drawer.Screen
            name={SCREENS.HOME}
            component={ContractSubmittedThankYou}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: color.themeColorShockingPink,
              },
              drawerIcon: () => <HomeeIcon />,
              unmountOnBlur: true,
            }}
          />
        );

      case 'Interview Cleared Screen':
        return (
          <Drawer.Screen
            name={SCREENS.HOME}
            component={InterviewClearedScreen}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: color.themeColorShockingPink,
              },
              drawerIcon: () => <HomeeIcon />,
            }}
          />
        );

      case 'Application Rejected':
        return (
          <Drawer.Screen
            name={SCREENS.HOME}
            component={ApplicationRejected}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: color.themeColorShockingPink,
              },
              drawerIcon: () => <HomeeIcon />,
            }}
          />
        );

      case 'Contract Accepted':
        return (
          <Drawer.Screen
            name={SCREENS.HOME}
            component={TeacherStackScreens}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: color.themeColorShockingPink,
              },
              drawerIcon: () => <HomeeIcon />,
            }}
          />
        );

      default:
        return (
          <Drawer.Screen
            name={SCREENS.LOADING}
            component={LoadingScreen}
            options={{
              drawerItemStyle: { display: 'none' },
              headerShown: false,
            }}
          />
        );
    }
  };

  return (
    <>
      {isOffline && (
        <NoInternetModal
          show={isOffline}
          isRetrying={false}
          onRetry={() => retrieveUserData()}
        />
      )}
      <Drawer.Navigator
        // initialRouteName={SCREENS.INTERVIEW_CONFIRM_SCREEN}
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
                navigation.toggleDrawer();
              }}
              style={{
                width: 60,
              }}>
              <HamburgerMenuIcon colorIcon={color.themeColorShockingPink} />
            </TouchableOpacity>
          ),
          headerStatusBarHeight: 20,
          unmountOnBlur: true,
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerStyle: {
            backgroundColor: color.white,
          },
          headerTitleAlign: 'center',
          headerTintColor: color.themeColorShockingPink,
          drawerInactiveBackgroundColor: color.white,
          drawerInactiveTintColor: color.blackBorderColor,
          drawerActiveTintColor: color.themeColorShockingPink,

          drawerActiveBackgroundColor: color.white,
          drawerLabelStyle: {
            fontFamily: getFontFamily(FONT_FAMILY.REGULAR),
            fontSize: getFontSize(SIZE.XSMALL),
            padding: -5,
            marginVertical: -12,
            marginLeft: -20,
          },
        })}>
        {checkHomeStatusType(acceptance, submitLevel, checkStatus)}

        <Drawer.Screen
          name={SCREENS.CHANGE_PASSWORD_SCREEN}
          component={ChangePasswordScreen}
          options={{
            drawerIcon: () => <ProfileIcon />,
          }}
        />
        <Drawer.Screen
          name={SCREENS.COMPLAINT_SCREEN}
          component={MinimumCriteriaScreen}
          options={{
            drawerIcon: () => <FAQS />,
          }}
        />
        <Drawer.Screen
          name={SCREENS.MINIMUM_CRITERIA}
          component={ComplaintScreen}
          options={{
            drawerIcon: () => <SupportIcon />,
          }}
        />
        <Drawer.Screen
          name={SCREENS.NEW_COMPLAINTS}
          component={NewComplainScreen}
          options={{
            drawerItemStyle: { display: 'none' },
          }}
          initialParams={SCREENS.COMPLAINT_SCREEN}
        />
        <Drawer.Screen
          name={SCREENS.THANK_YOU_SCREEN}
          component={ThankYouScreen}
          options={{
            drawerItemStyle: { display: 'none' },
            headerShown: false,
            headerStyle: {
              backgroundColor: color.themeColorShockingPink,
            },
          }}
        />
        <Drawer.Screen
          name={SCREENS.INTERVIEW_CONFIRM_SCREEN}
          component={InterviewConfirmedScreen}
          options={{
            drawerItemStyle: { display: 'none' },
            headerShown: false,
            headerStyle: {
              backgroundColor: color.themeColorShockingPink,
            },
          }}
        />
        <Drawer.Screen
          name={SCREENS.CONTRACT_SIGNING_SUBMITTED}
          component={ContractSubmittedThankYou}
          options={{
            drawerItemStyle: { display: 'none' },
            headerShown: false,
            headerStyle: {
              backgroundColor: color.themeColorShockingPink,
            },
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default RecruitmentNavigation;

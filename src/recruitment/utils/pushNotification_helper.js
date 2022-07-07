import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SCREENS } from '@constants/strings';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    GetFCMToken();
  }
}

export async function GetFCMToken() {
  let fcmTokenFromStorage = await AsyncStorage.getItem('fcmToken');
  // console.log(
  //   '🚀 ~ OLD file: pushNotification_helper.js ~ line 21 ~ GetFCMToken ~ fcmToken',
  //   fcmTokenFromStorage,
  // );
  if (!fcmTokenFromStorage) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('New fcmToken--->', fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    } catch (error) {
      console.log('🚀 ~ ~ error in fcmToken', error);
    }
  }
}

export const NotificationListner = navigation => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:', // backgroun notification clicked
      remoteMessage.notification,
    );
    navigation.navigate(SCREENS.HOME);
  });
  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage, // after kill app (on notification click)
        );
        // navigation.navigate(SCREENS.HOME);
      }
    });
};

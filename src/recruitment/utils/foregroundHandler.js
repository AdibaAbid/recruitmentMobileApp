import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import { SCREENS } from '@constants/strings';

export const ForegroundHandler = navigation => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const { notification, data } = remoteMessage;
      console.log(
        '🚀 ~ file: foregroundHandler.js ~ line 10 ~ unsubscribe ~ data',
        data,
      );

      if (
        data.key === 'contractrejected' ||
        data.key === 'applicationunread' ||
        data.key === 'applicationrejected' ||
        data.key === 'interview' ||
        data.key === 'Uncalled' ||
        data.key === 'interviewrejected' ||
        data.key === 'interviewreschedule' ||
        data.key === 'contractsent' ||
        data.key === 'unsent' ||
        data.key === 'contractaccepted' ||
        data.key === 'contractsigned'
      ) {
        console.log('🚀 ~~ data.key', data.key);
        navigation.navigate(SCREENS.HOME);
      }
      //   PushNotification.createChannel(
      //     {
      //       channelId: 'fcm_fallback_notification_channel', // (required)
      //       channelName: 'Dot&Line', // (required)
      //     },
      //     created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
      //   );

      PushNotification.localNotification({
        channelId: 'Dot_n_Line_channel',
        title: notification.title,
        message: notification.body,
      });
    });
    return unsubscribe;
  }, [navigation]);
  return null;
};

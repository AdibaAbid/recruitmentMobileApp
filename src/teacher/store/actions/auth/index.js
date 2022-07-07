import {
  PostLogin,
  PostSignUp,
  ResendOTPLink,
  ForgotPasswordPost,
  UserDeviceToken,
} from '../../../../recruitment/api/Axios/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USERINFO } from '@constants/strings';

export function LoginUser(data) {
  return dispatch => {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await PostLogin(data);
        if (res.success) {
          if (res.active === 0) {
            ResendOTPLink(res.token);
            await AsyncStorage.setItem(USERINFO.USER_SIGN_UP_TOKEN, res.token);
            await AsyncStorage.setItem(USERINFO.USER_SIGN_IN_TOKEN, res.token);
            resolve('unactive');
          } else {
            await AsyncStorage.setItem(USERINFO.USER_SIGN_IN_TOKEN, res.token);
            await AsyncStorage.setItem(USERINFO.USER_SIGN_UP_TOKEN, res.token);
            resolve(res);
          }
        } else {
          reject(res.message);
        }
      } catch (e) {
        reject(e.message);
      }
    });
  };
}

export function SignUpUser(data) {
  return dispatch => {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await PostSignUp(data);
        if (res.success) {
          await AsyncStorage.setItem(USERINFO.USER_SIGN_UP_TOKEN, res.token);
          await AsyncStorage.setItem(USERINFO.USER_SIGN_IN_TOKEN, res.token);
          resolve(res.success);
        } else {
          reject(res.message);
        }
      } catch (e) {
        console.log('🚀 ~ file: index.js ~ line 28 ~ e', e);
        reject(e.message);
      }
    });
  };
}

export function ForgetPassword(data) {
  return dispatch => {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await ForgotPasswordPost(data);
        if (res.success) {
          resolve(res);
        } else {
          reject(res.message);
        }
      } catch (e) {
        console.log('🚀 ~ file: index.js ~ line 28 ~ e', e);
        reject(e.message);
      }
    });
  };
}

export function DeviceToken() {
  return dispatch => {
    return new Promise(async function (resolve, reject) {
      try {
        const deviceToken = await AsyncStorage.getItem('fcmToken');
        console.log('🚀 ~ file: index.js ~ line 82 ~ deviceToken', deviceToken);

        const res = await UserDeviceToken(deviceToken);
        if (res.success) {
          resolve(res);
        } else {
          reject(res.message);
        }
      } catch (e) {
        console.log('🚀 ~ file: index.js ~ line 28 ~ e', e);
        reject(e.message);
      }
    });
  };
}

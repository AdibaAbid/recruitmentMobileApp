import { USERINFO } from '@constants/strings';
import RNFetchBlob from 'rn-fetch-blob';
import axiosInstance from './axiosInstance';
import {
  API_URL,
  CHANGE_PASSWORD_API,
  COMPLAINT_HISTORY_API,
  COMPLAINT_REGISTERATION_API,
  DEVICE_TOKEN,
  DOCS_FILES,
  FORGOT_PASSWORD,
  getUserTokens,
  GET_USER_DATA_API,
  LOGIN_SCREEN_KEYWORD,
  OTP_SCREEN_KEYWORD,
  POST_TIME_SLOTS,
  RESEND_OTP_KEYWORD,
  SIGN_UP_KEYWORD,
  SUBMIT_APPLICATION,
  TIME_SLOTS,
  UPLOAD_FILES,
  USER_PERSONAL_INFO,
} from './config';

export function PostSignUp(signUpData) {
  let formData = new FormData();

  formData.append('email', signUpData.email);
  formData.append('number', signUpData.number);
  formData.append('password', signUpData.password);
  formData.append('phonecode', signUpData.phonecode);
  formData.append('countrycode', signUpData.countrycode);
  formData.append('name', signUpData.name);

  return new Promise(async function (resolve, reject) {
    let response = await axiosInstance.post(SIGN_UP_KEYWORD, formData);
    console.log('🚀 ~ file: client.js ~ line 37 ~ response', response);
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  });
}

export function PostLogin(loginData) {
  let loginFormData = new FormData();

  loginFormData.append('email', loginData.email);
  loginFormData.append('password', loginData.password);

  return new Promise(async function (resolve, reject) {
    let response = await axiosInstance.post(
      LOGIN_SCREEN_KEYWORD,
      loginFormData,
    );
    console.log('🚀 ~ file: client.js ~ line 56 ~ response', response);
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  });
}

export function FetchOTP(otp) {
  let otpKey = new FormData();
  otpKey.append('otp', otp);

  return new Promise(async function (resolve, reject) {
    axiosInstance.defaults.headers.common = {
      token: await getUserTokens(USERINFO.USER_SIGN_UP_TOKEN),
    };
    let response = await axiosInstance.post(OTP_SCREEN_KEYWORD, otpKey);
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  });
}

export function ResendOTPLink(token) {
  return new Promise(async function (resolve, reject) {
    axiosInstance.defaults.headers.common = {
      token: token ? token : await getUserTokens(USERINFO.USER_SIGN_UP_TOKEN),
    };
    let response = await axiosInstance.get(RESEND_OTP_KEYWORD);
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  });
}

export function UserPersonalInfo(userData) {
  return new Promise(async function (resolve, reject) {
    axiosInstance.defaults.headers.common = {
      token: await getUserTokens(USERINFO.USER_SIGN_IN_TOKEN),
    };

    let response = await axiosInstance.post(USER_PERSONAL_INFO, userData);
    if (response) {
      console.log(
        '🚀 ~ file: client.js ~ *********line 100 ~ response',
        response,
      );
      resolve(response);
    } else {
      reject(response);
    }
  });
}

export function GetUserData() {
  return new Promise(async function (resolve, reject) {
    axiosInstance.defaults.headers.common = {
      token: await getUserTokens(USERINFO.USER_SIGN_IN_TOKEN),
    };

    let response = await axiosInstance.get(GET_USER_DATA_API);
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  });
}

export function GetUserTimeSlot() {
  return new Promise(async function (resolve, reject) {
    axiosInstance.defaults.headers.common = {
      token: await getUserTokens(USERINFO.USER_SIGN_IN_TOKEN),
    };

    let response = await axiosInstance.get(TIME_SLOTS);
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  });
}

export function PostUserTimeSlot(slotId) {
  let slotIdData = new FormData();
  slotIdData.append('timeslot', slotId);

  return new Promise(async function (resolve, reject) {
    axiosInstance.defaults.headers.common = {
      token: await getUserTokens(USERINFO.USER_SIGN_IN_TOKEN),
    };

    let response = await axiosInstance.post(POST_TIME_SLOTS, slotIdData);

    if (response) {
      resolve(response);
    } else {
      reject();
    }
  });
}

export function ComplaintRegistration(complaintData) {
  let complaintsData = new FormData();

  complaintsData.append('h1Text', complaintData.h1Text);
  complaintsData.append('comments', complaintData.comments);
  complaintsData.append('device_status', complaintData.device_status);
  complaintsData.append('id', complaintData.id);

  return new Promise(async function (resolve, reject) {
    let response = await axiosInstance.post(
      COMPLAINT_REGISTERATION_API,
      complaintsData,
    );
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  });
}

export function GetComplaintHistory(userID) {
  let complaintsData = new FormData();
  complaintsData.append('id', userID.id);

  return new Promise(async function (resolve, reject) {
    axiosInstance.defaults.headers.common = {
      token: await getUserTokens(USERINFO.USER_SIGN_IN_TOKEN),
    };

    let response = await axiosInstance.get(COMPLAINT_HISTORY_API, userID);
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  });
}

export function ChangePassword(newPasswords) {
  let ChangePasswordFormData = new FormData();

  ChangePasswordFormData.append('oldpassword', newPasswords.oldpassword);
  ChangePasswordFormData.append('newpassword', newPasswords.newpassword);
  ChangePasswordFormData.append(
    'retypenewpassword',
    newPasswords.retypenewpassword,
  );

  return new Promise(async function (resolve, reject) {
    let response = await axiosInstance.post(
      CHANGE_PASSWORD_API,
      ChangePasswordFormData,
    );
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  });
}

export async function UploadVideoFiles(
  data,
  setFileProgressPercent,
  // setShowError,
  setShowProgress,
  setVideoFileFromAPI,
  setUserVideo,
) {
  return new Promise(async function (resolve, reject) {
    let fileData = new FormData();
    fileData.append(data.type, {
      name: 'video.mp4',
      type: data.video.type,
      uri: data.video.uri,
    });
    fileData.append('type', data.type);

    axiosInstance.defaults.headers.common = {
      'Content-Type': 'multipart/form-data',
      token: await getUserTokens(USERINFO.USER_SIGN_IN_TOKEN),
    };

    const config = {
      onUploadProgress: progressEvent => {
        const { loaded, total } = progressEvent;
        let percent = Math.round((loaded * 100) / total);
        setFileProgressPercent(percent);
        if (percent > 0 && percent < 100) {
          setShowProgress(true);
        } else if (percent === 100) {
          setTimeout(() => {
            setShowProgress(false);
          }, 2000);
        }
      },
    };

    let response = await axiosInstance.post(UPLOAD_FILES, fileData, config);

    if (response) {
      resolve(response);
      setVideoFileFromAPI(response.filename);
      setUserVideo(response.filename);
    } else {
      reject();
    }
  });
}

// Not using yet but can be use in future
export async function fetchVideoFile(data) {
  let fileData = new FormData();
  const token = await getUserTokens(USERINFO.USER_SIGN_IN_TOKEN);

  return new Promise(async function (resolve, reject) {
    fileData.append(data.type, {
      name: 'video.mp4',
      type: data.video.type,
      uri: data.video.uri,
    });
    fileData.append('type', data.type);

    RNFetchBlob.fetch(
      'POST',
      `${API_URL}${UPLOAD_FILES}`,
      {
        // method: 'POST',
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        token: token,
      },
      [
        {
          name: 'video.mp4',
          filename: 'video',
          type: 'video',
          data: RNFetchBlob.wrap(data.video.uri),
        },
      ],
    )
      .uploadProgress({ interval: 250 }, (written, total) => {})
      .progress({ count: 10 }, (received, total) => {})
      .then(response => response.json())
      .then(results => {
        resolve(results);
      })
      .catch(error => console.log('error aya', error));
  });
}

export async function UploadImageFiles(data, setFileProgressPercent) {
  let fileData = new FormData();

  fileData.append(data.type, {
    name: data.profilepicture.fileName,
    type: data.profilepicture.type,
    uri: data.profilepicture.uri,
  });
  fileData.append('type', data.type);

  axiosInstance.defaults.headers.common = {
    token: await getUserTokens(USERINFO.USER_SIGN_IN_TOKEN),
  };
  const config = {
    onUploadProgress: progressEvent => {
      const { loaded, total } = progressEvent;
      let percent = Math.round((loaded * 100) / total);
      setFileProgressPercent(percent);
    },
  };

  return new Promise(async function (resolve, reject) {
    try {
      let response = await axiosInstance.post(UPLOAD_FILES, fileData, config);
      if (response) {
        resolve(response);
      } else {
        reject();
      }
    } catch (error) {
      //console.log('🚀 ~ catcherror', error);
    }
  });
}

export function SubmitApplication() {
  return new Promise(async function (resolve, reject) {
    axiosInstance.defaults.headers.common = {
      Accept: 'application/json',
      token: await getUserTokens(USERINFO.USER_SIGN_IN_TOKEN),
    };

    let response = await axiosInstance.get(SUBMIT_APPLICATION);
    console.log('🚀 ~ file: client.js ~ line 320 ~ response', response);
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  });
}

export function ForgotPasswordPost(data) {
  let forgotPassword = new FormData();
  forgotPassword.append('email', data.email);

  return new Promise(async function (resolve, reject) {
    let response = await axiosInstance.post(FORGOT_PASSWORD, forgotPassword);
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  });
}

export async function UserDeviceToken(data) {
  let deviceToken = new FormData();
  deviceToken.append('devicetoken', data);

  axiosInstance.defaults.headers.common = {
    token: await getUserTokens(USERINFO.USER_SIGN_IN_TOKEN),
  };
  return new Promise(async function (resolve, reject) {
    let response = await axiosInstance.post(DEVICE_TOKEN, deviceToken);
    console.log('🚀 ~ file: client.js ~ line 387 ~ response', response);
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  });
}

export async function UploadDocsFiles(data) {
  let fileData = new FormData();

  const keys = Object.keys(data);
  keys.forEach(key => {
    if (data[key] !== '') {
      fileData.append(key, {
        name: data[key].fileName,
        type: data[key].type,
        uri: data[key].uri,
      });
    }
  });

  axiosInstance.defaults.headers.common = {
    token: await getUserTokens(USERINFO.USER_SIGN_IN_TOKEN),
  };

  return new Promise(async function (resolve, reject) {
    try {
      let response = await axiosInstance.post(DOCS_FILES, fileData);
      console.log('🚀 ~ file: client.js ~ line 400 ~ response', response);
      if (response) {
        resolve(response);
      } else {
        reject();
      }
    } catch (error) {
      //console.log('🚀 ~ catcherror', error);
    }
  });
}

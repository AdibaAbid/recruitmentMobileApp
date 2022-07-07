import AsyncStorage from '@react-native-async-storage/async-storage';

export const API_URL = 'https://recruitment.dotandlinelearning.com/api';
export const SIGN_UP_KEYWORD = '/signup';
export const OTP_SCREEN_KEYWORD = '/activate';
export const LOGIN_SCREEN_KEYWORD = '/login';
export const RESEND_OTP_KEYWORD = '/resendotp';
export const USER_PERSONAL_INFO = '/userPersonalInfo';
export const GOOGLE_PLACES_API_KEY = 'AIzaSyC4gF0HTrc2bPs1Eon9p4tDnmnLDb6QRQY';
export const COUNTRIES_FLAG_SVG_URL = FLAG =>
  `https://purecatamphetamine.github.io/country-flag-icons/3x2/${FLAG}.svg`;

export const PROFILE_IMAGE_URL = (userImage, userEmail) =>
  `https://rec-portal.s3.ap-south-1.amazonaws.com/rec-portal//${userEmail}/${userImage}`;
export const GET_USER_DATA_API = '/getuserdata';
export const COMPLAINT_REGISTERATION_API = '/complaintregistration';
export const COMPLAINT_HISTORY_API = '/complaintHistory';
export const CHANGE_PASSWORD_API = '/changepassword';
export const UPLOAD_FILES = '/uploadFiles';
export const SUBMIT_APPLICATION = '/submit';
export const FORGOT_PASSWORD = '/forgotpassword';
export const TIME_SLOTS = '/home';
export const POST_TIME_SLOTS = '/tfp';
export const DOCS_FILES = '/submitdocs';
export const DEVICE_TOKEN = '/devicetoken';

export const getUserTokens = async USER_TOKEN => {
  try {
    const tokenDataa = await AsyncStorage.getItem(USER_TOKEN);
    // console.log('🚀 ~ file: config.js ~ line 30 ~ tokenDataa', tokenDataa);

    if (tokenDataa) {
      return tokenDataa;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};

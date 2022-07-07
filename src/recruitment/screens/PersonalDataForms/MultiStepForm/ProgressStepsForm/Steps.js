import { socialMediaName } from 'src/recruitment/arrayConst';

export const getFirstStepData = (apiData, userPhoneNumber) => {
  const obj = {
    firstname: apiData?.firstname,
    lastname: apiData?.lastname,
    name: apiData?.name,
    phoneNumber: userPhoneNumber ? userPhoneNumber : apiData?.phoneNumber,
    phonecode: apiData?.phonecode ? apiData?.phonecode : '+92',
    dateofbirth: apiData?.dateofbirth,
    gender: apiData?.gender,
    country: apiData?.country,
    countrycode: apiData?.countrycode,
    countrycode_2: apiData?.countrycode_2,
    city: apiData?.city,
    area: apiData?.area,
    address: apiData?.address,
    aboutus: apiData?.aboutus,
    otheraboutus: apiData?.otheraboutus,
    bloggerName: apiData?.otheraboutus,
    socialMediaName: apiData.otheraboutus
      ? socialMediaName[Number(apiData.otheraboutus) - 1]
      : '',
  };
  return obj;
};

export const getUserDataStepOne = (userInitialDataFromAPI, userPhoneNumber) => {
  const userDataStepOne = {
    firstname: userInitialDataFromAPI?.firstname,
    lastname: userInitialDataFromAPI?.lastname,
    name: userInitialDataFromAPI?.name,
    phoneNumber: userPhoneNumber
      ? userPhoneNumber
      : userInitialDataFromAPI?.phoneNumber,
    phonecode: userInitialDataFromAPI?.phonecode
      ? userInitialDataFromAPI?.phonecode
      : '+92',
    dateofbirth: userInitialDataFromAPI?.dateofbirth,
    gender: userInitialDataFromAPI?.gender,
    country: userInitialDataFromAPI?.country,
    countrycode: userInitialDataFromAPI?.countrycode,
    countrycode_2: userInitialDataFromAPI?.countrycode_2,
    city: userInitialDataFromAPI?.city,
    area: userInitialDataFromAPI?.area,
    address: userInitialDataFromAPI?.address,
    aboutus: userInitialDataFromAPI?.aboutus,
    otheraboutus: userInitialDataFromAPI?.otheraboutus,
    bloggerName: userInitialDataFromAPI?.otheraboutus,
    socialMediaName: userInitialDataFromAPI.otheraboutus
      ? socialMediaName[Number(userInitialDataFromAPI.otheraboutus) - 1]
      : '',
  };
  return userDataStepOne;
};

export const getUserDataStepTwo = userInitialDataFromAPI => {
  const userDataStepTwo = {
    education: userInitialDataFromAPI?.education,
    institute: userInitialDataFromAPI?.institute,
    gradyear: userInitialDataFromAPI?.gradyear,
    major: userInitialDataFromAPI?.major,
    currentlyworking: userInitialDataFromAPI?.currentlyworking,
    yearofteaching: userInitialDataFromAPI?.yearofteaching,
    workingwhere: userInitialDataFromAPI?.workingwhere,
    subjectatdotandline: [],
  };
  return userDataStepTwo;
};

export const getUserDataStepThree = userInitialDataFromAPI => {
  const userDataStepThree = {
    haveLaptop: userInitialDataFromAPI?.haveLaptop,
    stableInternet: userInitialDataFromAPI?.stableInternet,
    hoursperweek: userInitialDataFromAPI?.hoursperweek,
    netSpeed: userInitialDataFromAPI?.netSpeed,
    teachingmedium: userInitialDataFromAPI?.teachingmedium,
  };
  return userDataStepThree;
};

export const getUserDataStepFour = userInitialDataFromAPI => {
  const userDataStepFour = {
    profilepicture: userInitialDataFromAPI?.profilepicture,
    video: userInitialDataFromAPI?.video,
  };
  return userDataStepFour;
};

import {
  BasicCriteria,
  EducationAndWorkExprience,
  PersonalInfoScreenConstant,
  submitApplication,
  VideoAndPicture,
} from '@constants/strings';

export const genderArray = [
  {
    key: 'male',
    text: 'Male',
    id: 1,
  },
  {
    key: 'female',
    text: 'Female',
    id: 2,
  },
  {
    key: 'other',
    text: 'Other',
    id: 3,
  },
];

export const defaultProp = [
  {
    key: 'yes',
    text: 'Yes',
  },
  {
    key: 'no',
    text: 'No',
  },
];

export const BasicCriteriaRadioOptions = [
  {
    key: 'true',
    text: 'Yes',
    id: 1,
  },
  {
    key: 'false',
    text: 'No',
    id: 2,
  },
];

export const HoursPerWeek = [
  {
    label: '1 hour',
    value: '1',
    id: 1,
  },
  {
    label: '2 hours',
    value: '2',
    id: 2,
  },
  {
    label: '3 hours',
    value: '3',
    id: 3,
  },
  {
    label: '4 hours',
    value: '4',
    id: 4,
  },
  {
    label: '5 hours',
    value: '5',
    id: 5,
  },
  {
    label: '6 hours',
    value: '6',
    id: 6,
  },
  {
    label: '7 hours',
    value: '7',
    id: 7,
  },
  {
    label: '8 hours',
    value: '8',
    id: 8,
  },
  {
    label: '9 hours',
    value: '9',
    id: 9,
  },
  {
    label: '10 hours',
    value: '10',
    id: 10,
  },
  {
    label: '11 hours',
    value: '11',
    id: 11,
  },
  {
    label: '12 hours',
    value: '12',
    id: 12,
  },
];

export const preferedMediumOfTeaching = [
  {
    label: 'Online tutor only',
    value: 'Online tutor only',
    id: 1,
  },
  {
    label: 'Home tutor only',
    value: 'Home tutor only',
    id: 2,
  },
  {
    label: 'Online and home tutor',
    value: 'Online and home tutor',
    id: 3,
  },
];

export const highestEducationArray = [
  {
    label: "Matriculation / O'levels",
    value: "Matriculation / O'levels",
    id: 1,
  },
  {
    label: "Intermediate / A'levels",
    value: "Intermediate / A'levels",
    id: 2,
  },
  {
    label: 'Bachelor (2 Years)',
    value: 'Bachelor (2 Years)',
    id: 3,
  },
  {
    label: 'Bachelor (4 Years)',
    value: 'Bachelor (4 Years)',
    id: 4,
  },
  {
    label: 'Masters',
    value: 'Masters',
    id: 5,
  },
  {
    label: 'M. Phill',
    value: 'M. phill',
    id: 6,
  },
  {
    label: 'PHD',
    value: 'Phd',
    id: 7,
  },
];

export const formStepsArray = [
  PersonalInfoScreenConstant.personalInfo,
  EducationAndWorkExprience.heading,
  BasicCriteria.BasicCriteria,
  VideoAndPicture.heading,
  submitApplication.heading,
];

export const bloggerName = [
  'Humna Raza',
  'Shahana Jan',
  'Shehar Bano',
  'Komal',
  'Areesha',
  'Shehzeen',
  'Maham',
];

export const socialMediaName = [
  'Dot & Line Facebook Page',
  'Dot & Line Instagram Page',
  'Other Facebook Page/Group',
  'Other Instagram Profile',
];

export const initialValues = {
  //1st step
  firstname: '',
  lastname: '',
  name: '',
  phoneNumber: '',
  phoneNumberCode: '+92',
  dateofbirth: '',
  gender: '',
  country: '',
  countrycode: '',
  phonecode: '',
  countrycode_2: '',
  city: '',
  area: '',
  address: '',
  aboutus: '',
  otheraboutus: '',
  bloggerName: '',
  socialMediaName: '',

  //2nd step
  education: '',
  institute: '',
  gradyear: '',
  major: '',
  currentlyworking: '',
  yearofteaching: 0,
  workingwhere: '',
  subjectatdotandline: [],

  //3rd step
  haveLaptop: '',
  stableInternet: '',
  hoursperweek: 0,
  netSpeed: '',
  teachingmedium: '',
  personalclass: '',

  //4th step
  profilepicture: '',
  video: '',
};

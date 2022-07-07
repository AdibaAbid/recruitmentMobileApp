import * as Yup from 'yup';
import {
  VALIDATIONS_MESSAGES_PERSONAL_INFO_FORM_STEP_ONE,
  VALIDATIONS_MESSAGES_SIGN_UP_FORM,
} from '@constants/strings';

const Alphabets = /^[A-Za-z ]+$/;
let emailRegx =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const {
  FIRSTNAME_REQUIRED,
  LASTNAME_REQUIRED,
  EMAIL_REQUIRED,
  PHONE_NUMBER_REQUIRED,
  EMAIL_VALIDATION_MESSAGE,
  FULLNAME_VALIDATION_MESSAGE,
  PASSWORD_REQUIRED,
  CONFIRM_PASSWORD,
  NEW_PASSWORD_REQUIRED,
} = VALIDATIONS_MESSAGES_SIGN_UP_FORM;

const {
  CONTACT_NUMBER_REQUIRED,
  DOB_REQUIRED,
  COUNTRY_VALIDATION_MESSAGE,
  CITY_VALIDATION_MESSAGE,
  AREA_VALIDATION_MESSAGE,
  NATIONALITY_VALIDATION_MESSAGE,
  GENDER_VALIDATION_MESSAGE,
  REQUIRED_FIELD,
  HOURS,
  ARRAY_VALIDATION_MESSAGE,
} = VALIDATIONS_MESSAGES_PERSONAL_INFO_FORM_STEP_ONE;

export const signUpFormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required()
    .matches(Alphabets, FULLNAME_VALIDATION_MESSAGE)
    .label(FULLNAME_VALIDATION_MESSAGE),

  email: Yup.string()
    .trim()
    .matches(emailRegx, EMAIL_VALIDATION_MESSAGE)
    .required(EMAIL_REQUIRED),

  number: Yup.string().required(PHONE_NUMBER_REQUIRED),
  // .test(
  //   'no-leading-zero',
  //   'Leading zero is not allowed',
  //   (value, context) => {
  //     return context.originalValue && !context.originalValue.startsWith('0');
  //   },
  // ),

  password: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .matches(/[A-Z]/, 'Password must be at least one uppercase char')
    .matches(
      /[a-zA-Z]+[^a-zA-Z\s]+/,
      'Password must be at least 1 number or special char.',
    )
    .required(PASSWORD_REQUIRED),

  // repassword: Yup.string().oneOf([Yup.ref('password'), null], CONFIRM_PASSWORD),
});

export const forGotPasswordFormSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(emailRegx, EMAIL_VALIDATION_MESSAGE)
    .required(EMAIL_REQUIRED),
});

export const loginFormSchema = Yup.object().shape({
  password: Yup.string().nullable().required(PASSWORD_REQUIRED),
  // .min(8, ({ min }) => `Password must be at least ${min} characters`),
  email: Yup.string()
    .trim()
    // .email(EMAIL_VALIDATION_MESSAGE)
    .matches(emailRegx, EMAIL_VALIDATION_MESSAGE)
    .required(EMAIL_REQUIRED),
});

export const StepOneSchema = Yup.object().shape({
  firstname: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required(FIRSTNAME_REQUIRED)
    .matches(Alphabets, FULLNAME_VALIDATION_MESSAGE)
    .label(FULLNAME_VALIDATION_MESSAGE),
  lastname: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required(LASTNAME_REQUIRED)
    .matches(Alphabets, FULLNAME_VALIDATION_MESSAGE)
    .label(FULLNAME_VALIDATION_MESSAGE),
  phoneNumber: Yup.number().positive().required(CONTACT_NUMBER_REQUIRED),

  dateofbirth: Yup.string().required(DOB_REQUIRED),
  country: Yup.string().required(COUNTRY_VALIDATION_MESSAGE),
  city: Yup.string().required(CITY_VALIDATION_MESSAGE),
  area: Yup.string().required(AREA_VALIDATION_MESSAGE),
  address: Yup.string().required(REQUIRED_FIELD),
  gender: Yup.string().required(GENDER_VALIDATION_MESSAGE),
  aboutus: Yup.string().required(REQUIRED_FIELD),
  otheraboutus: Yup.string()
    .when('aboutus', {
      is: 'Dot & Line Teacher Partner' || 'Influencer' || 'Social media',
      then: Yup.string().required(REQUIRED_FIELD),
    })
    .nullable(),

  bloggerName: Yup.string().when('aboutus', {
    is: 'Influencer',
    then: Yup.string().required(REQUIRED_FIELD),
  }),
  socialMediaName: Yup.string().when('aboutus', {
    is: 'Social media',
    then: Yup.string(),
  }),
});

export const StepTwoSchema = Yup.object().shape({
  education: Yup.string().required(REQUIRED_FIELD),
  institute: Yup.string().required(REQUIRED_FIELD),
  gradyear: Yup.string().required(REQUIRED_FIELD),
  major: Yup.string()
    .trim()
    .matches(Alphabets, FULLNAME_VALIDATION_MESSAGE)
    .required(REQUIRED_FIELD),
  yearofteaching: Yup.number().default(0),
  currentlyworking: Yup.string().required(REQUIRED_FIELD),
  workingwhere: Yup.string()
    .matches(Alphabets, FULLNAME_VALIDATION_MESSAGE)
    .when('currentlyworking', {
      is: 'yes' || 'Yes',
      then: Yup.string().required(REQUIRED_FIELD),
    }),

  subjectatdotandline: Yup.array()
    .min(1, ARRAY_VALIDATION_MESSAGE)
    .required(REQUIRED_FIELD),
});

export const StepThreeSchema = Yup.object().shape({
  haveLaptop: Yup.string().required(REQUIRED_FIELD),
  stableInternet: Yup.string().required(REQUIRED_FIELD),
  hoursperweek: Yup.number().moreThan(0, HOURS).required(REQUIRED_FIELD),
  netSpeed: Yup.string().required(REQUIRED_FIELD),
  teachingmedium: Yup.string().required(REQUIRED_FIELD),
});

export const StepFourSchema = Yup.object().shape({
  profilepicture: Yup.string().required(REQUIRED_FIELD),
  video: Yup.string().required(REQUIRED_FIELD),
});

export const personalInfoStepOneFormSchema = Yup.object().shape({
  firstname: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required(FIRSTNAME_REQUIRED)
    .matches(Alphabets, FULLNAME_VALIDATION_MESSAGE)
    .label(FULLNAME_VALIDATION_MESSAGE),
  lastname: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required(LASTNAME_REQUIRED)
    .matches(Alphabets, FULLNAME_VALIDATION_MESSAGE)
    .label(FULLNAME_VALIDATION_MESSAGE),
  phoneNumber: Yup.number().positive().required(CONTACT_NUMBER_REQUIRED),

  dateofbirth: Yup.string().required(DOB_REQUIRED),
  country: Yup.string().required(COUNTRY_VALIDATION_MESSAGE),
  city: Yup.string().required(CITY_VALIDATION_MESSAGE),
  area: Yup.string().required(AREA_VALIDATION_MESSAGE),
  address: Yup.string().required(REQUIRED_FIELD),
  checkcnic: Yup.string().required(NATIONALITY_VALIDATION_MESSAGE),
  gender: Yup.string().required(GENDER_VALIDATION_MESSAGE),
  aboutus: Yup.string().required(REQUIRED_FIELD),
  otheraboutus: Yup.string()
    .when('aboutus', {
      is:
        'blogger' ||
        'other instagram profile' ||
        'dot & line teacher partner' ||
        'other facebook page/group',
      then: Yup.string().required(REQUIRED_FIELD),
    })
    .nullable(),

  bloggerName: Yup.string().required(REQUIRED_FIELD),
  education: Yup.string().required(REQUIRED_FIELD),
  institute: Yup.string().required(REQUIRED_FIELD),
  gradyear: Yup.string().required(REQUIRED_FIELD),
  major: Yup.string()
    .trim()
    .matches(Alphabets, FULLNAME_VALIDATION_MESSAGE)
    .required(REQUIRED_FIELD),
  currentlyworking: Yup.string().required(REQUIRED_FIELD),
  workingwhere: Yup.string()
    .matches(Alphabets, FULLNAME_VALIDATION_MESSAGE)
    .required(REQUIRED_FIELD),
  subjectatdotandline: Yup.array().required(REQUIRED_FIELD),
  haveLaptop: Yup.string().required(REQUIRED_FIELD),
  stableInternet: Yup.string().required(REQUIRED_FIELD),
  hoursperweek: Yup.number().moreThan(0, HOURS).required(REQUIRED_FIELD),
  netSpeed: Yup.string().required(REQUIRED_FIELD),
  teachingmedium: Yup.string().required(REQUIRED_FIELD),
  personalclass: Yup.number().required(REQUIRED_FIELD),
  profilepicture: Yup.string().required(REQUIRED_FIELD),
  video: Yup.string().required(REQUIRED_FIELD),
});

export const ChangePasswordFormSchema = Yup.object().shape({
  oldpassword: Yup.string()
    .nullable()
    .required(PASSWORD_REQUIRED)
    .min(8, ({ min }) => `Password must be at least ${min} characters`),

  newpassword: Yup.string()
    .nullable()
    .required(NEW_PASSWORD_REQUIRED)
    .min(8, ({ min }) => `Password must be at least ${min} characters`),

  retypenewpassword: Yup.string().oneOf(
    [Yup.ref('newpassword'), null],
    CONFIRM_PASSWORD,
  ),
});

export const newCompalintScreenSchema = Yup.object().shape({
  comments: Yup.string().nullable().required(REQUIRED_FIELD),
});

export const contractSigningValidations = Yup.object().shape({
  contractsign: Yup.object(),
  cnicimagefront: Yup.object(),
  cnicimageback: Yup.object(),
  paymentproof: Yup.object(),
  cv: Yup.object(),
  degreeimg: Yup.object(),
});

import { API_URL } from 'src/recruitment/api/Axios/config';
import {
  COUNTRY_API_URL,
  CITY_PREFIX,
  COUNTRY_API_KEY,
  SUBJECTS_API,
  INSTITUTE_API,
  ABOUT_US_API,
  BLOGGER_NAMES_API,
  BASE_API_URL,
  PHONE_NUMBER_API,
  SOCIAL_MEDIA_API,
  TEACHER_NAME_API,
} from './config';

let headers = new Headers();

headers.append('X-CSCAPI-KEY', COUNTRY_API_KEY);
let requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow',
};

export function fetchCountries() {
  return new Promise(async function (resolve, reject) {
    fetch(`${COUNTRY_API_URL}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => console.log('error', error));
  });
}

export function fetchCities(country) {
  return new Promise(async function (resolve, reject) {
    fetch(`${COUNTRY_API_URL}/${country}/${CITY_PREFIX}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => console.log('error', error));
  });
}

// export function reset(values = []) {
//   return dispatch => {
//     return new Promise(async function (resolve, reject) {
//       values.map(types => {});
//     });
//   };
// }

export function fetchSubjects() {
  return new Promise(async function (resolve, reject) {
    fetch(`${BASE_API_URL}${SUBJECTS_API}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => console.log('error', error));
  });
}

export function fetchInstitue() {
  return new Promise(async function (resolve, reject) {
    fetch(`${API_URL}${INSTITUTE_API}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => console.log('error', error));
  });
}

export function fetchAboutUsAPI() {
  return new Promise(async function (resolve, reject) {
    fetch(`${API_URL}${ABOUT_US_API}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => console.log('error', error));
  });
}

export function fetchBloggerNameAPI() {
  return new Promise(async function (resolve, reject) {
    fetch(`${BASE_API_URL}${BLOGGER_NAMES_API}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => console.log('error', error));
  });
}

export function fetchSocialMediaAPI() {
  return new Promise(async function (resolve, reject) {
    fetch(`${API_URL}${SOCIAL_MEDIA_API}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        resolve(result.data);
      })
      .catch(error => console.log('error', error));
  });
}

export function fetchTeacherNameAPI() {
  return new Promise(async function (resolve, reject) {
    fetch(`${BASE_API_URL}${TEACHER_NAME_API}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        resolve(result.data);
      })
      .catch(error => console.log('error', error));
  });
}

export function fetchPhoneNumberAPI() {
  return new Promise(async function (resolve, reject) {
    fetch(`${BASE_API_URL}${PHONE_NUMBER_API}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => console.log('error', error));
  });
}

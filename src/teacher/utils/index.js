import { useDispatch, useSelector } from 'react-redux';

const toRanges = (values, separator = '\u2013') => {
  return values
    .slice()
    .sort((p, q) => p - q)
    .reduce((acc, cur, idx, src) => {
      if (idx > 0 && cur - src[idx - 1] === 1) {
        acc[acc.length - 1][1] = cur;
      } else {
        acc.push([cur]);
      }
      return acc;
    }, [])
    .map(range => range.join(separator));
};

export const getGrades = grades => {
  if (grades) {
    let sortedGrades = grades.map(grade => {
      if (grade.indexOf('Grade ') !== -1) {
        return grade.slice(grade.indexOf('Grade ') + 6);
      } else {
        return grade;
      }
    });

    let splitGrades = toRanges(sortedGrades);
    return splitGrades.join(', ');
  }
};

export const greetUser = () => {
  const myDate = new Date();
  const hrs = myDate.getHours();

  if (hrs < 12) {
    return 'Good Morning';
  } else if (hrs >= 12 && hrs <= 17) {
    return 'Good Afternoon';
  } else if (hrs >= 17 && hrs <= 20) {
    return 'Good Evening';
  } else {
    return 'Good Night';
  }
};
export const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const monthLong = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export const getFilteredData = data => {
  const obj = {};
  Object.keys(data).forEach(key => {
    if (data[key]) {
      obj[key] = data[key];
    }
  });

  return obj;
};

export const getPackageMode = mode => {
  let demoMode;
  switch (mode) {
    case 'online':
      demoMode = 'ONLINE';
      break;
    case 'student_home':
      demoMode = 'ONSITE';
      break;
    case 'teacher_home':
      demoMode = 'ONSITE';
      break;

    default:
      demoMode = 'ONLINE';
      break;
  }

  return demoMode;
};

export const capitalizeWords = str => {
  const arr = str.split(',');
  return arr
    .map(element => {
      return (
        element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
      );
    })
    .join(', ');
};

export const getSubject = packageItem => {
  const courseType = packageItem.type === 'course';

  if (courseType) {
    return packageItem.course.title;
  } else {
    const subject = packageItem.subjects.map(item => item.subject);
    return subject.join(', ');
  }
};

export const tConvert = time => {
  const time_part_array = time.split(':');
  let ampm = 'AM';

  if (Number(time_part_array[0]) >= 12) {
    ampm = 'PM';
  }
  if (Number(time_part_array[0]) > 12) {
    time_part_array[0] = (Number(time_part_array[0]) - 12).toString();
  }

  const formatted_time =
    time_part_array[0] + ':' + time_part_array[1] + ' ' + ampm;
  return formatted_time;
};

export const getFormattedDate = currentDate => {
  const selectDate = new Date(currentDate)
    .getDate()
    .toString()
    .padStart(2, '0');
  const selectMonth = new Date(currentDate).getMonth() + 1;
  const month = selectMonth.toString().padStart(2, '0');
  const selectYear = new Date(currentDate).getFullYear();

  return {
    todayDate: selectDate,
    month,
    year: selectYear,
  };
};

export function reverseString(str) {
  const splitString = str.split('');
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join('');

  return joinArray;
}

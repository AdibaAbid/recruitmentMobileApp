import * as Yup from 'yup';

export const CreatePackagesValidations = Yup.object().shape({
  program: Yup.string().required('This field is required'),
  grade: Yup.string().required('This field is required'),
  subjects: Yup.string().required('This field is required'),
  teachingMode: Yup.string().required('This field is required'),
  searchDescp: Yup.string().required('This field is required'),
  description: Yup.string().required('This field is required'),
  enrollmentMode: Yup.string().required('This field is required'),
  ageRange: Yup.string().required('This field is required'),
});

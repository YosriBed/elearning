import * as Yup from 'yup';

export const CourseSchema = Yup.object().shape({
  title: Yup.string().required('This field is required'),
  description: Yup.string().required('This field is required'),
  visibility: Yup.string().required('This field is required'),
  resources: Yup.array(),
  questions: Yup.array(),
});

export const questionSchema = Yup.object().shape({
  title: Yup.string().required('This field is required'),
  content: Yup.string().required('This field is required'),
  type: Yup.string().required('This field is required'),
  expectedAnswer: Yup.string(),
  choices: Yup.array(),
});

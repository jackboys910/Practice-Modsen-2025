import * as Yup from 'yup';

export const titleValidationSchema = Yup.string()
  .matches(/^[a-zA-Z0-9\s!@#$%^&*()-_=+[\]{}|;':",.<>/?]*$/, 'Only English letters, numbers, special chars')
  .max(17, 'Title must be at most 18 characters')
  .required('Title is required');

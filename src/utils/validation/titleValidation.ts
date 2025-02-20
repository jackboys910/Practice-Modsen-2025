import * as Yup from 'yup';

export const titleValidationSchema = Yup.string()
  .matches(/^[a-zA-Z0-9\s!@#$%^&*()-_=+[\]{}|;':",.<>/?]*$/, 'Title must contain only English letters, numbers, and special characters')
  .max(17, 'Title must be at most 18 characters');

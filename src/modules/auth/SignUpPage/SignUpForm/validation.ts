import yup, { yupValidate } from 'libs/yup';

export async function validate(values) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Name must contain at least 3 characters')
      .max(20, 'Name must contain a maximum of 20 characters')
      .required('Name is required'),
    surname: yup
      .string()
      .min(3, 'Surname must contain at least 3 characters')
      .max(30, 'Surname must contain a maximum of 30 characters')
      .required('Surname is required'),
    password: yup
      .string()
      .required('Please enter your password')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'Password must contain at least 8 characters, one uppercase, one number and one special case character'
      ),
    confirmPassword: yup
      .string()
      .required('Please confirm your password')
      .oneOf([yup.ref('password'), null], "Passwords don't match"),
    email: yup
      .string()
      .email('Email is not valid')
      .required('Email is required'),
  });

  const errors = await yupValidate(schema, values);
  return errors;
}

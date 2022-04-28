import yup, { yupValidate } from 'libs/yup';

export async function validate(values) {
  const schema = yup.object().shape({
    password: yup.string().required('Please enter your password'),
    email: yup
      .string()
      .email('Email is not valid')
      .required('Email is required'),
  });

  return yupValidate(schema)(values);
}

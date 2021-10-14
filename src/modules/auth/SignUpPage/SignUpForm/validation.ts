import { checkMinMaxLength, pushError } from 'utils/validation';

export function validate(values) {
  const name = checkMinMaxLength(values.name, 3, 18);
  const surname = checkMinMaxLength(values.surname, 3, 18);
  const password = checkMinMaxLength(values.password, 8, 30);
  let email = checkMinMaxLength(values.email, 3, 30);
  let confirmPassword = '';

  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (values.email && !emailRegExp.test(values.email.toLowerCase())) {
    email = 'Email is not valid';
  }

  if (values.password !== values.confirmPassword) {
    confirmPassword = 'Password mismatch';
  }

  return pushError(
    { error: name, field: 'name' },
    { error: surname, field: 'surname' },
    { error: password, field: 'password' },
    { error: email, field: 'email' },
    { error: confirmPassword, field: 'confirmPassword' }
  );
}

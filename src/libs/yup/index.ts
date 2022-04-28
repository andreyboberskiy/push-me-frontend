import * as yup from 'yup';
import { setIn } from 'final-form';

const setInError = (errors, innerError) => {
  return setIn(errors, innerError.path, innerError.message);
};

const emptyObj = Object.create(null);

export const yupValidate = (schema) => {
  return async function validate(values) {
    try {
      await schema.validate(values, { abortEarly: false });
    } catch (err) {
      return err.inner.reduce(setInError, emptyObj);
    }
  };
};

export default yup;

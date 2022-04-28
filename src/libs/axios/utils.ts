import { errorToast } from 'libs/toast/functions';

export const safely = async (fn) => {
  try {
    await fn();
  } catch (e) {
    console.dir(e);
    console.dir(e.generalError);
    errorToast(e.generalError);
  }
};

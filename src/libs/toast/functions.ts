import { toast } from 'react-toastify';

export const errorToast = (message) => {
  toast.error(message);
};
export const successToast = (message) => {
  toast.success(message);
};

export const safely = async (fn) => {
  try {
    await fn();
  } catch (e) {
    console.dir(e.generalError);
    errorToast(e.generalError);
  }
};

import { errorToast } from 'libs/toast/functions';

import { IRequestError } from 'errors/RequestError';

const errorCatcher = async (
  tryFunc,
  customHandler?: (e: IRequestError) => void
) => {
  try {
    await tryFunc();
  } catch (e) {
    if (customHandler) {
      customHandler(e);
    } else {
      errorToast(e.generalError);
    }
  }
};

export default errorCatcher;

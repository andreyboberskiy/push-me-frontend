export interface IRequestError extends Error {
  generalError: string;
  validationErrors: { [key: string]: string };
}

class RequestError extends Error {
  errors = {};

  response: any;

  constructor({ message, response, cancel, ...rest }) {
    super();
    this.response = response;

    Object.keys(rest).forEach((key) => {
      this[key] = rest[key];
    });

    if (response?.data) {
      if (response.data.errors) {
        this.errors = response.data.errors.reduce((acc, item) => {
          acc[item.param] = item.msg;

          return acc;
        }, {});
      }
      if (response.data.validation) {
        this.errors = { ...this.errors, ...response.data.validation };
      }
      if (response.data.message) {
        this.message = response.data.message;
      }
    }
  }

  get generalError() {
    return this.message;
  }

  get validationErrors() {
    return this.errors;
  }
}

export default RequestError;

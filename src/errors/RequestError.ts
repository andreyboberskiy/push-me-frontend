class RequestError extends Error {
  validation = {};

  response: any;

  constructor({ message, response, cancel, ...rest }) {
    super();
    this.response = response;

    Object.keys(rest).forEach((key) => {
      this[key] = rest[key];
    });

    if (response?.data) {
      if (response.data.validation) {
        this.validation = response.data.validation;
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
    return this.validation;
  }
}

export default RequestError;

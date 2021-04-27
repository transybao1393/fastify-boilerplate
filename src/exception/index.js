class HttpException extends Error {
    constructor({
      statusCode = 500,
      defaultMessage = 'Internal Server Error',
      exceptionCode = undefined,
      responseData = undefined,
      message = undefined,
      error = null,
    }) {
      super();
      this.defaultMessage = defaultMessage;
      this.statusCode = statusCode;
      this.exceptionCode = exceptionCode;
      this.message = message;
      this.responseData = responseData;
      this.error = error;
    }
  }
  
module.exports = class CustomException extends HttpException {
    constructor(metadata = {}) {
      super({
        statusCode: metadata.statusCode,
        message: metadata.message,
        ...metadata,
      });
    }
  }
  
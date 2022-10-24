// import http-status-codes
const { StatusCodes } = require("http-status-codes");
// import custom-api
const CustomAPIError = require("./custom-api-error");

class BadRequest extends CustomAPIError {
    constructor(message) {
        super(message);

        // memberikan statusCode bad request
        this.statusCode = StatusCodes.BAD_REQUEST;

        // cek https://www.npmjs.com/package/http-status-codes untuk melihat kode status lainnya ↖
    }
}
module.exports = BadRequest;
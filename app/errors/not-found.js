const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api-error");

class NotFound extends CustomAPIError {
    constructor(message) {
        super(message);

        // memberikan statusCode not found
        this.statusCode = StatusCodes.NOT_FOUND;

        // cek https://www.npmjs.com/package/http-status-codes untuk melihat kode status lainnya ↖
    }
}
module.exports = NotFound;
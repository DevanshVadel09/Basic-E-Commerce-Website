// middleware/errorHandler.js
const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;

    res.status(statusCode);

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "VALIDATION ERROR",
                message: err.message,
                stack: process.env.NODE_ENV === "production" ? null : err.stack,
            });
            break;

        case constants.NOT_FOUND:
            res.json({
                title: "NOT FOUND",
                message: err.message,
                stack: err.stack,
            });
            break;

        case constants.UNAUTHORIZED:
            res.json({
                title: "UNAUTHORIZED",
                message: err.message,
                stack: err.stack,
            });
            break;

        case constants.FORBIDDEN:
            res.json({
                title: "FORBIDDEN",
                message: err.message,
                stack: err.stack,
            });
            break;

        case constants.SERVER_ERROR:
            res.json({
                title: "SERVER ERROR",
                message: err.message,
                stack: err.stack,
            });
            break;

        default:
            res.json({
                title: "ERROR",
                message: err.message,
                stack: err.stack,
            });
            break;
    }
};

module.exports = errorHandler;

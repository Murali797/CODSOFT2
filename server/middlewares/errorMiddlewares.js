const routeNotFound = (req, res, next) => {
    const error = new Error(`Route not Found: ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    let status = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if (err.name === "CastError" && err.kind === "ObjectId") {
        status = 404;
        message = "Resource not Found";
    }

    res.status(status).json({
        message: message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

export { routeNotFound, errorHandler };

// Log de errores
function logErrors (err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}


// Dar formato a los errores
function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

// Dar formato a los errores e identificar su tipo con boom
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler }

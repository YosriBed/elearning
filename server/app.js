const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const config = require('./src/config/config');
const { jwtStrategy } = require('./src/config/passport');
const { authLimiter } = require('./src/middlewares/rateLimiter');
const routes = require('./src/routes');
const { errorConverter, errorHandler } = require('./src/middlewares/error');
const ApiError = require('./src/utils/ApiError');

const app = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

app.use(compression());

app.use(cors());
app.options('*', cors());

app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// limit repeated failed requests to auth endpoints
if (config.env === 'production') {
  app.use('/api/auth', authLimiter);
}

// v1 api routes
app.use('/api', routes);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;

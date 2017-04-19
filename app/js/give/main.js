'use strict';

const express = require('express');
const bodyParser = require('body-parser');

function getModel () {
  return require(`../model-${require('../../config').get('DATA_BACKEND')}`);
}

const router = express.Router();

// Automatically parse request body as form data
router.use(bodyParser.urlencoded({ extended: false }));

// Set Content-Type for all responses for these routes
router.use((req, res, next) => {
  res.set('Content-Type', 'text/html');
  next();
});

/**
 * GET /give
 *
 * Renders the Give dashboard.
 */
router.get('/', (req, res, next) => {
  res.render('give/main.jade', {});
});

/**
 * Errors on "/books/*" routes.
 */
router.use((err, req, res, next) => {
  // Format error and forward to generic error handler for logging and
  // responding to the request
  err.response = err.message;
  next(err);
});

module.exports = router;

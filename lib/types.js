'use strict';

const validator = require('validator');

function isAString(value) {
  return typeof value === 'string' || value instanceof String;
}

function isANumber(value) {
  return typeof value === 'number' || value instanceof Number;
}

function isRequired(value) {
  return !!value;
}

function isAnEmail(value) {
  return validator.isEmail(value);
}

function match(regexp) {
  return value =>
    validator.matches(value, regexp);
}

function isADate(value) {
  return value instanceof Date ||
    (isAString(value) && validator.isDate(value));
}

module.exports = {
  isAString,
  isANumber,
  isRequired,
  match,
  isAnEmail,
  isADate
};
'use strict';

const context = require('../contexts/age-v1.jsonld');
const constants = require('./constants');
const {AGE_CONTEXT_URL, CBORLD_APP_CONTEXT_VALUE} = constants;
const {documentLoader} = require('./documentLoader');

const contexts = new Map();
contexts.set(constants.AGE_CONTEXT_URL, context);

const appContextMap = new Map();
appContextMap.set(AGE_CONTEXT_URL, CBORLD_APP_CONTEXT_VALUE);

module.exports = {
  constants,
  contexts,
  appContextMap,
  documentLoader
};

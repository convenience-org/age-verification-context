'use strict';

const context = require('../contexts/age-v1.jsonld');
const constants = require('./constants');
const {CONTEXT_URL, CBORLD_CODEC_VALUE} = constants;
const {documentLoader} = require('./documentLoader');

const contexts = new Map();
contexts.set(CONTEXT_URL, context);

const appContextMap = new Map();
appContextMap.set(CONTEXT_URL, CBORLD_CODEC_VALUE);

module.exports = {
  constants,
  contexts,
  appContextMap,
  documentLoader
};

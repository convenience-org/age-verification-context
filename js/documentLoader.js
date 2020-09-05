'use strict';

const {AGE_CONTEXT_URL} = require('./constants');
const AGE_CONTEXT = require('../contexts/age-v1.jsonld');

module.exports = {
  documentLoader(url) {
    if(url !== AGE_CONTEXT_URL) {
      throw new Error(`Loading document "${url}" is not allowed.`);
    }

    return {
      contextUrl: null,
      document: AGE_CONTEXT,
      documentUrl: url
    };
  }
};

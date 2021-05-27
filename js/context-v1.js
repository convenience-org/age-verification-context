/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    '@protected': 'true',
    id: '@id',
    type: '@type',

    // Used for several VCs (for issuer display)
    description: 'https://schema.org/description',
    image: 'https://schema.org/image',
    name: 'https://schema.org/name',

    // Used for the PersonalPhotoCredential
    PersonalPhotoCredential:
      'https://convenience.org/vocab#PersonalPhotoCredential',

    // Used for the OverAgeTokenCredential
    concealedIdToken: {
      '@id': 'https://w3id.org/cit#concealedIdToken',
      '@type': 'https://w3id.org/security#multibase'
    },
    overAge: {
      '@id': 'https://w3id.org/age#overAge',
      '@type': 'http://www.w3.org/2001/XMLSchema#positiveInteger'
    },
    OverAgeTokenCredential: {
      '@id': 'https://w3id.org/age#OverAgeTokenCredential',
      '@context': {
        '@protected': true,
        meta: {
          '@id': 'https://w3id.org/cit#meta',
          '@type': 'https://w3id.org/security#multibase'
        },
        payload: {
          '@id': 'https://w3id.org/cit#payload',
          '@type': 'https://w3id.org/security#multibase'
        }
      }
    },

    // Used for the AgeVerificationCredential
    anchoredResource: 'https://convenience.org/vocab#anchoredResource',
    AgeVerificationCredential:
      'https://convenience.org/vocab#AgeVerificationCredential',
    contentHash: 'https://w3id.org/security#contentHash'
  }
};

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
    OverAgeTokenCredential: {
      '@id': 'https://w3id.org/age#OverAgeTokenCredential',
      '@context': {
        '@protected': true,
        overAge: {
          '@id': 'https://w3id.org/age#overAge',
          '@type': 'http://www.w3.org/2001/XMLSchema#positiveInteger'
        },
        concealedIdToken: {
          '@id': 'https://w3id.org/cit#concealedIdToken',
          '@type': 'https://w3id.org/security#multibase'
        }
      }
    },

    AgeVerificationCredential: {
      '@id': 'https://w3id.org/age#AgeVerificationCredential',
      '@context': {
        '@protected': true,
        overAge: {
          '@id': 'https://w3id.org/age#overAge',
          '@type': 'http://www.w3.org/2001/XMLSchema#positiveInteger'
        },
        anchoredResource: 'https://w3id.org/security#anchoredResource',
        contentHash: 'https://w3id.org/security#contentHash',

        // refreshService section of the VC
        // eslint-disable-next-line max-len
        VerifiableCredentialRefreshService2021: 'https://w3id.org/vc-refresh-service#VerifiableCredentialRefreshService2021',
        refreshService:
          'https://w3id.org/vc-refresh-service#refreshService',
        url: {
          '@id': 'https://w3id.org/vc-refresh-service#url',
          '@type': '@id'
        },
        refreshToken: {
          '@id': 'https://w3id.org/vc-refresh-service#refreshToken',
          '@type': 'https://w3id.org/security#multibase'
        }
      }
    }
  },

  AgeVerificationContainerCredential: {
    '@id': 'https://w3id.org/age#AgeVerificationContainerCredential',
    '@context': {
      '@protected': true,
      anchoredResource: 'https://w3id.org/security#anchoredResource',
      contentHash: 'https://w3id.org/security#contentHash'
    }
  }
};

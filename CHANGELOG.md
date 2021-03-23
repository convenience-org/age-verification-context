# @convenience-org/age-verification-context ChangeLog

## 3.0.0 - 

### Changed
- **BREAKING**: Changed CBOR-LD codec value from `0x8743` to `0x16` to match
  the [Registry](https://digitalbazaar.github.io/cbor-ld-spec/#term-codec-registry). Also renamed
  the constant to `CBORLD_CODEC_VALUE`, to match other context repos.
- **BREAKING**: Renamed exported url constant from `AGE_CONTEXT_URL` to `CONTEXT_URL`, to match
  other repos.

## 2.0.1 - 2020-10-22

### Fixed
- Add `appContextMap` and `documentLoader` to named rollup exports.

## 2.0.0 - 2020-09-30

### Changed
- **BREAKING**: Rename `ageOver` property to `overAge`.

## 1.0.0 - 2020-09-09

Initial version.

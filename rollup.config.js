import commonjs from 'rollup-plugin-commonjs';

export default {
  // Input is created by webpack in previous build step, in CommonJS format.
  input: 'dist/context.js',
  output: {
    file: 'dist/context.esm.js',
    format: 'esm'
  },
  plugins: [
    commonjs({
      // explicitly list exports otherwise only have 'default'
      namedExports: {
        'dist/context.js': [
          'constants',
          'contexts',
          'CONTEXT_URL_V1',
          'CONTEXT_V1'
        ]
      }
    })
  ]
};

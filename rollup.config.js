const commonjs = require('@rollup/plugin-commonjs');

const pkg = require('./package.json');

module.exports = {
  input: 'lib/main.js',
  external: ['atom', 'fs', 'path', ...Object.keys(pkg.dependencies)],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    commonjs({
      requireReturnsDefault: "auto",
    }),
  ],
};

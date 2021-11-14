const lernaAlias = require('lerna-alias');

module.exports = {
  jest: options => {
    const aliases = lernaAlias.jest(options);
    return aliases;
  },
  rollup: options => {
    const aliases = lernaAlias.rollup(options);
    return aliases;
  },
  webpack: options => {
    const aliases = lernaAlias.webpack(options);
    return aliases;
  },
};

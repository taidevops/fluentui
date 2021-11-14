// @ts-check
const lernaAlias = require('../lernaAliasNorthstar');
const findGitRoot = require('../monorepo/findGitRoot');

module.exports = customConfig => ({
  ...customConfig,
  moduleNameMapper: {
    ...lernaAlias.jest({
      directory: findGitRoot(),
    }),
    ...customConfig.moduleNameMapper,
  },
});

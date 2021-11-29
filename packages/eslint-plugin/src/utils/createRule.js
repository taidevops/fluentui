const { ESLintUtils } = require('@typescript-eslint/experimental-utils');

module.exports = ESLintUtils.RuleCreator(
  name => `https://github.com/taidevops/taiui/blob/master/packages/eslint-plugin/README.md#${name}`,
);

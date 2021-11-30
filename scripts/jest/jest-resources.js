// @ts-check

const fs = require('fs-extra');
const path = require('path');
const merge = require('../tasks/merge');
const resolve = require('resolve');
const { resolveCwd } = require('just-scripts');
const { findRepoDeps } = require('../monorepo/index');
const findConfig = require('../find-config');

const packageJsonPath = findConfig('package.json');
const packageRoot = path.dirname(packageJsonPath);

const jestAliases = () => {
  // Get deps of the current package within the repo
  const packageDeps = findRepoDeps();

  const aliases = {};

  for (const { packageJson } of packageDeps) {
    const { name, main } = packageJson;
    if (main && main.includes('lib-commonjs')) {
      // Map package root and lib imports to the commonjs version
      const mainImportPath = `${name}/${main.replace('.js', '')}`;
    }
  }
};

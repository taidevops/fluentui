import * as path from 'path';
import * as _ from 'lodash';
import * as webpack from 'webpack';

// ------------------------------------
// Environment vars
// ------------------------------------
const env = process.env.NODE_ENV || 'development';
const __DEV__ = env === 'development';
const __PERF__ = !!process.env.PERF;
const __PROD__ = env === 'production';
let __BASENAME__ = process.env.DEPLOYBASEPATH
  ? // This needs a trailing slash or images won't work.
    // The path is different for standard PR deploy and screener deploy.
    `/${process.env.DEPLOYBASEPATH}/${process.env.SCREENER_BUILD ? 'react-northstar-screener' : 'react-northstar'}/`
  : '/';

if (process.env.OFFICIALRELEASE) {
  __BASENAME__ = `/${process.env.DEPLOYBASEPATH}/`;
}

const __SKIP_ERRORS__ = !!process.env.SKIP_ERRORS;

const envConfig = {
  env,

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base: path.resolve(__dirname, '..'),
  dir_build: 'scripts',
};

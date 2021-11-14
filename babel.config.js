module.exports = api => ({
  ...require('@tai-ui/scripts/babel')(api),
  babelrcRoots: ['./packages/*'],
});

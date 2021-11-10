module.exports = (api) => {
  const presets = [
    [
      "@babel/preset-env",
      {
        loose: true,
        modules: false,
        targets: undefined,
        exclude: [],
      },
    ],
  ];
  return {
    presets,
  };
};

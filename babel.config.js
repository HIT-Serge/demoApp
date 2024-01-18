module.exports = function (api) {
  api.cache.invalidate(() => process.env.NODE_ENV)
  const presets = ['babel-preset-expo'];
  const plugins = [

    'react-native-reanimated/plugin'
  ];
  return {
    presets,
    plugins
  }
}
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          screens: './src/screens',
          components: './src/components',
          constants: './src/constants',
          assets: './src/assets',
          utils: './src/utils',
          services: './src/services',
          styles: './src/styles',
          theme: './src/theme',
        },
      },
    ],
  ],
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/recruitment/components',
          '@screens': './src/recruitment/screens',
          '@images': './src/recruitment/assets/images',
          '@assets': './src/recruitment/assets',
          '@context': './src/recruitment/context',
          '@styles': './src/recruitment/styles',
          '@utils': './src/recruitment/utils',
          '@constants': './src/recruitment/constants',
          '@navigation': './src/navigation',
          '@api': './src/recruitment/api',
          '@teacher': './src/teacher/components',
          '@teacher/constants/': 'src/teacher/constants',
          '@teacher/globals/': 'src/teacher/globals',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};

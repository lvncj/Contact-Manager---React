const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@config': path.resolve(__dirname, './src/config'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@reducer': path.resolve(__dirname, './src/reducer'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@globalTypes': path.resolve(__dirname, './src/types'),
    },
  },
};
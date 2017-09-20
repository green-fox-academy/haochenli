const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module:{
    loaders:[
      {
        test:/\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }

};


module.exports = {
  entry: './index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
	test: /\.jsx?$/,
	exclude: /node_modules/,
	loader: 'babel',
	query: {
	  presets: ['es2015', 'react'],
    plugins: ["transform-object-rest-spread"]
        }
      },
    ]
  }
}

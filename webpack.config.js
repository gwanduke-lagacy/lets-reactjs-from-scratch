const path = require('path');
const webpack = require('webpack');

module.exports = {
  // 어플리케이션의 엔트리 포인트. 여기서부터 번들링을 시작한다.
  entry: './src/index.tsx',
  mode: 'development',
  // 어떻게 JavaScript 모듈들이 변형되는지 명시한다. rules 안의 규칙에 따른다.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      // ES6, JSX 구문 transform에 대한 규칙
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // === use: ['babel-loader']
        options: {
          // env 프리셋을 사용함을 명시
          presets: ['@babel/env']
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      // CSS transform에 대한 규칙
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // Webpack이 어떤 확장자를 resolve할지 지정.
  // 이는 모듈 import시 확장자 생략을 가능하게 해준다.
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  // 최종적으로 번들링된 파일을 어디에 위치 시킬지 지정
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist',
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

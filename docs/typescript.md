# 타입스크립트 세팅

- `yarn global add typescript`
- tsconfig.json 파일 세팅

  ```json
  {
    "compilerOptions": {
      "target": "es6",
      "jsx": "react",
      "module": "commonjs"
    },
    "exclude": ["node_modules"]
  }
  ```

  - target: JavaScript engine이 `es6` 대상으로 세팅됨.
  - module: module은 `CommonJS`로 세팅
  - jsx: jsx 파일이 react 대상임을 알려줌

- `yarn add ts-loader`
- 웹팩 설정

  ```js
  var path = require("path");

  var config = {
    entry: ["./app.tsx"],
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },

    module: {
      loaders: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/
        }
      ]
    }
  };

  module.exports = config;
  ```

const path = require("path");
module.exports = {
  // Webpack 의 모드를 설정
  mode: "development",
  // 엔트리 포인트는 Webpack 에게 번들링을 시작할 애플리케이션의 시작점을 지정해 줌
  entry: "./src/index.ts",
  // webpack.config.js 파일 내의 Webpack 에게 해당 소스 맵을 추출해 최종 번들에 포함하라고 지시
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
  // 배열이 될 rules 프로퍼티가 포함되며, 여러 개의 규칙을 추가
  module: {
    rules: [
      {
        // $는 문자열의 끝을 의미, ?는 앞의 문자가 있거나 없거나를 의미
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
  },
};

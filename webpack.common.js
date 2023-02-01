const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const { ProvidePlugin, DefinePlugin } = require("webpack");
const dotenv = require('dotenv');
dotenv.config();  //.env 파일 파싱한 객체 리턴되어 process.env로 세팅

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@helper': path.resolve(__dirname, 'src/helper'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@models': path.resolve(__dirname, 'src/models'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {noEmit: false},
            }
          }
        ],
      },
      {
        test: /\.(gif|svg|jpg|png|jpeg)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /.css?$/,
        exclude: [],
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
    new CleanWebpackPlugin(),
    new ProvidePlugin({
      process: 'process/browser.js',
    })
  ],
};

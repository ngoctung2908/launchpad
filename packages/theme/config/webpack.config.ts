import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import {
  isDevelopmentMode,
  isStagingMode,
  isProductionMode,
  mergerWithSharedConfig,
  openBrowserWhenDevServerStarted,
} from '@fx/webpack';

import paths from './paths';

export const outputs = {
  script: {
    path: paths.dist,
    filename: '[name].js',
    library: '[name]',
  },
  dll: {
    path: paths.distBase,
    filename: '[name].dll.js',
    library: '[name]',
  },
};

export default (env: unknown, argv: unknown) => {
  const config: Configuration = {
    entry: {
      app: ['./src/index.tsx'],
      loading: ['./src/styles/loading.scss'],
      theme: ['./src/styles/base/index.scss'],
      demo: ['./src/styles/demo/index.scss'],
    },
    output: outputs.script,
    plugins: [
      ...(isDevelopmentMode
        ? []
        : [
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin({
              patterns: [
                {
                  from: paths.public,
                  to: './',
                  noErrorOnMissing: true,
                },
              ],
            }),
          ]),
      new HtmlWebpackPlugin({
        template: path.join(paths.src, 'template', 'index.ejs'),
        inject: 'body',
        scriptLoading: 'defer',
        templateParameters: {
          title: 'Loading, please wait...',
          loadingMessage: 'Loading, please wait...',
        },
      }),
    ],
    devServer: {
      static: paths.dist,
      historyApiFallback: true, // true for index.html upon 404, object for multiple paths
      port: 4000,
      https: false, // true for self-signed, object for cert authority
      hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
      // compress: true, // enable gzip compression
      // noInfo: true, // only errors & warns on hot reload
      client: {
        progress: true,
      },
      devMiddleware: {
        index: true,
        writeToDisk: isProductionMode || isStagingMode,
      },
      onListening: openBrowserWhenDevServerStarted,
    },
  };

  return mergerWithSharedConfig(config, env, argv);
};

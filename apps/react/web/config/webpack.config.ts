import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import {
  isDevelopmentMode,
  isStagingMode,
  isProductionMode,
  UpdateHashHtmlWebpackPlugin,
  mergerWithSharedConfig,
  openBrowserWhenDevServerStarted,
} from '@fx/webpack';

import paths from './paths';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const outputs =
  isStagingMode || isProductionMode
    ? {
        script: {
          path: paths.dist,
          filename: '[name].[fullhash].js',
          library: '[name]_[fullhash]',
          publicPath: '/',
        },
        dll: {
          path: paths.distBase,
          filename: '[name].[fullhash].dll.js',
          library: '[name]_[fullhash]',
        },
      }
    : {
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
    },
    resolve: {
      fallback: {
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer'),
        crypto: false,
        http: false,
        https: false,
        os: false,
      },
    },
    output: outputs.script,
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!base/**'],
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: paths.public,
            to: paths.dist,
            noErrorOnMissing: true,
          },
        ],
      }),
      new webpack.DllReferencePlugin({
        manifest: require('../lib/base/vendor-manifest.json'),
      }),
      ...(isDevelopmentMode
        ? [
            new HtmlWebpackPlugin({
              template: path.join(paths.src, 'template', 'index.ejs'),
              inject: 'body',
              scriptLoading: 'defer',
              templateParameters: {
                title: 'Loading, please wait...',
                loadingMessage: 'Loading, please wait...',
              },
            }),
          ]
        : [
            new HtmlWebpackPlugin({
              filename: './index.html',
              template: path.join(paths.src, 'template', 'index.prod.ejs'),
              inject: false,
              minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
              },
              templateParameters: {
                title: 'Loading, please wait...',
                loadingMessage: 'Loading, please wait...',
              },
            }),
            new UpdateHashHtmlWebpackPlugin({
              dirPaths: [paths.distBase],
              js: ['vendor.*.dll.js', 'main.*.js'],
              css: ['loading.*.css', 'vendor.*.css', 'base-theme.*.css', 'main.*.css'],
            }),
          ]),
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

  return mergerWithSharedConfig({ config, env, argv, paths });
};

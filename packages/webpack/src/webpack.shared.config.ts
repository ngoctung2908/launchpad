import path from 'path';
import toml from 'toml';
import yaml from 'yamljs';
import json5 from 'json5';

import { Configuration, HotModuleReplacementPlugin } from 'webpack';
import { merge } from 'webpack-merge';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import { pathOr } from 'ramda';

import { isStagingMode, isProductionMode, isDevelopmentMode, getWebpackModeByNodeEnv } from './helpers';

export const mergerWithSharedConfig: (params: {
  config: Configuration;
  env: unknown;
  argv: unknown;
  paths: { root: string; [key: string]: string };
}) => any = ({ config, env, argv, paths }): Configuration => {
  console.log('env', env);
  console.log('argv', argv);

  const isDevServer = pathOr(false, ['env', 'WEBPACK_SERVE'], argv);

  const outputs =
    (isStagingMode || isProductionMode) && !process.env.EXTRACT_CSS_WITHOUT_HASH
      ? {
          style: {
            filename: '[name].[fullhash].css',
            chunkFilename: '[id].[fullhash].css',
          },
        }
      : {
          style: {
            filename: '[name].css',
            chunkFilename: '[id].css',
          },
        };

  const rules = [
    {
      test: /\.(ts|js)x?$/i,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        },
      },
    },
    {
      test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.woff$|\.woff2$|\.ttf$|\.otf$|\.eot$|\.wav$|\.mp3$/i,
      use: ['file-loader?name=[name].[ext]'],
    },
    {
      test: /\.svg$/i,
      use: [
        {
          loader: 'svg-url-loader',
          options: {
            // make all svg images to work in IE
            iesafe: true,
            // make loader to behave like url-loader, for all svg files
            encoding: 'base64',
            // Inline files smaller than 10 kB
            limit: 10 * 1024,
            noquotes: true,
          },
        },
      ],
    },
    {
      test: /\.(mp4|webm)$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    },
    {
      test: /\.xml$/i,
      use: ['xml-loader'],
    },
    {
      test: /\.toml$/i,
      type: 'json',
      parser: {
        parse: toml.parse,
      },
    },
    {
      test: /\.yaml$/i,
      type: 'json',
      parser: {
        parse: yaml.parse,
      },
    },
    {
      test: /\.json5?$/i,
      type: 'json',
      parser: {
        parse: json5.parse,
      },
    },
    {
      test: /\.(c|sa|sc)ss$/i,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '',
          },
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: isDevelopmentMode,
            importLoaders: 3,
            modules: {
              auto: true,
            },
            url: false,
          },
        },
        {
          loader: 'resolve-url-loader',
          options: { sourceMap: isDevelopmentMode },
        },
        { loader: 'postcss-loader', options: { sourceMap: true } },
        { loader: 'sass-loader', options: { sourceMap: isDevelopmentMode } },
      ],
    },
  ];

  const optimization = {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
  };

  const plugins = [
    new Dotenv({
      path: path.join(paths.root, 'config', 'env', `.env.${getWebpackModeByNodeEnv()}`),
    }),
    new MiniCssExtractPlugin(
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      outputs.style
    ),
    ...(isDevServer ? [new HotModuleReplacementPlugin()] : []),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ];

  const resolve = {
    extensions: ['.html', '.htm', '.sass', '.scss', '.css', '.tsx', '.ts', 'jsx', '.js', '.json', '.json5'],
  };

  const sharedConfig: Configuration = {
    ...(isProductionMode || isStagingMode
      ? {
          mode: 'production',
          optimization,
        }
      : {
          mode: 'development',
        }),
    target: ['web', 'es5'],
    resolve,
    plugins,
    module: {
      rules,
    },
  };

  return merge(sharedConfig, config);
};

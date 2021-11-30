import path from 'path';
import webpack, { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { mergerWithSharedConfig } from '@fx/webpack';

import paths from './paths';
import { outputs } from './webpack.config';

export default (env: unknown, argv: unknown) => {
  const entry = {
    vendor: [
      // support old browser, IE
      'core-js',

      // // js
      // // plugins
      // 'clsx',

      // react-all
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'react-helmet',

      // // style
      // 'animate.css',
      './src/bitcityz/style/bootstrap.scss',
    ],
    loading: ['@fx/theme/src/styles/loading.scss'],
  };

  const plugins = [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(paths.distBase, '[name]-manifest.json'),
      name: outputs.dll.library,
    }),
  ];

  const config: Configuration = {
    entry,
    output: outputs.dll,
    plugins,
  };
  return mergerWithSharedConfig(config, env, argv);
};

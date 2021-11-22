import WebpackDevServer from 'webpack-dev-server';
import openBrowser from 'react-dev-utils/openBrowser';

const openBrowserWhenDevServerStarted = (devServer: WebpackDevServer): void => {
  if (!devServer) {
    throw new Error('webpack-dev-server is not defined');
  }
  const options = (devServer as any).options as WebpackDevServer.Configuration;
  const devUrl = `${options.https ? 'https' : 'http'}://localhost:${options.port}`;
  if (openBrowser(devUrl)) return;
  console.log(`The browser tab has been opened at: ${devUrl}`);
};

export default openBrowserWhenDevServerStarted;

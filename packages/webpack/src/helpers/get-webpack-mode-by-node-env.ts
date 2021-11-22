import isDevelopmentMode from './is-development-mode';
import isStagingMode from './is-staging-mode';
import isProductionMode from './is-production-mode';

const getWebpackModeByNodeEnv = (): 'development' | 'staging' | 'production' | 'none' =>
  isDevelopmentMode ? 'development' : isStagingMode ? 'staging' : isProductionMode ? 'production' : 'none';

export default getWebpackModeByNodeEnv;

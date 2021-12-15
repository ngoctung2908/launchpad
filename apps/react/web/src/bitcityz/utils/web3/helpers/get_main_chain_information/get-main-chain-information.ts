import { getAppEnv } from './../../../config/get-app-env';
import { testMainChain } from './test-main-chain';
import { productionMainChain } from './production-main-chain';

export const getMainChainInformation = (): any => {
  if (getAppEnv() === 'develop') {
    return testMainChain;
  } else {
    return productionMainChain;
  }
};

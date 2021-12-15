import { AsyncFunction } from '../../types/index';
import Web3 from 'web3';
import { WalletType } from './wallet-type';

const web3Instances: {
  [WalletType.Metamask]?: Web3;
  [WalletType.Binance]?: Web3;
} = {};

export const getWeb3Instance = async (walletType: WalletType, provider?: any, waitForProviderEnable?: AsyncFunction) => {
  console.log('provider', provider);

  let web3Instance = web3Instances[walletType];
  if (web3Instance !== undefined) {
    web3Instances[walletType] = web3Instance = new Web3(web3Instance.currentProvider);
    return { web3Instance };
  } else if (provider) {
    try {
      if (waitForProviderEnable) await waitForProviderEnable()

      web3Instances[walletType] = web3Instance = new Web3(provider);
      return { web3Instance };
    } catch (error: any) {
      console.log('error', error);
      return { error, status: false, message: 'Unknow provider' };
    }
  }
  return { status: false, message: 'Unknow provider' };
};

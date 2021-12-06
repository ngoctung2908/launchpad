import Web3 from 'web3';
import { WalletType } from '../helpers/wallet-type';
import { addEvent } from '../helpers/add-event';
import { checkMetamaskChain } from '../helpers/check-metamask-chain';
import { saveConnected } from '../helpers/save-connection';

export const connectMetaMaskWallet = async () => {
  const metamask = window.ethereum && window.ethereum.isMetaMask;
  if (!metamask) {
    return { status: false, message: 'Please install MetaMask wallet!' };
  }

  if (window.ethereum) {
    try {
      await window.ethereum.enable();
      addEvent(window.ethereum);

      window.web3 = new Web3(window.ethereum);
      const result = await checkMetamaskChain();
      await saveConnected(WalletType.Metamask);
      return result;
    } catch (error: any) {
      return { error: error, status: false, message: 'Unknow provider' };
    }
  } else if (typeof window.web3 !== 'undefined') {
    window.web3 = new Web3(window.web3.currentProvider);
  }
};

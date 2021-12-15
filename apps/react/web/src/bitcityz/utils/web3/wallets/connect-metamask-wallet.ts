import { addEventMetamask } from './../helpers/add-event-metamask';
import { WalletType } from '../helpers/wallet-type';
import { checkMetamaskChain } from '../helpers/check-metamask-chain';
import { saveConnected } from '../helpers/save-connection';
import { getWeb3Instance } from '../helpers';

export const connectMetaMaskWallet = async () => {
  const metamask = window.ethereum && window.ethereum.isMetaMask;
  if (!metamask) {
    return { status: false, message: 'Please install MetaMask wallet!' };
  }

  const { web3Instance, ...result } = await getWeb3Instance(WalletType.Metamask, window.ethereum, () =>
    window.ethereum.request({ method: 'eth_requestAccounts' })
  );

  if (web3Instance) {
    addEventMetamask(web3Instance, window.ethereum);
    const result2 = await checkMetamaskChain(web3Instance);
    await saveConnected(web3Instance, WalletType.Metamask);
    return result2;
  }
  return result;
};

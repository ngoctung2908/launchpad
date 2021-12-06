import { sessionStorageKey } from './constance';

export const disconnectWallet = async () => {
  try {
    window.account = null;
    sessionStorage.removeItem(sessionStorageKey);
    if (window.web3) await window.web3.eth.currentProvider.disconnect();
  } catch {}
};

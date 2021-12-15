import { sessionStorageKey } from './constance';

export const disconnectWallet = () => {
  try {
    window.account = null;
    sessionStorage.removeItem(sessionStorageKey);
  } catch {}
};

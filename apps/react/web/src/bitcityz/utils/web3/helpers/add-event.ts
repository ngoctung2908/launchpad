import { disconnectWallet } from "./disconnect-wallet";
import { getMainChainInformation } from "./get_main_chain_information";
import { switchAccount } from "./switch-account";

export const addEvent = (provider: any) => {
  if (provider) {
    provider.on('accountsChanged', () => {
      switchAccount();
    });
    provider.on('chainChanged', (chainId: any) => {
      const expectedChainId = getMainChainInformation().chainId;
      if (chainId != expectedChainId) disconnectWallet();
    });
    provider.on('networkChanged', (chainId: any) => {
      const expectedChainId = getMainChainInformation().chainId;
      if (chainId != expectedChainId) disconnectWallet();
    });
  }
};
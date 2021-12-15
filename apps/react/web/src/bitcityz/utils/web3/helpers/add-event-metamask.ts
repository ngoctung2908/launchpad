import Web3 from "web3";
import { disconnectWallet } from "./disconnect-wallet";
import { getMainChainInformation } from "./get_main_chain_information";
import { switchAccount } from "./switch-account";

export const addEventMetamask = (we3Instance: Web3, provider: any) => {
  if (provider) {
    provider.on('accountsChanged', () => {
      switchAccount(we3Instance);
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
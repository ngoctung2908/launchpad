import Web3 from 'web3';
import { saveConnected } from './save-connection';

export const switchAccount = (web3Instance: Web3) => {
  if (!window.account) return;
  saveConnected(web3Instance, window.account.type);
};

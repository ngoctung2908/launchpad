import { WalletAccount } from './wallet-account';
import { sessionStorageKey } from './constance';
import { getBalanceBtcY } from './get_balance/get-balance-btcy';
import { getBalanceBtcZ } from './get_balance/get-balance-btcz';
import { getBalanceUsdt } from './get_balance/get-balance-usdt';
import { WalletType } from './wallet-type';
import { shortAddress } from './short-address';
import { getCurrentAccount } from './get-current-account';
import Web3 from 'web3';

export const saveConnected = async (web3Instance: Web3, type: WalletType) => {
  const address = await getCurrentAccount(web3Instance);
  if (address !== null) {
    const [usdt, btcy, btcz] = await Promise.all([
      getBalanceUsdt(web3Instance, address),
      getBalanceBtcY(web3Instance, address),
      getBalanceBtcZ(web3Instance, address),
    ]);
    const account: WalletAccount = {
      type,
      address,
      usdt,
      btcy,
      btcz,
      shortAddress: shortAddress(address),
    };
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(account));
    window.account = account;
  }
};

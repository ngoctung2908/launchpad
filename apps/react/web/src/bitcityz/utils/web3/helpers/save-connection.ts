import { WalletAccount } from "./wallet-account";
import { sessionStorageKey } from "./constance";
import { getBalanceBtcY } from "./get_balance/get-balance-btcy";
import { getBalanceBtcZ } from "./get_balance/get-balance-btcz";
import { getBalanceUsdt } from "./get_balance/get-balance-usdt";
import { WalletType } from "./wallet-type";
import { shortAddress } from "./short-address";
import { getCurrentAccount } from "./get-current-account";

export const saveConnected = async (type: WalletType) => {
  const address: string = await getCurrentAccount();
  if (address) {
      const account: WalletAccount = {
          type: type,
          address: address,
          usdt: await getBalanceUsdt(address),
          btcy: await getBalanceBtcY(address),
          btcz: await getBalanceBtcZ(address),
          shortAddress: shortAddress(address),
      };
      sessionStorage.setItem(sessionStorageKey, JSON.stringify(account));
      window.account = account;
  }
}
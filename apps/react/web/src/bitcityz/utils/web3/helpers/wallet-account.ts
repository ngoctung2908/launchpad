import { WalletType } from './wallet-type';

export interface WalletAccount {
  usdt: number;
  btcy: number;
  btcz: number;
  address: string;
  type: WalletType;
  shortAddress: string;
}

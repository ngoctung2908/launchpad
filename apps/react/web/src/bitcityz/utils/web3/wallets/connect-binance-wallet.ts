import { WalletType } from '../helpers/wallet-type';
import { addEventBinance } from '../helpers/add-event-binace';
import { saveConnected } from '../helpers/save-connection';
import { getWeb3Instance } from '../helpers';
import { checkBinanceChain } from '../helpers/check-binance-chain';

export const connectBinanceWallet = async () => {
  const binanceProvider = window.BinanceChain;
  if (!binanceProvider) {
    return { status: false, message: 'Please install Binance wallet!' };
  }

  const { web3Instance, ...result } = await getWeb3Instance(
    WalletType.Binance,
    binanceProvider,
    binanceProvider.enable
  );

  if (web3Instance) {
    addEventBinance(web3Instance, binanceProvider);
    const result2 = await checkBinanceChain();
    await saveConnected(web3Instance, WalletType.Binance);
    return result2;
  }
  return result;
};

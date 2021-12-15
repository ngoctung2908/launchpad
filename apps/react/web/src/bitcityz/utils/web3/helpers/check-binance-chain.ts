import { getMainChainInformation } from "./get_main_chain_information";

export const checkBinanceChain = async () => {
  let result: any;
  const chainId = await window.BinanceChain.chainId;
  const mainChainInformation = getMainChainInformation()
  const providerNetworkOption = mainChainInformation.providerNetworkOption;
  const expectedChainId = mainChainInformation.chainId;
  const expectedChainOtherId = providerNetworkOption.chainId;
  if (chainId !== expectedChainId && chainId != expectedChainOtherId) {
    // add chain into MetaMask
    result = await window.BinanceChain.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: providerNetworkOption.chainId, // A 0x-prefixed hexadecimal string
          chainName: providerNetworkOption.chainName,
          nativeCurrency: {
            name: providerNetworkOption.nativeCurrency.name,
            symbol: providerNetworkOption.nativeCurrency.symbol, // 2-6 characters long
            decimals: 18,
          },
          rpcUrls: providerNetworkOption.rpcUrls,
          blockExplorerUrls: providerNetworkOption.blockExplorerUrls,
        },
      ],
    })
      .then(() => {
        return { status: true };
      })
      .catch((err: any) => {
        if (err && err.code == -32002) {
          return {
            error: err,
            status: false,
            message: 'Add chain is pending, please confirm on wallet',
          };
        }
        return { error: err, status: false, message: 'Unknow provider' };
      });
  } else result = { status: true };
  return result;
};
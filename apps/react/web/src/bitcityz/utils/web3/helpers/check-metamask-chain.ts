import { getMainChainInformation } from './get_main_chain_information';

export const checkMetamaskChain = async (web3Instance: any) => {
  let result: any;
  const chainId = await web3Instance.eth.getChainId();
  const mainChainInformation = getMainChainInformation();
  const expectedChainId = mainChainInformation.chainId;

  if (chainId !== expectedChainId) {
    const { providerNetworkOption } = mainChainInformation;
    // switch MetaMask chain into expected chain
    result = await window.ethereum
      .request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: providerNetworkOption.chainId }],
      })
      .then(() => {
        return { status: true };
      })
      .catch(async (err: any) => {
        if (err.code == 4902) {
          return await window.ethereum
            .request({
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
        } else {
          return {
            error: err,
            status: false,
            message: 'Switch chain is pending, please confirm on wallet',
          };
        }
      });
  } else result = { status: true };
  return result;
};

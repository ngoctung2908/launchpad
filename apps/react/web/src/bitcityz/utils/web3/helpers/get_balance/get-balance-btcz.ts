import { getMainChainInformation } from '../get_main_chain_information';
import { getBalance } from './get-balance';

export const getBalanceBtcZ = async (address?: string) => {
  const chain = getMainChainInformation();
  return chain && getBalance(chain.bctz.contract, address);
};

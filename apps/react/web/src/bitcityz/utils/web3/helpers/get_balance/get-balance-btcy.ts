import { getMainChainInformation } from "../get_main_chain_information";
import { getBalance } from "./get-balance";

export const getBalanceBtcY = async (address?: string) => {
  const chain = getMainChainInformation();
  return chain && getBalance(chain.bcty.contract, address);
};
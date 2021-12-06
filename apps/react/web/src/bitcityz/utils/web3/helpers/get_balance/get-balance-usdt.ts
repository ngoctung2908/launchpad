import { getMainChainInformation } from "../get_main_chain_information";
import { getBalance } from "./get-balance";

export const getBalanceUsdt = async (address?: string) => {
  const chain = getMainChainInformation();
  return chain && getBalance(chain.usdt.contract, address);
};
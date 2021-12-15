import Web3 from "web3";
import { getMainChainInformation } from "../get_main_chain_information";
import { getBalance } from "./get-balance";

export const getBalanceUsdt = async (web3Instance: Web3, address: string) => {
  const chain = getMainChainInformation();
  return chain && getBalance(web3Instance, chain.usdt.contract, address);
};
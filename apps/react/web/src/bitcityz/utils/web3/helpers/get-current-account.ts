import Web3 from "web3";
import { requestAccounts } from "./request-accounts";

export const getCurrentAccount = async (web3Instance: Web3) => {
    if (!web3Instance) {
        return null;
    }
    const accounts = await requestAccounts(web3Instance);
    return accounts && accounts[0];
}
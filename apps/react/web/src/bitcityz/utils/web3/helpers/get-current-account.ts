import { getAccounts } from "./get-account";

export const getCurrentAccount = async () => {
    if (!window.web3) {
        return null;
    }
    const accounts = await getAccounts();
    return accounts && accounts[0];
}
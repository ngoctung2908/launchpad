import Web3 from "web3";

export const requestAccounts = async (web3Instance: Web3) => {
  if (!web3Instance) {
    console.log('requestAccounts web3Instance', web3Instance);
    
    return Promise.resolve(null);
  }
  return await web3Instance.eth.requestAccounts();
};

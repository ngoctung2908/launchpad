export const getAccounts = async () => {
  if (!window.web3) {
    return null;
  }
  return await window.web3.eth.requestAccounts();
};

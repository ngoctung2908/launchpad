import { getCurrentAccount as getCurrentAccount } from '../get-current-account';

export const getBalance = async (contractAddress: string, address?: string) => {
  const minABI = [
    // balanceOf
    {
      constant: true,
      inputs: [{ name: '_owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: 'balance', type: 'uint256' }],
      type: 'function',
    },
    // decimals
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ name: '', type: 'uint8' }],
      type: 'function',
    },
  ];
  if (!address) {
    address = await getCurrentAccount();
  }
  if (address) {
    const contract = new window.web3.eth.Contract(minABI, contractAddress);
    const balanceWei = await contract.methods.balanceOf(address).call();
    const balance = window.web3.utils.fromWei(balanceWei, 'ether');
    return balance;
  }
  return null;
};

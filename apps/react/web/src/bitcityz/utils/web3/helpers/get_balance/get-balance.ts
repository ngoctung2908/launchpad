import Web3 from 'web3';
import {AbiItem} from 'web3-utils'
import { getCurrentAccount as getCurrentAccount } from '../get-current-account';

export const getBalance = async (web3Instance: Web3, contractAddress: string, address: string | null) => {
  const minABI: AbiItem[] = [
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
    address = await getCurrentAccount(web3Instance);
  }
  if (address) {
    const contract = new web3Instance.eth.Contract(minABI, contractAddress);
    const balanceWei = await contract.methods.balanceOf(address).call();
    const balance = web3Instance.utils.fromWei(balanceWei, 'ether');
    return balance;
  }
  return null;
};

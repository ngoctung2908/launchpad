export const shortAddress = (address: string) => {
  return address.substr(0, 5) + '...' + address.substr(address.length - 5);
};

import { saveConnected } from './save-connection';

export const switchAccount = () => {
  if (!window.account) return;
  saveConnected(window.account.type);
};

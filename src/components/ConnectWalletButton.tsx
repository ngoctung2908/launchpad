import React from 'react'
import { Button, useWalletModal } from '@bitcityz/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

// imgs
import iconWalletSvg from '../bitcityz/assets/icons/icon-wallet.svg'

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
       <img className="btn--icon" src={iconWalletSvg} alt="icon wallet" /> {t('Connect Wallet')}
    </Button>
  )
}

export default ConnectWalletButton

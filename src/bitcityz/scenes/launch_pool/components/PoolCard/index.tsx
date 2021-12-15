import BigNumber from 'bignumber.js'
import React from 'react'
import { CardBody, Flex, Text, CardRibbon } from '@bitcityz/uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from 'contexts/Localization'
import { BIG_ZERO } from 'utils/bigNumber'
import { DeserializedPool } from 'state/types'
import AprRow from './AprRow'
import { StyledCard } from './StyledCard'
import CardFooter from './CardFooter'
import CardActions from './CardActions'

const PoolCard: React.FC<{ pool: any; account: string }> = ({ pool, account }) => {
  const { sousId, stakingToken, earningToken, isFinished, amount } = pool
  const { t } = useTranslation()

  return (
    <Flex width="100%" style={{border: '1px solid #E9EAEB', padding: "8px"}}>
      {/* <StyledCardHeader
        isStaking={accountHasStakedBalance}
        earningToken={earningToken}
        stakingToken={stakingToken}
        isFinished={isFinished && sousId !== 0}
      /> */}
      {account ? (
          <CardActions pool={pool} stakedBalance={amount} />
        ) : (
          <>
            <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
              {t('Start earning')}
            </Text>
            <ConnectWalletButton />
          </>
        )}
      {/* <CardFooter pool={pool} account={account} /> */}
    </Flex>
  )
}

export default PoolCard

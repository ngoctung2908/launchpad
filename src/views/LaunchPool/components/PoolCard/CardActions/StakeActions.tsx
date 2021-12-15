import React, { useState, useMemo } from 'react'
import { Flex, Text, Button, IconButton, AddIcon, MinusIcon, useModal, Skeleton, useTooltip } from '@bitcityz/uikit'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
import { DeserializedPool } from 'state/types'
import Balance from 'components/Balance'
import { useLaunchPoolContract, useERC20 } from 'hooks/useContract'

interface StakeActionsProps {
  pool: any
  isLoading?: boolean
}

const StakeAction: React.FC<StakeActionsProps> = ({
  pool,
  isLoading = false,
}) => {
  const launchPoolContract = useLaunchPoolContract()
  const { id, amount, startTime, name, lockingToken, lockingTime, minLockingAmount } = pool
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const isStaked = useMemo(() => {
    return new BigNumber(amount).isGreaterThan(0)
  }, [amount])
  const onStake = async() => {
    setLoading(true)
    const tx = await launchPoolContract.stake(id, minLockingAmount)
    const receipt = tx.wait()
    setLoading(false)
  }

  const onUnStake = async() => {
    setLoading(true)
    const tx = await launchPoolContract.unstake(id)
    const receipt = tx.wait()
    setLoading(false)
  }

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t('You’ve already staked the maximum amount you can stake in this pool!'),
    { placement: 'bottom' },
  )

  return <Flex flexDirection="row" justifyContent="flex-end">
    <Button disabled={!isStaked || loading} onClick={onUnStake}>
      {loading ? 'Loading' : t('Unstake')}
    </Button>
    <Button ml="8px" disabled={isStaked || loading} onClick={onStake}>
      {loading ? 'Loading' : t('Stake')}
    </Button>
  </Flex>
}

export default StakeAction

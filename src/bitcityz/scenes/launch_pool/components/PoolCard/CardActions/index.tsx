import BigNumber from 'bignumber.js'
import React from 'react'
import styled from 'styled-components'
import { BIG_ZERO } from 'utils/bigNumber'
import { Flex, Text, Box } from '@bitcityz/uikit'
import { useTranslation } from 'contexts/Localization'
import { PoolCategory } from 'config/constants/types'
import { DeserializedPool } from 'state/types'
import ApprovalAction from './ApprovalAction'
import StakeActions from './StakeActions'
import HarvestActions from './HarvestActions'

const InlineText = styled(Text)`
  display: inline;
`

interface CardActionsProps {
  pool: any
  stakedBalance: string
}

const CardActions: React.FC<CardActionsProps> = ({ pool, stakedBalance }) => {
  const { id, amount, lockingToken, minLockingAmount, name, startTime, lockingTime, isApproved } = pool
  // Pools using native BNB behave differently than pools using a token
  const { t } = useTranslation()

  return (
    <Flex width="100%" flexDirection="column">
      <Flex flexDirection="column">
        <Box display="inline">
          <InlineText  textTransform="uppercase" bold fontSize="12px">
            Name: {name}
          </InlineText>
        </Box>
        <Box display="inline">
          <InlineText  textTransform="uppercase" bold fontSize="12px">
            Locking time: {lockingTime / 3600}
          </InlineText>
        </Box>
        <Box display="inline">
          <InlineText  textTransform="uppercase" bold fontSize="12px">
            Locking amount: {amount}
          </InlineText>
        </Box>
        <Box display="inline">
          <InlineText  textTransform="uppercase" bold fontSize="12px">
            Required: {minLockingAmount}
          </InlineText>
        </Box>
        {!isApproved ? (
          <ApprovalAction pool={pool} isLoading={false} />
        ) : (
          <StakeActions
            isLoading={false}
            pool={pool}
          />
        )}
      </Flex>
    </Flex>
  )
}

export default CardActions

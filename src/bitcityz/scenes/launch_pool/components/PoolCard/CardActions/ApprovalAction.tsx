import React from 'react'
import { Button, AutoRenewIcon, Skeleton } from '@bitcityz/uikit'
import { useTranslation } from 'contexts/Localization'
import { useERC20 } from 'hooks/useContract'
import { DeserializedPool } from 'state/types'
import { useApprovePool } from '../../../hooks/useApprove'

interface ApprovalActionProps {
  pool: any
  isLoading?: boolean
}

const ApprovalAction: React.FC<ApprovalActionProps> = ({ pool, isLoading = false }) => {
  const { sousId, stakingToken, lockingToken } = pool
  const { t } = useTranslation()
  const stakingTokenContract = useERC20(lockingToken || '')
  const { handleApprove, requestedApproval } = useApprovePool(stakingTokenContract)

  return (
    <>
      {isLoading ? (
        <Skeleton width="100%" height="52px" />
      ) : (
        <Button
          isLoading={requestedApproval}
          endIcon={requestedApproval ? <AutoRenewIcon spin color="currentColor" /> : null}
          disabled={requestedApproval}
          onClick={handleApprove}
          width="100%"
        >
          {t('Enable')}
        </Button>
      )}
    </>
  )
}

export default ApprovalAction

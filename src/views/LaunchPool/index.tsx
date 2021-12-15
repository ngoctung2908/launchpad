import React, { useEffect, useMemo, useState } from 'react'
import tokens from 'config/constants/tokens'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { multicallv2 } from 'utils/multicall'
import { useWeb3React } from '@web3-react/core'
import { useTokenContract } from 'hooks/useContract'
import launchPoolABI from 'config/abi/launchPool.json'
import { Flex, Image } from '@bitcityz/uikit'
import { getLaunchPoolAddress } from 'utils/addressHelpers'
import { useTranslation } from 'contexts/Localization'
import useIntersectionObserver from 'hooks/useIntersectionObserver'

import FlexLayout from 'components/Layout/Flex'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import Loading from 'components/Loading'
import PoolCard from './components/PoolCard'

const CardLayout = styled(FlexLayout)`
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`
const bctz = '0xE90CABC44faE173881879BFD87A736BA0bE31305'

const POOLS = [0, 1, 2]

const Pools: React.FC = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const [pools, setPools] = useState([])
  const [isApproved, setIsApproved] = useState(false)
  const { observerRef, isIntersecting } = useIntersectionObserver()

  const erc20Contract = useTokenContract(bctz)
  
  const launchPoolAddress = getLaunchPoolAddress()

  const userCalls = useMemo(() => POOLS.map((id) => {
    return { address: launchPoolAddress, name: 'userInfo', params: [id, account] }
  }), [account, launchPoolAddress])

  const poolCalls = useMemo(() => POOLS.map((id) => {
    return { address: launchPoolAddress, name: 'poolInfo', params: [id] }
  }), [launchPoolAddress])

  useEffect(() => {
    if (account) {
      erc20Contract.allowance(account, launchPoolAddress).then(res => {
        setIsApproved(res && new BigNumber(res._hex).isGreaterThan(0))
      })
    }
  }, [erc20Contract, account, launchPoolAddress])

  useEffect(() => {
    const initialData = async() => {
      const userInfos = await multicallv2(launchPoolABI, userCalls)

      const poolInfos = await multicallv2(launchPoolABI, poolCalls)
      const data = userInfos.map((info, index) => {
        const pool = poolInfos[index]
        return {
          id: index,
          amount: new BigNumber(info.amount._hex).div(DEFAULT_TOKEN_DECIMAL).toString(),
          startTime: new BigNumber(info.startTime._hex).toString(),
          name: pool.name,
          lockingToken: pool.lockingToken,
          lockingTime: new BigNumber(pool.lockingTime._hex).toString(),
          minLockingAmount: new BigNumber(pool.minLockingAmount._hex).toString(),
          isApproved
        }
      })
      setPools(data)
    }
    if (account) {
      initialData()   
    }
  }, [account, userCalls, poolCalls, isApproved])

  // TODO aren't arrays in dep array checked just by reference, i.e. it will rerender every time reference changes?

  const cardLayout = (
    <CardLayout>
      {pools.map((pool) =>
        <PoolCard key={pool.id} pool={pool} account={account} />,
      )}
    </CardLayout>
  )

  return (
    <>
      <PageHeader>
        {/* <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
          <Flex flex="1" flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" scale="xxl" color="secondary" mb="24px">
              {t('Syrup Pools')}
            </Heading>
            <Heading scale="md" color="text">
              {t('Just stake some tokens to earn.')}
            </Heading>
            <Heading scale="md" color="text">
              {t('High APR, low risk.')}
            </Heading>
          </Flex>
          <Flex flex="1" height="fit-content" justifyContent="center" alignItems="center" mt={['24px', null, '0']}>
            <HelpButton />
            <BountyCard />
          </Flex>
        </Flex> */}
      </PageHeader>
      <Page>
        {account && (
          <Flex justifyContent="center" mb="4px">
            <Loading />
          </Flex>
        )}
        {cardLayout}
        <div ref={observerRef} />
        <Image
          mx="auto"
          mt="12px"
          src="/images/decorations/3d-syrup-bunnies.png"
          alt="Pancake illustration"
          width={192}
          height={184.5}
        />
      </Page>
    </>
  )
}

export default Pools

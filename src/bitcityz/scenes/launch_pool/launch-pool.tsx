import React, { useEffect, useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { useTokenContract } from 'hooks/useContract'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { getLaunchPoolAddress } from 'utils/addressHelpers'
import launchPoolABI from 'config/abi/launchPool.json'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import { multicallv2 } from 'utils/multicall'
// imgs
import launchPoolTitlePng from '../../assets/imgs/launch-pool-title.png'
import mayorPng from '../../assets/img/launch/mayor.png'
import elitePng from '../../assets/img/launch/elite.png'
import cityzenPng from '../../assets/img/launch/cityzen.png'
import linkSquareSvg from '../../assets/icons/link-square.svg'

const bctz = '0xE90CABC44faE173881879BFD87A736BA0bE31305'
const POOLS = [0, 1, 2]

const LaunchPool: React.FC = () => {
  const { account } = useWeb3React()
  const [pools, setPools] = useState([])
  const [isApproved, setIsApproved] = useState(false)
  const { observerRef, isIntersecting } = useIntersectionObserver()

  const erc20Contract = useTokenContract(bctz)

  const launchPoolAddress = getLaunchPoolAddress()

  const userCalls = useMemo(
    () =>
      POOLS.map((id) => {
        return { address: launchPoolAddress, name: 'userInfo', params: [id, account] }
      }),
    [account, launchPoolAddress],
  )

  const poolCalls = useMemo(
    () =>
      POOLS.map((id) => {
        return { address: launchPoolAddress, name: 'poolInfo', params: [id] }
      }),
    [launchPoolAddress],
  )

  useEffect(() => {
    if (account) {
      erc20Contract.allowance(account, launchPoolAddress).then((res) => {
        setIsApproved(res && new BigNumber(res._hex).isGreaterThan(0))
      })
    }
  }, [erc20Contract, account, launchPoolAddress])

  useEffect(() => {
    const initialData = async () => {
      const userInfos = await multicallv2(launchPoolABI, userCalls)

      const poolInfos = await multicallv2(launchPoolABI, poolCalls)
      
      const data = poolInfos.map((poolInfo, index) => {
        const userInfo = userInfos[index]
        return {
          id: index,
          amount: new BigNumber(userInfo.amount._hex).div(DEFAULT_TOKEN_DECIMAL).toString(),
          startTime: new BigNumber(userInfo.startTime._hex).toString(),
          name: poolInfo.name,
          lockingToken: poolInfo.lockingToken,
          lockingTime: new BigNumber(poolInfo.lockingTime._hex).toString(),
          minLockingAmount: new BigNumber(poolInfo.minLockingAmount._hex).toString(),
          isApproved,
        }
      })
      setPools(data)
    }
    if (account) {
      initialData()
    }
  }, [account, userCalls, poolCalls, isApproved])

  return (
    <main className="launch-pool">
      <div ref={observerRef} />
      <section className="banner">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <img src={launchPoolTitlePng} alt="launch pool title" />
          <span className="page-title">Launchpool</span>
          <span className="page-sub-title">
            Stake 3 pools at the same time. Get more opportunities to own hidden gems
          </span>
        </div>
      </section>
      <section className="section-ticket container d-flex flex-column justify-content-center align-items-center mb-5 mb-lg-0">
        <div className="card-project col-md-12 col-lg-11 col-xl-9 mt-3 mb-3">
          <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start project-content">
            <div className="d-flex flex-column align-self-stretch">
              <div className="big-logo text-center text-lx-start">
                <img src={mayorPng} alt="mayor" />
              </div>
              <div className="ticket-number">Mayor tickets: 0</div>
            </div>
            <div className="d-flex flex-column align-self-stretch project-desc ms-lg-3">
              <div className="project-name">Mayor Pass-ticket</div>
              <div className="row">
                <div className="col-sm-12 col-lg-5 col-xl-6 d-flex flex-row flex-lg-column justify-content-between">
                  <div className="field-label">Required:</div>
                  <div className="field-value">&lt;= 100,000 BCTZ</div>
                </div>
                <div className="col-sm-12 col-lg-7 col-xl-6 d-flex flex-row flex-lg-column justify-content-between mt-0 mt-sm-3">
                  <div className="field-label">Staking:</div>
                  <div className="field-value">0 BCTZ</div>
                </div>
                <div className="col-sm-12 col-lg-5 col-xl-6 d-flex flex-row flex-lg-column justify-content-between mt-0 mt-sm-3">
                  <div className="field-label">Lock-up Time:</div>
                  <div className="field-value">7 days</div>
                </div>
                <div className="col-sm-12 col-lg-7 col-xl-6 d-flex flex-row flex-lg-column justify-content-between mt-0 mt-sm-3">
                  <div className="field-label">Remaining unlock:</div>
                  <div className="field-value text-end text-sm-start">7 days : 00 hours : 00 mins</div>
                </div>
              </div>
              <div className="row link-view-details-container mt-lg-3">
                <div className="col text-sm-center text-lg-start">
                  <a className="link-view-details" href="https://bscscan.com">
                    View Smart contract
                  </a>{' '}
                  <img src={linkSquareSvg} alt="link-square" />
                </div>
              </div>
              <div className="row actions mt-xl-3">
                <div className="col-sm-12 col-lg-4 pe-0 ps-sm-0">
                  <Button variant="secondary">Claim ticket</Button>
                </div>
                <div className="col-sm-12 col-lg-4 px-0 px-lg-3">
                  <Button variant="secondary">Unstake</Button>
                </div>
                <div className="col-sm-12 col-lg-4 pe-0 ps-sm-0">
                  <Button variant="primary">Stake BCTZ</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-project col-md-12 col-lg-11 col-xl-9 mt-3 mb-3">
          <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start project-content">
            <div className="d-flex flex-column align-self-stretch">
              <div className="big-logo text-center text-lx-start">
                <img src={elitePng} alt="elite" />
              </div>
              <div className="ticket-number">Mayor tickets: 0</div>
            </div>
            <div className="d-flex flex-column align-self-stretch project-desc ms-lg-3">
              <div className="project-name">Elite Pass-ticket</div>
              <div className="row">
                <div className="col-sm-12 col-lg-5 col-xl-6 d-flex flex-row flex-lg-column justify-content-between">
                  <div className="field-label">Required:</div>
                  <div className="field-value">50,000 - 99,999 BCTZ</div>
                </div>
                <div className="col-sm-12 col-lg-7 col-xl-6 d-flex flex-row flex-lg-column justify-content-between mt-0 mt-sm-3">
                  <div className="field-label">Staking:</div>
                  <div className="field-value">0 BCTZ</div>
                </div>
                <div className="col-sm-12 col-lg-5 col-xl-6 d-flex flex-row flex-lg-column justify-content-between mt-0 mt-sm-3">
                  <div className="field-label">Lock-up Time:</div>
                  <div className="field-value">7 days</div>
                </div>
                <div className="col-sm-12 col-lg-7 col-xl-6 d-flex flex-row flex-lg-column justify-content-between mt-0 mt-sm-3">
                  <div className="field-label">Remaining unlock:</div>
                  <div className="field-value text-end text-sm-start">7 days : 00 hours : 00 mins</div>
                </div>
              </div>
              <div className="row link-view-details-container mt-lg-3">
                <div className="col text-sm-center text-lg-start">
                  <a className="link-view-details" href="https://bscscan.com">
                    View Smart contract
                  </a>{' '}
                  <img src={linkSquareSvg} alt="link-square" />
                </div>
              </div>
              <div className="row actions mt-xl-3">
                <div className="col-sm-12 col-lg-4 ps-0 pe-sm-0">
                  <Button variant="secondary">Claim ticket</Button>
                </div>
                <div className="col-sm-12 col-lg-4 px-0 px-lg-3">
                  <Button variant="secondary">Unstake</Button>
                </div>
                <div className="col-sm-12 col-lg-4 pe-0 ps-sm-0">
                  <Button variant="primary">Stake BCTZ</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-project col-md-12 col-lg-11 col-xl-9 mt-3 mb-3">
          <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start project-content">
            <div className="d-flex flex-column align-self-stretch">
              <div className="big-logo text-center text-lx-start">
                <img src={cityzenPng} alt="cityzen" />
              </div>
              <div className="ticket-number">Mayor tickets: 0</div>
            </div>
            <div className="d-flex flex-column align-self-stretch project-desc ms-lg-3">
              <div className="project-name">Cityzen Pass-ticket</div>
              <div className="row">
                <div className="col-sm-12 col-lg-5 col-xl-6 d-flex flex-row flex-lg-column justify-content-between">
                  <div className="field-label">Required:</div>
                  <div className="field-value">10,000 - 49,999 BCTZ</div>
                </div>
                <div className="col-sm-12 col-lg-7 col-xl-6 d-flex flex-row flex-lg-column justify-content-between mt-0 mt-sm-3">
                  <div className="field-label">Staking:</div>
                  <div className="field-value">0 BCTZ</div>
                </div>
                <div className="col-sm-12 col-lg-5 col-xl-6 d-flex flex-row flex-lg-column justify-content-between mt-0 mt-sm-3">
                  <div className="field-label">Lock-up Time:</div>
                  <div className="field-value">7 days</div>
                </div>
                <div className="col-sm-12 col-lg-7 col-xl-6 d-flex flex-row flex-lg-column justify-content-between mt-0 mt-sm-3">
                  <div className="field-label">Remaining unlock:</div>
                  <div className="field-value text-end text-sm-start">7 days : 00 hours : 00 mins</div>
                </div>
              </div>
              <div className="row link-view-details-container mt-lg-3">
                <div className="col text-sm-center text-lg-start">
                  <a className="link-view-details" href="https://bscscan.com">
                    View Smart contract
                  </a>{' '}
                  <img src={linkSquareSvg} alt="link-square" />
                </div>
              </div>
              <div className="row actions mt-xl-3">
                <div className="col-sm-12 col-lg-4 ps-0 pe-sm-0">
                  <Button variant="secondary">Claim ticket</Button>
                </div>
                <div className="col-sm-12 col-lg-4 px-0 px-lg-3">
                  <Button variant="secondary">Unstake</Button>
                </div>
                <div className="col-sm-12 col-lg-4 pe-0 ps-sm-0">
                  <Button variant="primary">Stake BCTZ</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sections-launch">
        <div className="container" />
      </section>
    </main>
  )
}
export default LaunchPool

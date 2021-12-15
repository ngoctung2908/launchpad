import React from 'react'
import { Button, Nav, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ComingSoon from './components/coming-soon'
import Pool from './components/pool'
import { Project, Banner } from './components'
import TablePerformance from './components/table-performance'
// imgs
import launchpoolPng from '../../assets/img/launch/launchpool.png'
import upcomingPoolPng from '../../assets/imgs/upcoming-pool.png'
import performancePng from '../../assets/imgs/performance.png'
import circleLogoPng from '../../assets/imgs/circle-logo.png'
import telegramSvg from '../../assets/icons/socials/telegram.svg'
import twitterSvg from '../../assets/icons/socials/twitter.svg'
import discordSvg from '../../assets/icons/socials/discord.svg'
import profile2UserPng from '../../assets/img/launch/profile-2user.png'
import boxTickPng from '../../assets/img/launch/box-tick.png'
import statusUpPng from '../../assets/img/launch/status-up.png'
import taskSquarePng from '../../assets/img/launch/task-square.png'
import medalStarPng from '../../assets/img/launch/medal-star.png'
import peoplePng from '../../assets/img/launch/people.png'
import cpuChargePng from '../../assets/img/launch/cpu-charge.png'
import homeTrendUpPng from '../../assets/img/launch/home-trend-up.png'

import './home.style.scss'

const Home: React.FC = () => {
  return (
    <main className="home">
      <Banner />
      <div className="others">
        <section className="d-flex flex-column section-projects">
          <h3>Buy and own potential coins in the fastest way</h3>
          <p>Staking BCTZ to get pass-ticket. Join pool to claim hidden gems</p>
          <div className="d-flex col-9 col-lg-12 justify-content-center flex-wrap m-auto">
            <div className="card-project">
              <span>Current Funds Locked</span>
              <h3>$0</h3>
            </div>

            <div className="card-project">
              <span>Total Funds Raised</span>
              <h3>$0</h3>
            </div>

            <div className="card-project">
              <span>Project Launch</span>
              <h3>0</h3>
            </div>

            <div className="card-project">
              <span>Inverstors</span>
              <h3>0</h3>
            </div>
          </div>
        </section>
        <section className="container-lg section-upcoming-project">
          <div className="d-flex flex-column align-items-center">
            <img className="shadow-text" src={upcomingPoolPng} alt="upcoming pool" />
            <h3 className="text-large mb-5">Upcoming pool</h3>
          </div>
          <Tab.Container defaultActiveKey="mayorPool">
            <Nav className="d-flex justify-content-between nav col-sm-12 col-md-11 col-lg-11 col-xl-9 mb-3 mx-auto">
              <Nav.Item>
                <Nav.Link eventKey="mayorPool">Mayor pool</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="elitePool">Elite pool</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cityzenPool">Cityzen poo</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="mayorPool">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <Project />
                  <Project />
                  <Project />
                  <Button className="btn-see-more mt-3" variant="primary">
                    See more
                  </Button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="elitePool">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="col-sm-12 col-md-11 col-lg-11 col-xl-9 mt-3 mb-3">
                    <ComingSoon />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="cityzenPool">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="col-sm-12 col-md-11 col-lg-11 col-xl-9 mt-3 mb-3">
                    <ComingSoon />
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </section>
        <div className="sections-launch">
          <section className="section-launch-pool">
            <div className="container d-flex flex-column justify-content-center align-items-center ">
              <img className="shadow-text" src={launchpoolPng} alt="launchpool" />
              <h3>Launchpool</h3>
              <p>
                Stake <span className="bold">3 pools</span> at the same time. Get more opportunities to own hidden gems
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center">
                <Pool type="cityzen" requiredValue="10,000 - 49,999 BCTZ" requiredTime="7 days" totalTickets={0} />
                <Pool type="elite" requiredValue="50,000 - 99,999 BCTZ" requiredTime="7 days" totalTickets={0} />
                <Pool type="mayor" requiredValue=">= 100,000 BCTZ" requiredTime="7 days" totalTickets={0} />
              </div>
              <Link className="btn btn-primary" to="/launchpool">
                Stake now
              </Link>
            </div>
          </section>

          <section className="section-performance">
            <div className="container d-flex flex-column justify-content-center align-items-center ">
              <img className="shadow-text" src={performancePng} alt="performance" />
              <h3>Performance</h3>
              <div className="col-sm-12 col-md-11 col-lg-11 col-xl-9 mt-3 box-performance-details">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={circleLogoPng} alt="logo" />
                    <span className="ms-3">BitcityZ</span>
                  </div>
                  <div className="d-flex align-items-center list-icon-social">
                    <div className="ms-3">
                      <a href="https://t.me/BitCityZSocial" target="_blank" rel="noreferrer">
                        <img alt="telegram" src={telegramSvg} className="mrr-24" />
                      </a>
                    </div>
                    <div className="ms-3">
                      <a href="https://twitter.com/BitCityZ_social" target="_blank" rel="noreferrer">
                        <img alt="twitter" src={twitterSvg} className="mrr-24" />
                      </a>
                    </div>
                    <div className="ms-3">
                      <a href="https://discord.gg/yFwuxBME " target="_blank" rel="noreferrer">
                        <img alt="discord" src={discordSvg} className="mrr-24" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between mt-3">
                  <div className="flex-grow-1 d-flex flex-column py-3 p-0 ps-lg-0 p-lg-3">
                    <div>Current Price</div>
                    <div className="d-flex justify-content-between mt-3">
                      <span
                        style={{
                          fontSize: '24px',
                          lineHeight: '28px',
                          fontWeight: 700,
                        }}
                      >
                        $ 100.56
                      </span>
                      <div className="ms-3">
                        <i className="icon icon-up-arrow" />
                        <span
                          className="value-as-percent"
                          style={{
                            fontWeight: 700,
                          }}
                        >
                          3.148%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow-1 d-flex flex-column py-3 p-0 p-lg-3 border-left">
                    <div className="d-flex justify-content-between">
                      <span
                        style={{
                          fontWeight: 400,
                        }}
                      >
                        Market Cap:
                      </span>
                      <span
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        $300,3M
                      </span>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      <span
                        style={{
                          fontWeight: 400,
                        }}
                      >
                        Vol (24h):
                      </span>
                      <span
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        $5.8M <i className="icon icon-up-arrow" />
                        <span className="value-as-percent">70%</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow-1 d-flex flex-column py-3 p-0 p-lg-3 border-left">
                    <div className="d-flex justify-content-between">
                      <span
                        style={{
                          fontWeight: 400,
                        }}
                      >
                        Raised:
                      </span>
                      <span
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        $300,3M
                      </span>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      <span
                        style={{
                          fontWeight: 400,
                        }}
                      >
                        IDO Price:
                      </span>
                      <span
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        $1
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow-1 d-flex flex-column py-3 p-0 p-lg-3 border-left pe-lg-0">
                    <div className="d-flex justify-content-between">
                      <span
                        style={{
                          fontWeight: 400,
                        }}
                      >
                        IDO ROI:
                      </span>
                      <span
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        298,96x
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span
                        style={{
                          fontWeight: 400,
                        }}
                      >
                        Native Token:
                      </span>
                      <span
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        <img src={circleLogoPng} width="12" height="12" alt="small logo" /> BCTZ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-11 col-lg-11 col-xl-9 mt-5">
                <TablePerformance className="box-performance-listing" />
              </div>
            </div>
          </section>

          <section className="section-launch-projects">
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <h3>
                Launch your project on <span className="color">BitcityZ</span> now!
              </h3>
              <p className="col-11 col-sm-12 launch-desc">
                <span className="bold">BitcityZ Launchpad</span> is a platform that help and advise project teams on how
                to best issue and launch their token. We provide a full service offering starting from advisory services
                from before the token is even issued, to post-listing and marketing support. Our goal is to allow
                project teams to focus on their project development and continue building products, while we handle the
                marketing, exposure and initial user base. We look for strong teams with a unique and innovative vision
                in the crypto space. If you think you are one of these projects, apply below!
              </p>
              <Button
                variant="primary"
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeGkn_Szv_UCAQ2xQk0PHUp9gC7QFFzH0cCcyaY1qkFOc7reg/viewform?usp=sf_link"
                rel="noreferrer"
              >
                Apply to launch
              </Button>
              <div className="d-none">
                <h3 className="title-launchpad col-4 col-sm-11">
                  How <span className="color">BitcityZ Launchpad</span> support projects and investors
                </h3>
                <p>
                  On the project side, we help to incubate strong teams with great ideas and secured project builders
                  by:{' '}
                </p>
                <div className="col-12 col-sm-10 d-flex justify-content-center flex-wrap card-launch-projects">
                  <div className="card-launch-project text-center">
                    <div className="card-launch-project--content">
                      <img src={profile2UserPng} alt="Bringing them closer to the public and Blockchain" />
                      <p>Bringing them closer to the public and Blockchain</p>
                    </div>
                  </div>
                  <div className="card-launch-project text-center">
                    <div className="card-launch-project--content">
                      <img src={boxTickPng} alt="Supporting users to understand the project" />
                      <p>Supporting users to understand the project</p>
                    </div>
                  </div>
                  <div className="card-launch-project text-center">
                    <div className="card-launch-project--content">
                      <img src={statusUpPng} alt="Raising and Exchanging capital faster & easier" />
                      <p>Raising and Exchanging capital faster &amp; easier</p>
                    </div>
                  </div>
                  <div className="card-launch-project text-center">
                    <div className="card-launch-project--content">
                      <img src={taskSquarePng} alt="Improving projects more compatible with markets" />
                      <p>Improving projects more compatible with markets</p>
                    </div>
                  </div>
                  <div className="card-launch-project text-center">
                    <div className="card-launch-project--content">
                      <img src={medalStarPng} alt="Supporting fundraising projects through IDO and IGO form" />
                      <p>Supporting fundraising projects through IDO and IGO form</p>
                    </div>
                  </div>
                </div>
                <p className="title-user-side mt-3 mb-3">
                  On the user side, <span className="bold">BitcityZ</span> Launchpad is a free, secure, transparent
                  bridge for users to connect with proven potential projects that can bring superior profits.{' '}
                </p>
                <div className="col-12 col-sm-10 d-flex justify-content-center flex-wrap card-launch-projects">
                  <div className="card-launch-project text-center">
                    <div className="card-launch-project--content">
                      <img src={peoplePng} alt="Building a community for open project evaluation" />
                      <p>Building a community for open project evaluation</p>
                    </div>
                  </div>
                  <div className="card-launch-project text-center">
                    <div className="card-launch-project--content">
                      <img src={cpuChargePng} alt="Getting all the information about the project in just one app." />
                      <p>Getting all the information about the project in just one app.</p>
                    </div>
                  </div>
                  <div className="card-launch-project text-center">
                    <div className="card-launch-project--content">
                      <img src={homeTrendUpPng} alt="Making users the startup incubator's first explorers" />
                      <p>Making users the startup incubator&lsquo;s first explorers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Home

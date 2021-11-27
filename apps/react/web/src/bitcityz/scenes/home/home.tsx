import React from 'react';
import { Button } from 'react-bootstrap';
import Project from './components/project';

const Home: React.FC = () => {
  return (
    <main className="home">
      <section className="banner">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <img src="/assets/img/launch/launchpad.png" />
          <h3>BITCITYZ LAUNCHPAD</h3>
          <span className="text-2">CITY OF THE HIDDEN GEMS</span>
          <p>
            In just a few simple steps, you can own your hidden gems by participating in IDO and IGO of high-quality
            projects.
          </p>
          <div>
            <Button variant="primary">Join Launchpad</Button>
            <Button variant="outline-primary" className="btn-connect-wallet">
              Learn about Launchpad
            </Button>
          </div>
        </div>
      </section>
      <div className="others">
        <section className="d-flex flex-column section-projects">
          <h3>Buy and own potential coins in the fastest way</h3>
          <p>Staking BCTZ to get pass-ticket. Join pool to claim hidden gems</p>
          <div className="d-flex col-9 col-lg-12 justify-content-center flex-wrap m-auto">
            <div className="card-project">
              <span>Current Funds Locked</span>
              <h3>$87.58M</h3>
            </div>

            <div className="card-project">
              <span>Total Funds Raised</span>
              <h3>$87.58M</h3>
            </div>

            <div className="card-project">
              <span>Project Launch</span>
              <h3>10</h3>
            </div>

            <div className="card-project">
              <span>Inverstors</span>
              <h3>250</h3>
            </div>
          </div>
        </section>
        <section className="container-lg d-flex flex-column justify-content-center align-items-center section-upcoming-project">
          <img src="/assets/imgs/upcoming-pool.png" />
          <h3 className="text-large mb-5">Upcoming project</h3>
          <Project />
          <Project />
          <Project />
        </section>
        <div className="sections-launch">
          <section className="section-launch-pool">
            <div className="container d-flex flex-column justify-content-center align-items-center ">
              <img src="/assets/img/launch/launchpool.png" />
              <h3>Launchpool</h3>
              <p>
                Stake <span className="bold">3 pools</span> at the same time. Get more opportunities to own hidden gems
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center">
                <div className="card-launch">
                  <h5 className="card-title">Cityzen tickets: 0</h5>
                  <div className="card-body">
                    <img src="/assets/img/launch/cityzen.png" />
                    <h5 className="title">Pool Details</h5>
                    <div className="launch-desc">
                      <div className="d-flex justify-content-between">
                        <span>Required</span>
                        <span>10,000 - 49,999 BCTZ</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Required Lock Time:</span>
                        <span>7 days</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-launch">
                  <h5 className="card-title">Cityzen tickets: 0</h5>
                  <div className="card-body">
                    <img src="/assets/img/launch/elite.png" />
                    <h5 className="title">Pool Details</h5>
                    <div className="launch-desc">
                      <div className="d-flex justify-content-between">
                        <span>Required</span>
                        <span>50,000 - 99,999 BCTZ</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Required Lock Time:</span>
                        <span>7 days</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-launch">
                  <h5 className="card-title">Cityzen tickets: 0</h5>
                  <div className="card-body">
                    <img src="/assets/img/launch/mayor.png" />
                    <h5 className="title">Pool Details</h5>
                    <div className="launch-desc">
                      <div className="d-flex justify-content-between">
                        <span>Required</span>
                        <span>&gt;= 100,000 BCTZ</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Required Lock Time:</span>
                        <span>7 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="primary">Stake now</Button>
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
              <Button variant="primary">Apply to launch</Button>
              {/* <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeGkn_Szv_UCAQ2xQk0PHUp9gC7QFFzH0cCcyaY1qkFOc7reg/viewform"
              target="_blank"
              className="btn-launchpad">
              Apply to launch
            </a> */}
              <h3 className="title-launchpad col-4 col-sm-11">
                How <span className="color">BitcityZ Launchpad</span> support projects and investors
              </h3>
              <p>
                On the project side, we help to incubate strong teams with great ideas and secured project builders by:{' '}
              </p>
              <div className="col-12 col-sm-10 d-flex justify-content-center flex-wrap card-launch-projects">
                <div className="card-launch-project text-center">
                  <div className="card-launch-project--content">
                    <img src="/assets/img/launch/profile-2user.png" />
                    <p>Bringing them closer to the public and Blockchain</p>
                  </div>
                </div>
                <div className="card-launch-project text-center">
                  <div className="card-launch-project--content">
                    <img src="/assets/img/launch/box-tick.png" />
                    <p>Supporting users to understand the project</p>
                  </div>
                </div>
                <div className="card-launch-project text-center">
                  <div className="card-launch-project--content">
                    <img src="/assets/img/launch/status-up.png" />
                    <p>Raising and Exchanging capital faster &amp; easier</p>
                  </div>
                </div>
                <div className="card-launch-project text-center">
                  <div className="card-launch-project--content">
                    <img src="/assets/img/launch/task-square.png" />
                    <p>Improving projects more compatible with markets</p>
                  </div>
                </div>
                <div className="card-launch-project text-center">
                  <div className="card-launch-project--content">
                    <img src="/assets/img/launch/medal-star.png" />
                    <p>Supporting fundraising projects through IDO and IGO form</p>
                  </div>
                </div>
              </div>
              <p className="title-user-side mt-3 mb-3">
                On the user side, <span className="bold">BitcityZ</span> Launchpad is a free, secure, transparent bridge
                for users to connect with proven potential projects that can bring superior profits.{' '}
              </p>
              <div className="col-12 col-sm-10 d-flex justify-content-center flex-wrap card-launch-projects">
                <div className="card-launch-project text-center">
                  <div className="card-launch-project--content">
                    <img src="/assets/img/launch/people.png" />
                    <p>Building a community for open project evaluation</p>
                  </div>
                </div>
                <div className="card-launch-project text-center">
                  <div className="card-launch-project--content">
                    <img src="/assets/img/launch/cpu-charge.png" />
                    <p>Getting all the information about the project in just one app. </p>
                  </div>
                </div>
                <div className="card-launch-project text-center">
                  <div className="card-launch-project--content">
                    <img src="/assets/img/launch/home-trend-up.png" />
                    <p>Making users the startup incubator's first explorers</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
export default Home;

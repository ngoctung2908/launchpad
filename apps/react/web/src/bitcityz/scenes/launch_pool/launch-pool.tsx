import React from 'react';
import { Button } from 'react-bootstrap';

const LaunchPool: React.FC = () => {
  return (
    <main className="launch-pool">
      <section className="banner">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <img src="/assets/imgs/launch-pool-title.png" alt="launch pool title" />
          <span className="page-title">Launchpool</span>
          <span className="page-sub-title">
            Stake 3 pools at the same time. Get more opportunities to own hidden gems
          </span>
        </div>
      </section>
      <section className="section-ticket container d-flex flex-column justify-content-center align-items-center">
        {[1, 2, 3].map((item, i) => (
          <div key={i} className="card-project col-sm-12 col-md-11 col-lg-10 col-9 mt-3 mb-3">
            <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start project-content">
              <div className="d-flex flex-column">
                <div className="big-logo">
                  <img src="/assets/img/launch/mayor.png" />
                </div>
                <span className="ticket-number">Mayor tickets: 0</span>
              </div>
              <div className="project-desc">
                <div className="d-flex flex-column">
                  <div className="project-name">Mayor Pass-ticket</div>
                  <div className="row">
                    <div className="col-5 mr-3">
                      <div className="field-label">Required:</div>
                      <div className="field-value">&lt;= 100,000 BCTZ</div>
                    </div>
                    <div className="col-4 mr-3">
                      <div className="field-label">Staking:</div>
                      <div className="field-value">0 BCTZ</div>
                    </div>
                    <div className="col-3">
                      <div className="field-label">Lock-up Time:</div>
                      <div className="field-value">7 days</div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-5 mr-3">
                      <div className="field-label">Remaining unlock:</div>
                      <div className="field-value">7 days : 00 hours : 00 mins</div>
                    </div>
                    <div className="col">
                      <br />
                      <a className="link-view-details">View Smart contract</a>{' '}
                      <img src="/assets/icons/link-square.svg" />
                    </div>
                  </div>
                  <div className="row actions">
                    <div className="col-12 col-sm-4 mr-3">
                      <Button variant="secondary">Claim ticket</Button>
                    </div>
                    <div className="col-12 col-sm-4 mr-3">
                      <Button variant="secondary">Unstake</Button>
                    </div>
                    <div className="col-12 col-sm-4 mr-3">
                      <Button variant="primary">Stake BCTZ</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="sections-launch">
        <div className="container"></div>
      </section>
    </main>
  );
};
export default LaunchPool;

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
      <section className="section-ticket container d-flex flex-column justify-content-center align-items-center mb-5 mb-lg-0">
        <div className="card-project col-md-12 col-lg-11 col-xl-9 mt-3 mb-3">
          <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start project-content">
            <div className="d-flex flex-column align-self-stretch">
              <div className="big-logo text-center text-lx-start">
                <img src="/assets/img/launch/mayor.png" />
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
                  <a className="link-view-details">View Smart contract</a> <img src="/assets/icons/link-square.svg" />
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
                <img src="/assets/img/launch/elite.png" />
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
                  <a className="link-view-details">View Smart contract</a> <img src="/assets/icons/link-square.svg" />
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
                <img src="/assets/img/launch/cityzen.png" />
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
                  <a className="link-view-details">View Smart contract</a> <img src="/assets/icons/link-square.svg" />
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
        <div className="container"></div>
      </section>
    </main>
  );
};
export default LaunchPool;

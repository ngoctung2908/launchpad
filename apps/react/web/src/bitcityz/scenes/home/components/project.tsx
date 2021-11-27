import React from 'react';
import { Button } from 'react-bootstrap';

const Project = (props: any) => {
  return (
    <div className="card-project col-sm-12 col-md-11 col-lg-9 mt-3 mb-3">
      <div className="project-name">
        <span>Mayor pool</span>
        <img className="icon" src="/assets/icons/ocean-protocol.svg" />
      </div>
      <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start project-content">
        <div className="big-logo">
          <img src="/assets/project-logos/rectangle-303.png" />
        </div>
        <div className="d-flex align-self-stretch flex-grow-1 flex-column flex-sm-row align-items-center align-items-sm-start justify-content-between project-desc">
          <div className="d-flex flex-column align-self-stretch flex-grow-1 justify-content-between">
            <div className="d-flex flex-column flex-lg-row justify-content-between project-links">
              <div className="mt-3 mt-sm-0 d-flex justify-content-center justify-content-sm-start">
                <div className="mini-logo">
                  <img src="/assets/project-logos/rectangle-303-mini.png" />
                </div>
                <div className="project-name">
                  <div>Goose FX Finance</div>
                  <h6>GFX</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between justify-content-lg-end mb-3 mb-sm-0">
                <a className="project-link">
                  <img src="/assets/icons/icon-ie.svg" />
                </a>
                <a className="project-link">
                  <img src="/assets/icons/icon-twitter.svg" />
                </a>
                <a className="project-link">
                  <img src="/assets/icons/icon-medium.svg" />
                </a>
                <a className="project-link">
                  <img src="/assets/icons/icon-telegram.svg" />
                </a>
              </div>
            </div>
            <div className="project-information d-sm-none d-md-block">
              <div className="d-flex justify-content-between">
                <div>Total capital raise</div>
                <div>10,000 BUSD</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Whitelist registration starts</div>
                <div>05/11/2021 10 am (UTC)</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Whitelist registration starts</div>
                <div>16/11/2021 2 pm (UTC)</div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-self-stretch justify-content-between align-items-center align-items-sm-end">
            <div className="mb-3 mb-sm-0 text-center text-sm-end">
              <div className="token-pair">(GFX/BUSD)</div>
              <div className="token-rate">GFX = 0.05 BUSD</div>
            </div>
            <div>
              <Button variant="primary">More Details</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

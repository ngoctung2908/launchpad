import React from 'react';
import { Button } from 'react-bootstrap';

const TicketType = (props: any) => {
  return (
    <div className="card-project col-md-12 col-lg-11 col-xl-9 mt-3 mb-3">
      <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start project-content">
        <div className="d-flex flex-column align-self-stretch">
          <div className="big-logo text-center text-lx-start">
            <img src="/assets/img/launch/elite.png" />
          </div>
          <div className="ticket-number">Mayor tickets: {props.ticketType.total}</div>
        </div>
        <div className="d-flex flex-column align-self-stretch project-desc ms-lg-3">
          <div className="project-name">{props.ticketType.name}</div>
          <div className="row">
            <div className="col-sm-12 col-lg-5 col-xl-6 d-flex flex-row flex-lg-column justify-content-between">
              <div className="field-label">Required:</div>
              <div className="field-value">{props.ticketType.required}</div>
            </div>
            <div className="col-sm-12 col-lg-7 col-xl-6 d-flex flex-row flex-lg-column justify-content-between mt-0 mt-sm-3">
              <div className="field-label">Staking:</div>
              <div className="field-value">{props.ticketType.stakingValue} {props.ticketType.stakingUnit}</div>
            </div>
            <div className="col-sm-12 col-lg-5 col-xl-6 d-flex flex-row flex-lg-column justify-content-between mt-0 mt-sm-3">
              <div className="field-label">Lock-up Time:</div>
              <div className="field-value">{props.ticketType.lockupTime} {props.ticketType.lockupTimeUnit}</div>
            </div>
            <div className="col-sm-12 col-lg-7 col-xl-6 d-flex flex-row flex-lg-column justify-content-between mt-0 mt-sm-3">
              <div className="field-label">Remaining unlock:</div>
              <div className="field-value text-end text-sm-start">{props.ticketType.remainingUnlock}</div>
            </div>
          </div>
          <div className="row link-view-details-container mt-lg-3">
            <div className="col text-sm-center text-lg-start">
              <a className="link-view-details">View Smart contract <img src="/assets/icons/link-square.svg" /></a>
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
  );
};

export default TicketType;

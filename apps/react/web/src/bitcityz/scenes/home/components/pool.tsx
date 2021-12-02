import React from 'react';

const images = {
  elite: '/assets/img/launch/elite.png',
  mayor: '/assets/img/launch/mayor.png',
  cityzen: '/assets/img/launch/cityzen.png',
};

const Pool = (props: {
  type: 'elite' | 'mayor' | 'cityzen';
  requiredValue: string;
  requiredTime: string;
  totalTickets: number;
}) => {
  return (
    <div className="card-launch">
      <div className="card-body">
        <img src={images[props.type]} />
        <h5 className="title">Pool Details</h5>
        <div className="launch-desc">
          <div className="d-flex justify-content-between">
            <span>Required</span>
            <span>{props.requiredValue}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Required Lock Time:</span>
            <span>{props.requiredTime}</span>
          </div>
        </div>
      </div>
      <h5 className="card-title"><span className="text-capitalize">{props.type}</span> tickets: {props.totalTickets}</h5>
    </div>
  );
};

export default Pool;

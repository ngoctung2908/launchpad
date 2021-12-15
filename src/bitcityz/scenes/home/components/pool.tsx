import React from 'react'
import elitePng from '../../../assets/img/launch/elite.png'
import mayorPng from '../../../assets/img/launch/mayor.png'
import cityzenPng from '../../../assets/img/launch/cityzen.png'

const images = {
  elite: elitePng,
  mayor: mayorPng,
  cityzen: cityzenPng,
}

const Pool: React.FC<{
  type: 'elite' | 'mayor' | 'cityzen'
  requiredValue: string
  requiredTime: string
  totalTickets: number
}> = ({ type, requiredValue, requiredTime, totalTickets }) => {
  return (
    <div className="card-launch">
      <div className="card-body">
        <img src={images[type]} alt="ticket" />
        <h5 className="title">Pool Details</h5>
        <div className="launch-desc">
          <div className="d-flex justify-content-between">
            <span>Required</span>
            <span>{requiredValue}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Required Lock Time:</span>
            <span>{requiredTime}</span>
          </div>
        </div>
      </div>
      <h5 className="card-title">
        <span className="text-capitalize">{type}</span> tickets: {totalTickets}
      </h5>
    </div>
  )
}

export default Pool

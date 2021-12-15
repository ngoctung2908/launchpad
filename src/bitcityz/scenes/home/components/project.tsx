import React from 'react'
import { Button } from 'react-bootstrap'
// imgs
import oceanProtocolSvg from "../../../assets/icons/ocean-protocol.svg"
import rectangle303Png from "../../../assets/project-logos/rectangle-303.png"
import rectangle303MiniPng from "../../../assets/project-logos/rectangle-303-mini.png"
import iconIeSvg from "../../../assets/icons/icon-ie.svg"
import iconTwitterSvg from "../../../assets/icons/icon-twitter.svg"
import iconMediumSvg from "../../../assets/icons/icon-medium.svg"
import iconTelegramSvg from "../../../assets/icons/icon-telegram.svg"

export const Project = () => {
  return (
    <div className="card-project col-sm-12 col-md-11 col-lg-11 col-xl-9 mt-3 mb-3">
      <div className="project-name">
        <span>Mayor pool</span>
        <img className="icon" src={oceanProtocolSvg} alt="decor" />
      </div>
      <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start project-content">
        <div className="big-logo">
          <img src={rectangle303Png} alt="project logo" />
        </div>
        <div className="d-flex align-self-stretch flex-grow-1 flex-column flex-lg-row project-desc">
          <div className="d-flex flex-column align-self-stretch flex-grow-1 justify-content-between">
            <div className="d-flex flex-column flex-xl-row justify-content-between project-links">
              <div className="mt-3 mt-sm-0 d-flex justify-content-center justify-content-lg-start mt-sm-3 nt-lg-0">
                <div className="mini-logo">
                  <img src={rectangle303MiniPng} alt="mini logo" />
                </div>
                <div className="project-name">
                  <div>Goose FX Finance</div>
                  <h6>GFX</h6>
                </div>
                <span className="token-pair">(GFX/BUSD)</span>
              </div>
              <div className="d-flex justify-content-between justify-content-md-center justify-content-lg-start justify-content-xl-end mb-3 mb-sm-0">
                <button type="button" className="btn btn-link project-link">
                  <img src={iconIeSvg} alt="ie" />
                </button>
                <button type="button" className="btn btn-link project-link">
                  <img src={iconTwitterSvg} alt="twitter" />
                </button>
                <button type="button" className="btn btn-link project-link">
                  <img src={iconMediumSvg} alt="medium" />
                </button>
                <button type="button" className="btn btn-link project-link">
                  <img src={iconTelegramSvg} alt="telegram" />
                </button>
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
          <div className="d-flex flex-column align-self-stretch justify-content-between align-items-end align-items-sm-center mt-0 mt-sm-3">
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
  )
}

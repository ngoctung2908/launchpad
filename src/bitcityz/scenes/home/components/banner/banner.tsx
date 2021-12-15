import React from 'react'
import launchpadPng from '../../../../assets/img/launch/launchpad.png'

export const Banner = () => {
  return (
    <section className="banner">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <img className="shadow-text" src={launchpadPng} alt="launchpad" />
        <h3>BITCITYZ LAUNCHPAD</h3>
        <span className="text-2">CITY OF THE HIDDEN GEMS</span>
        <p>
          In just a few simple steps, you can own your hidden gems by participating in IDO and IGO of high-quality
          projects.
        </p>
        <div className="d-none">
          {/* <Button variant="primary">Join Launchpad</Button>
        <Button variant="outline-primary" className="btn-connect-wallet">
          Learn about Launchpad
        </Button> */}
        </div>
      </div>
    </section>
  )
}

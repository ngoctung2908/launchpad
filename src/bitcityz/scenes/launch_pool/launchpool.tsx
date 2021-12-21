import React from 'react'
import '../../assets/index.css'
import PoolList from './components/PoolList'

function LaunchPool() {
  return (
    <div className="bg-[#050e21] bg-no-repeat bg-top">
      <div className="layout-container">
        <PoolList />
      </div>
    </div>
  )
}

export default LaunchPool

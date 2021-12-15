import React from 'react'

const ComingSoon = () => {
  return (
    <div className="d-flex justify-content-center align-items-center box-coming-soon">
      <div>
        <span
          style={{
            color: '#F5F5F5',
            textTransform: 'uppercase',
            fontSize: '32px',
            lineHeight: '36px',
            fontWeight: 700,
          }}
        >
          Coming soon <img src="/assets/imgs/space-ship.png" height="107" alt="Coming soon" />
        </span>
      </div>
    </div>
  )
}

export default ComingSoon

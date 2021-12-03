import React from 'react'

const LevelOne = () => {
  return (
    <div className="col d-flex align-items-start">
      <div>
        <h3>Level One</h3>
        <div className="code">useSubscriber('data');</div>
        <button className="btn btn-primary">
          Sign Out
        </button>
        <button className="btn btn-primary">
          Sign In
        </button>
      </div>
    </div>
  )
}

export { LevelOne };

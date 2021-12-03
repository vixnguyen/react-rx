import React from 'react'

const LevelThree = () => {
  return (
    <div className="col d-flex align-items-start">
      <div>
        <h3>Nested Level</h3>
        <div className="code">useSubscriber('data');</div>
        <button className="btn btn-primary">
          Random
        </button>
      </div>
    </div>
  )
}

export { LevelThree };

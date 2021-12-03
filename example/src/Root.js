import React from 'react';
import { useSubscriber } from '../../lib';

const Root = () => {
  const masterStore = useSubscriber();
  return (
    <div className="col d-flex align-items-start">
      <div>
        <h3>Master Store</h3>
        <div className="code">useSubscriber();</div>
        <div className="resuld"><pre>{JSON.stringify(masterStore, null, 2) }</pre></div>
      </div>
    </div>
  )
}

export { Root };

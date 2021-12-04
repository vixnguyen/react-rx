import React from 'react';

import { useSubscriber } from '../../lib';

const Loader = () => {

  const { isLoading } = useSubscriber('page');

  return (
    isLoading && <div className="d-flex justify-content-center">
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
  </div>
  )
}

export { Loader };

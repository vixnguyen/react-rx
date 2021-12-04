import React from 'react';

import { useSubscriber } from '../../lib';

const Loader = () => {

  const { isLoading } = useSubscriber('page');

  return (
    isLoading && <div class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
  </div>
  )
}

export { Loader };

import { useEffect, useState } from 'react';
import { proceedState } from './utils';

declare const window: any;

const useSubscriber = (dependence = '') => {

  const [val, setVal] = useState(proceedState(dependence));

  useEffect(() => {
    window.masterStore$.subscribe({
      next: (v) => {
        return setVal((prevState) => {
          return { ...prevState, ...proceedState(dependence, v) }
        });
      }
    });
  }, [dependence]);

  return val;
};

export default useSubscriber;

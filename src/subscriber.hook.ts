import { useEffect, useState } from 'react';
import { proceedState } from './utils';

declare const window: any;

export default function useSubscriber(dependence = '') {

  const [val, setVal] = useState(proceedState(dependence));

  useEffect(() => {
    window.$masterStore.subscribe({
      next: (v) => setVal(proceedState(dependence, v))
    });
  }, [dependence]);

  return val;
}

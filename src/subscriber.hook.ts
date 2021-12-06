import { useEffect, useState, useRef } from 'react';
import { proceedState, isObject, isArray } from './utils';

declare const window: any;

const useSubscriber = (dependence = '') => {

  const [val, setVal] = useState(proceedState(dependence));
  const subscriber$ = useRef(null);

  useEffect(() => {
    let newData;
    let isMounted = true;
    subscriber$.current = window.masterStore$.subscribe({
      next: (v) => {
        if (isMounted) {
          newData = proceedState(dependence, v);
          return setVal(() => {
            if (isObject(newData)) {
              return { ...newData };
            } else if (isArray(newData)) {
              return [...newData];
            } else {
              return newData;
            }
          });
        }
      }
    });
    return () => {
      isMounted = false
    }
  }, [dependence]);

  return val;
};

export default useSubscriber;

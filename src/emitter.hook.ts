import { proceedState, overrideState, mergeDeep } from './utils';

declare const window: any;

export default function useEmitter(data, key?: string) {
  const prevData = window.$masterStore.value;
  let newData = data;
  if (key && typeof key === 'string') {
    newData = overrideState(prevData, key, data);
  }
  window.$masterStore.next(mergeDeep(prevData, newData));
}

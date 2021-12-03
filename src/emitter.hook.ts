declare const window: any;

export default function useEmitter(data, key?: string) {
  const prevData = window.$masterStore.value;
  window.$masterStore.next({ ...prevData, ...data });
}

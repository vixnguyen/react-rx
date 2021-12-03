declare const window: any;

const getNestedObject = (object, pathArr) => {
  if (object) {
    const result=  pathArr.reduce((newObject, _path) => {
      return (newObject || {})[_path];
    }, object);
    return result;
  } else {
    return undefined;
  }
}

const proceedState = (dependence, data = 'root') => {
  const masterData = data === 'root' ? window.$masterStore.value : data;
  let result;
  if (typeof dependence === 'function') {
    throw new Error('Will implement soon!!!');
  } else if (typeof dependence === 'string') {
    if (dependence) {
      const pathArr = dependence.split('.');
      result = getNestedObject(masterData, pathArr) || {};
    } else {
      result = masterData;
    }

  } else {
    throw new Error('Invalid type of dependence');
  }
  return result;
}

export { getNestedObject, proceedState }

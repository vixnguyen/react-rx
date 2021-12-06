declare const window: any;

const getNestedObject = (object, pathArr) => {
  if (object) {
    const result= pathArr.reduce((newObject, _path) => {
      return (newObject || {})[_path];
    }, object);
    return result;
  } else {
    return undefined;
  }
}

const objSet = (obj, path, val) => {
  path = stringToPath(path);
	const length = path.length;
	let current = obj;

	path.forEach((key, index) => {
		if (index === length -1) { 
      if (typeof current[key] === 'object' && typeof val === 'object' && !isEmpty(val) && val !== null) {
        current[key] = mergeDeep(current[key], val);
      } else {
        current[key] = val;
      }
		} else {
			if (!current[key]) {
				current[key] = {};
			}
			current = current[key];
		}
	});
  return obj;
};

const proceedState = (dependence, data = 'root') => {
  const masterStore = data === 'root' ? window.masterStore$.value : data;
  let result;
  if (typeof dependence === 'function') {
    throw new Error('Will implement soon!!!');
  } else if (typeof dependence === 'string') {
    if (dependence) {
      const pathArr = stringToPath(dependence);
      result = getNestedObject(masterStore, pathArr);
    } else {
      result = masterStore;
    }
  } else {
    throw new Error('Invalid type of dependence');
  }
  return result;
}

const overrideState = (masterStore, dependence, data) => {
  return dependence ? objSet(masterStore, dependence, data) : masterStore;
}

const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

const isArray = (item) => {
  return (item && typeof item === 'object' && Array.isArray(item));
}

const isEmpty = (obj) => {
  for(let prop in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
}

const stringToPath = (path) => {
  if (typeof path !== 'string') return path;
  const output = [];
  path.split('.').forEach((item) => {
    item.split(/\[([^}]+)\]/g).forEach((key) => {
      if (key.length > 0) {
        output.push(key);
      }
    });
  });
  return output;
};

const mergeDeep = (target, source) => {
  let output = target;
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          output = { ...output, ...{ [key]: source[key] } };
        } else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        output = { ...output, ...{ [key]: source[key] } };
      }
    });
  }
  return output;
}

export { getNestedObject, proceedState, isObject, isArray, mergeDeep, overrideState }

function getTag<T>(value: T) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return Object.prototype.toString.call(value);
}

export function isObjectLike<T>(value: T): value is Extract<T, object> {
  return typeof value == 'object' && value !== null;
}

//Number
export function isNumber<T>(value: T): value is Extract<T, number> {
  return (
    typeof value === 'number' ||
    (isObjectLike<T>(value) && getTag<T>(value) === '[object Number]')
  );
}

//String
export function isString<T>(value: T): value is Extract<T, string> {
  return (
    typeof value === 'string' ||
    (isObjectLike(value) && getTag(value) === '[object String]')
  );
}

//Boolean
export function isBoolean<T>(value: T): value is Extract<T, boolean> {
  return (
    typeof value === 'boolean' ||
    (isObjectLike(value) && getTag(value) === '[object Boolean]')
  );
}

//Object
export function isObject<T>(value: T): value is Extract<T, object> {
  return isObjectLike(value) || typeof value === 'function';
}

//Function
export function isFunction<T>(value: T): value is Extract<T, () => unknown> {
  if (!isObject(value)) {
    return false;
  }
  return (
    getTag(value) === '[object Function]' ||
    getTag(value) === '[object AsyncFunction]' ||
    getTag(value) === '[object GeneratorFunction]'
  );
}

//Array
export function isArray<T>(value: T[]): value is T[] {
  if (!isObject(value)) {
    return false;
  }
  return Array.isArray(value) || getTag(value) === '[object Array]';
}

//Date
export function isDate(value: unknown): value is Date {
  if (!isObject(value)) {
    return false;
  }
  return getTag(value) === '[object Date]';
}

//Set
export function isSet<T>(value: unknown): value is Set<T> {
  if (!isObject(value)) {
    return false;
  }
  return getTag(value) === '[object Set]';
}

//Map
export function isMap<K, T>(value: unknown): value is Map<K, T> {
  if (!isObject(value)) {
    return false;
  }
  return getTag(value) === '[object Map]';
}

//Error
export function isError(value: unknown): value is Error {
  if (!isObject(value)) {
    return false;
  }
  return getTag(value) === '[object Error]';
}

//Proxy
export function isProxy(value: unknown): value is ProxyConstructor {
  if (!isObject(value)) {
    return false;
  }
  if (typeof Proxy !== 'undefined') {
    return getTag(value) === '[object Proxy]';
  } else {
    return getTag(value) === '[object Object]';
  }
}

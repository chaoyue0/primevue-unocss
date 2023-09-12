function getTag(value: unknown): string {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return Object.prototype.toString.call(value);
}

export function isObjectLike(value: unknown): value is Record<any, any> {
  return typeof value == 'object' && value !== null;
}

//Number
export function isNumber(value: unknown): value is number {
  return (
    typeof value === 'number' ||
    (isObjectLike(value) && getTag(value) === '[object Number]')
  );
}

//String
export function isString(value: unknown): value is string {
  return (
    typeof value === 'string' ||
    (isObjectLike(value) && getTag(value) === '[object String]')
  );
}

//Boolean
export function isBoolean(value: unknown): value is boolean {
  return (
    typeof value === 'boolean' ||
    (isObjectLike(value) && getTag(value) === '[object Boolean]')
  );
}

//Object
export function isObject(value: unknown): value is Record<any, any> {
  return isObjectLike(value) || typeof value === 'function';
}

//Function
export function isFunction(value: unknown): value is (...args: any) => any {
  if (!isObject(value)) {
    return false;
  }
  return (
    typeof value === 'function' ||
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
export function isProxy(value: unknown): value is object {
  if (!isObject(value)) {
    return false;
  }

  return (
    getTag(value) === '[object Proxy]' || getTag(value) === '[object Object]'
  );
}

//Promise
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return (
    (isObject(val) || isFunction(val)) &&
    isFunction((val as any).then) &&
    isFunction((val as any).catch)
  );
}

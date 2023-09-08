import {
  isNumber,
  isString,
  isFunction,
  isArray,
  isDate,
  isSet,
  isMap,
  isError,
  isProxy,
  isPromise,
} from '@/libs/type-utility';
import { expect, test } from 'vitest';

// isNumber
test('isNumber-number', () => {
  expect(isNumber(1)).toBe(true);
});
test('isNumber-string', () => {
  expect(isNumber('1')).toBe(false);
});
test('isNumber-boolean', () => {
  expect(isNumber(true)).toBe(false);
});
test('isNumber-null', () => {
  expect(isNumber(null)).toBe(false);
});
test('isNumber-undefined', () => {
  expect(isNumber(undefined)).toBe(false);
});
test('isNumber-object', () => {
  expect(isNumber({})).toBe(false);
});
test('isNumber-new Number', () => {
  expect(isNumber(Number('1'))).toBe(true);
});

// isString
test('isString-number', () => {
  expect(isString(1)).toBe(false);
});
test('isString-string', () => {
  expect(isString('1')).toBe(true);
});
test('isString-boolean', () => {
  expect(isString(true)).toBe(false);
});
test('isString-null', () => {
  expect(isString(null)).toBe(false);
});
test('isString-undefined', () => {
  expect(isString(undefined)).toBe(false);
});
test('isString-object', () => {
  expect(isString({})).toBe(false);
});
test('isString-new String', () => {
  expect(isString(String(1))).toBe(true);
});

// isFunction
test('isFunction', () => {
  expect(isFunction(isNumber)).toBe(true);
});
test('isFunction-void', () => {
  expect(
    isFunction(() => {
      console.log('>>>');
    })
  ).toBe(true);
});

// isArray
test('isArray-[]', () => {
  expect(isArray([])).toBe(true);
});
test('isArray-[{}]', () => {
  expect(isArray([{}])).toBe(true);
});

// isDate
test('isDate', () => {
  expect(isDate(new Date())).toBe(true);
});

// isSet
test('isSet', () => {
  expect(isSet(new Set())).toBe(true);
});

// isMap
test('isMap', () => {
  expect(isMap(new Map())).toBe(true);
});

// isProxy
const handler = {
  get: function () {
    return 1;
  },
};
test('isProxy', () => {
  expect(isProxy(new Proxy({}, handler))).toBe(true);
});

// isPromise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('>>');
  }, 300);
});
test('isPromise', () => {
  expect(isPromise(myPromise)).toBe(true);
});

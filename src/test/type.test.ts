import { isNumber } from '@/libs/type-utility';
import { expect, test } from 'vitest';

test('test1', () => {
  expect(isNumber(1)).toBe(true);
});

test('test2', () => {
  expect(isNumber('1')).toBe(true);
});

import { expect, test } from 'vitest';
import { isLessZero, isOverZero, isZero } from '@/libs/type/number';

// isZero
test('isZero-number_0', () => {
  expect(isZero(0)).toBe(true);
});
test('isZero-number_1', () => {
  expect(isZero(1)).toBe(false);
});
test('isZero-number_-1', () => {
  expect(isZero(-1)).toBe(false);
});
test('isZero-number_0.0', () => {
  expect(isZero(0.0)).toBe(true);
});
test('isZero-string_0', () => {
  expect(isZero('0')).toBe(true);
});
test('isZero-string_1', () => {
  expect(isZero('1')).toBe(false);
});
test('isZero-string_-1', () => {
  expect(isZero('-1')).toBe(false);
});
test('isZero-string_a', () => {
  expect(isZero('a')).toBe(false);
});
test('isZero-string_0.00000', () => {
  expect(isZero('0.00000')).toBe(true);
});
test('isZero-string_0.a0a', () => {
  expect(isZero('0.a0a')).toBe(false);
});
test('isZero-null', () => {
  expect(isZero(null)).toBe(false);
});
test('isZero-undefined', () => {
  expect(isZero(undefined)).toBe(false);
});
test('isZero-object', () => {
  expect(isZero({})).toBe(false);
});

// isLessZero
test('isLessZero-number_0', () => {
  expect(isLessZero(0)).toBe(false);
});
test('isLessZero-number_1', () => {
  expect(isLessZero(1)).toBe(false);
});
test('isLessZero-number_-1', () => {
  expect(isLessZero(-1)).toBe(true);
});
test('isLessZero-number_1.1', () => {
  expect(isLessZero(1.1)).toBe(false);
});
test('isLessZero-number_-1.1', () => {
  expect(isLessZero(-1.1)).toBe(true);
});
test('isLessZero-string_0', () => {
  expect(isLessZero('0')).toBe(false);
});
test('isLessZero-string_1', () => {
  expect(isLessZero('1')).toBe(false);
});
test('isLessZero-string_-1', () => {
  expect(isLessZero('-1')).toBe(true);
});
test('isLessZero-string_1.1', () => {
  expect(isLessZero('1.1')).toBe(false);
});
test('isLessZero-string_-1.1', () => {
  expect(isLessZero('-1.1')).toBe(true);
});
test('isLessZero-string_-1.ax1', () => {
  expect(isLessZero('-1.ax1')).toBe(false);
});
test('isLessZero-string_1.ax1', () => {
  expect(isLessZero('1.ax1')).toBe(false);
});
test('isLessZero-null', () => {
  expect(isLessZero(null)).toBe(false);
});
test('isLessZero-undefined', () => {
  expect(isLessZero(undefined)).toBe(false);
});
test('isLessZero-object', () => {
  expect(isLessZero({})).toBe(false);
});

// isOverZero
test('isOverZero-number_0', () => {
  expect(isOverZero(0)).toBe(false);
});
test('isOverZero-number_1', () => {
  expect(isOverZero(1)).toBe(true);
});
test('isOverZero-number_-1', () => {
  expect(isOverZero(-1)).toBe(false);
});
test('isOverZero-number_1.1', () => {
  expect(isOverZero(1.1)).toBe(true);
});
test('isOverZero-number_-1.1', () => {
  expect(isOverZero(-1.1)).toBe(false);
});
test('isOverZero-string_0', () => {
  expect(isOverZero('0')).toBe(false);
});
test('isOverZero-string_1', () => {
  expect(isOverZero('1')).toBe(true);
});
test('isOverZero-string_-1', () => {
  expect(isOverZero('-1')).toBe(false);
});
test('isOverZero-string_1.1', () => {
  expect(isOverZero('1.1')).toBe(true);
});
test('isOverZero-string_-1.1', () => {
  expect(isOverZero('-1.1')).toBe(false);
});
test('isOverZero-string_-1.ax1', () => {
  expect(isOverZero('-1.ax1')).toBe(false);
});
test('isOverZero-string_1.ax1', () => {
  expect(isOverZero('1.ax1')).toBe(false);
});
test('isOverZero-null', () => {
  expect(isOverZero(null)).toBe(false);
});
test('isOverZero-undefined', () => {
  expect(isOverZero(undefined)).toBe(false);
});
test('isOverZero-object', () => {
  expect(isOverZero({})).toBe(false);
});

import { reLessZero, reOverZero, reZero } from '@/libs/regular/general';
import { isBaseType } from '@/libs/type/common';

export const NAN: number = 0 / 0;

export const isZero = (val: unknown): val is string | number => {
  if (isBaseType(val)) {
    if (typeof val === 'string') {
      return reZero.test(val);
    }
    if (typeof val === 'number') {
      return val === 0 || reZero.test(val.toString());
    }
  }
  return false;
};

export const isLessZero = (val: unknown): val is string | number => {
  if (isBaseType(val)) {
    if (typeof val === 'string') {
      return reLessZero.test(val);
    }
    if (typeof val === 'number') {
      return val < 0;
    }
  }
  return false;
};

export const isOverZero = (val: unknown): val is string | number => {
  if (isBaseType(val)) {
    if (typeof val === 'string') {
      return reOverZero.test(val);
    }
    if (typeof val === 'number') {
      return val > 0;
    }
  }
  return false;
};

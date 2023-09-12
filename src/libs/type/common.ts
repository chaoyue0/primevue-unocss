export type CheckLeftIsExtendsRight<T, R> = T extends R ? true : false;

export const isBaseType = (val: unknown): boolean => {
  return !(
    typeof val === null ||
    typeof val === undefined ||
    typeof val === 'object'
  );
};

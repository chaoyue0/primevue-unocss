import { getCurrentInstance } from 'vue';

export function throttle(
  func: (...args: any[]) => void,
  wait: number
): () => void {
  let timer: number | null;
  const instance = getCurrentInstance();

  return function (...args: any[]) {
    if (!timer) {
      timer = setTimeout(function () {
        timer = null;
        func.apply(instance, args);
      }, wait);
    }
  };
}

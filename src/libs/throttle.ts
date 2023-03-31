import { getCurrentInstance } from 'vue';
export function throttle(func: () => void, wait: number): () => void {
  let timer: number | null;
  const instance = getCurrentInstance();

  return function (...args) {
    if (!timer) {
      timer = setTimeout(function () {
        timer = null;
        func.apply(instance, args);
      }, wait);
    }
  };
}

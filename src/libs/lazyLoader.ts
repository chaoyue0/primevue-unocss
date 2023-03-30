export function lazyLoader(element: HTMLElement) {
  const viewWidth = document.documentElement.clientWidth || window.innerWidth;
  const viewHeight =
    document.documentElement.clientHeight || window.innerHeight;
  console.log('viewWidth', viewWidth);
  console.log('viewHeight', viewHeight);
  const { top, right, bottom, left } = element.getBoundingClientRect();
  const positionDom = isAncestorPositioned(element);
  if (positionDom !== null) {
    const pRight = parseInt(window.getComputedStyle(positionDom).right);
    const pTop = parseInt(window.getComputedStyle(positionDom).top);
    const pLeft = parseInt(window.getComputedStyle(positionDom).left);
    const pBottom = parseInt(window.getComputedStyle(positionDom).bottom);
    console.log('position', { pRight, pTop, pLeft, pBottom });
    console.log('1', pTop + top <= viewHeight);
    return (
      pTop + top >= 0 &&
      pTop + top <= viewHeight &&
      pLeft >= 0 &&
      pLeft <= viewWidth &&
      pBottom + bottom >= 0 &&
      pBottom + bottom <= viewHeight &&
      pRight >= 0 &&
      pRight <= viewWidth
    );
  } else {
    return top >= 0 && left >= 0 && bottom <= viewHeight && right <= viewWidth;
  }
}

function isAncestorPositioned(element: HTMLElement): HTMLElement | null {
  let ancestor = element.parentElement;
  /** inline-style
  console.log('style', ancestor.style);
   */
  while (ancestor && ancestor !== document.body) {
    if (window.getComputedStyle(ancestor).position !== 'static') {
      if (ancestor.contains(element)) {
        return ancestor;
      }
    } else {
      ancestor = ancestor.parentElement;
    }
  }
  return null;
}

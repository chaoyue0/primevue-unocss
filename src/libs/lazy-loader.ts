export function lazyLoader(element: HTMLElement) {
  const viewWidth = document.documentElement.clientWidth || window.innerWidth;
  const viewHeight =
    document.documentElement.clientHeight || window.innerHeight;
  const { top, right, bottom, left } = element.getBoundingClientRect();
  const positionDom = isAncestorPositioned(element);
  if (positionDom !== null) {
    //position:absolute相对于遮罩层情况
    const verticalVisible = top >= 0 && bottom <= viewHeight;
    const horizontalVisible =
      (left > viewWidth ? left - viewWidth >= 0 : left >= 0) &&
      (right > viewWidth ? right - viewWidth <= viewWidth : right <= viewWidth);
    return verticalVisible && horizontalVisible;
  } else {
    return top >= 0 && left >= 0 && bottom <= viewHeight && right <= viewWidth;
  }
}

function isAncestorPositioned(element: HTMLElement): HTMLElement | null {
  let ancestor = element.parentElement;
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

function isAncestorFixed(element: HTMLElement): HTMLElement | null {
  let ancestor = element.parentElement;
  while (ancestor && ancestor !== document.body) {
    if (window.getComputedStyle(ancestor).position === 'fixed') {
      if (ancestor.contains(element)) {
        return ancestor;
      }
    } else {
      ancestor = ancestor.parentElement;
    }
  }
  return null;
}

function getElementMargin(element: HTMLElement) {
  const mt = element.style.marginTop;
  const mr = element.style.marginLeft;
  const mb = element.style.marginBottom;
  const ml = element.style.marginLeft;
  return { mt, mr, mb, ml };
}

function getElementPadding(element: HTMLElement) {
  const pt = element.style.paddingTop;
  const pr = element.style.paddingRight;
  const pb = element.style.paddingBottom;
  const pl = element.style.paddingLeft;
  return { pt, pr, pb, pl };
}

function getElementBorder(element: HTMLElement) {
  const bt = element.style.borderRight;
  const br = element.style.borderRight;
  const bb = element.style.borderBottom;
  const bl = element.style.borderLeft;
  return { bt, br, bb, bl };
}

export function checkImages(imageRef: HTMLImageElement[]) {
  imageRef.map((it: HTMLImageElement) => {
    console.log('it', it);
    it.setAttribute('image-visible', String(lazyLoader(it)));
    if (it.getAttribute('image-visible') === 'false') {
      it.src = '';
    } else {
      //src重新赋值，浏览器不会重复发起请求
      it.src = it.getAttribute('data-src') as string;
    }
  });
}

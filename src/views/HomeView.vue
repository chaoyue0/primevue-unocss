<template>
  <div class="card">
    <h1 class="grid grid-justify-end">So what happened?</h1>
    <p>
      And remember, don't do anything that affects anything, unless it turns out
      you were supposed to, in which case, for the love of God, don't not do it!
      Ow, my spirit! I don't want to be rescued. You guys aren't Santa! You're
      not even robots. I've got to find a way to escape the horrible ravages of
      youth. Suddenly, I'm going to the bathroom like clockwork, every three
      hours. And those jerks at Social Security stopped sending me checks. Now
      'I' have to pay 'them'!
    </p>
    <p>
      I'm going to the bathroom like clockwork, every three hours. And those
      jerks at Social Security stopped sending me checks. Now 'I' have to pay
      'them'!
    </p>
    <form>
      <div>
        <label>Observer enabled:</label><input type="checkbox" checked />
      </div>
      <div>
        <label>Adjust width:</label>
        <input type="range" value="600" min="300" max="1500" step="10" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';
nextTick(() => {
  //ResizeObserver
  if (window.ResizeObserver) {
    const h1Elem = document.querySelector('h1') as HTMLElement;
    const pElem = document.querySelector('p') as HTMLElement;
    const divElem = document.querySelector('.box-center') as HTMLElement;
    const slider = document.querySelector(
      'input[type="range"]'
    ) as HTMLInputElement;
    const checkbox = document.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;

    divElem.style.width = '800px';

    slider.addEventListener('input', () => {
      divElem.style.width = slider.value + 'px';
    });

    const resizeObserver = new ResizeObserver(
      (entries: ResizeObserverEntry[]) => {
        for (const entry of entries) {
          if (entry.contentBoxSize) {
            if (entry.contentBoxSize[0]) {
              h1Elem.style.fontSize =
                Math.max(1.5, entry.contentBoxSize[0].inlineSize / 200) + 'rem';
              pElem.style.fontSize =
                Math.max(1, entry.contentBoxSize[0].inlineSize / 600) + 'rem';
            }
          } else {
            h1Elem.style.fontSize =
              Math.max(1.5, entry.contentRect.width / 200) + 'rem';
            pElem.style.fontSize =
              Math.max(1, entry.contentRect.width / 600) + 'rem';
          }
        }
        console.log('Size changed');
      }
    );

    resizeObserver.observe(divElem);

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        resizeObserver.observe(divElem);
      } else {
        resizeObserver.unobserve(divElem);
      }
    });
  } else {
    console.log('Resize observer not supported!');
  }

  //IntersectionObserver
  const element = document.querySelector('#demo') as HTMLElement;
  console.log('element', element);
  const observer = new IntersectionObserver((entries: any) => {
    console.log('entries', entries);
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        console.log('Element is now visible on screen');
      } else {
        console.log('Element is no longer visible on screen');
      }
    });
  });
  observer.observe(element);
});
</script>

<style scoped>
.box-center {
  margin: 100px auto;
}
</style>

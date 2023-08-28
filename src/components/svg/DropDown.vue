<template>
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path d="M0 0 L10 20 L20 0" fill="none" stroke-width="3" stroke="#606266">
      <animateTransform
        id="flipAnimation"
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 10 10"
        to="180 10 10"
        begin="click"
        dur="0.3s"
        fill="freeze"
      />
    </path>
  </svg>
</template>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const path = document.querySelector('path');
  const flipAnimation = document.getElementById('flipAnimation');
  let isFlipped = false; //判断是否翻转

  path.addEventListener('click', () => {
    if (flipAnimation) {
      if (isFlipped) {
        // 已翻转
        flipAnimation.setAttribute('from', '180 10 10');
        flipAnimation.setAttribute('to', '360 10 10');
      } else {
        // 未翻转
        flipAnimation.setAttribute('from', '0 10 10');
        flipAnimation.setAttribute('to', '180 10 10');
      }
      flipAnimation.beginElement();
      isFlipped = !isFlipped;
    }
  });
});
</script>

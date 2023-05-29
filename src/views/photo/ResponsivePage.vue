<template>
  <h2>像素密度</h2>
  <div class="card">
    <img
      src="https://ik.imgkit.net/ikmedia/women-dress-1.jpg"
      srcset="
        src/image/responsive/large_600.webp  1x,
        src/image/responsive/normal_300.webp 2x,
        src/image/responsive/small_225.webp  3x
      "
    />
  </div>
  <h2>像素宽度</h2>
  <f-row align-h="center">
    <f-col :span="1">
      <img
        src="https://ik.imgkit.net/ikmedia/women-dress-1.jpg"
        srcset="
          https://ik.imgkit.net/ikmedia/women-dress-1.jpg?tr=w-225 225w,
          https://ik.imgkit.net/ikmedia/women-dress-1.jpg?tr=w-300 300w,
          https://ik.imgkit.net/ikmedia/women-dress-1.jpg?tr=w-350 350w,
          https://ik.imgkit.net/ikmedia/women-dress-1.jpg?tr=w-640 640w
        "
        sizes="(max-width: 400px) 100vw, (max-width: 700px) 50vw, (max-width: 900px) 33vw, 225px"
      />
    </f-col>
    <f-col :span="1">
      <img
        src="https://ik.imagekit.io/ikmedia/women-dress-2.jpg"
        srcset="
          https://ik.imagekit.io/ikmedia/women-dress-2.jpg?tr=w-225 225w,
          https://ik.imagekit.io/ikmedia/women-dress-2.jpg?tr=w-300 300w,
          https://ik.imagekit.io/ikmedia/women-dress-2.jpg?tr=w-350 350w,
          https://ik.imagekit.io/ikmedia/women-dress-2.jpg?tr=w-640 640w
        "
        sizes="(max-width: 400px) 100vw, (max-width: 700px) 50vw, (max-width: 900px) 33vw, 225px"
      />
    </f-col>
    <f-col :span="1">
      <img
        src="https://ik.imagekit.io/ikmedia/women-dress-3.jpg"
        srcset="
          https://ik.imagekit.io/ikmedia/women-dress-3.jpg?tr=w-225 225w,
          https://ik.imagekit.io/ikmedia/women-dress-3.jpg?tr=w-300 300w,
          https://ik.imagekit.io/ikmedia/women-dress-3.jpg?tr=w-350 350w,
          https://ik.imagekit.io/ikmedia/women-dress-3.jpg?tr=w-640 640w
        "
        sizes="(max-width: 400px) 100vw, (max-width: 700px) 50vw, (max-width: 900px) 33vw, 225px"
      />
    </f-col>
    <f-col :span="1">
      <img
        src="https://ik.imagekit.io/ikmedia/women-dress-4.jpg"
        srcset="
          https://ik.imagekit.io/ikmedia/women-dress-4.jpg?tr=w-225 225w,
          https://ik.imagekit.io/ikmedia/women-dress-4.jpg?tr=w-300 300w,
          https://ik.imagekit.io/ikmedia/women-dress-4.jpg?tr=w-350 350w,
          https://ik.imagekit.io/ikmedia/women-dress-4.jpg?tr=w-640 640w
        "
        sizes="(max-width: 400px) 100vw, (max-width: 700px) 50vw, (max-width: 900px) 33vw, 225px"
      />
    </f-col>
  </f-row>
  <h2>Picture</h2>
  <picture>
    <source
      srcset="src/image/responsive/small_225.webp"
      media="(max-width: 400px)"
    />
    <source
      srcset="src/image/responsive/normal_300.webp"
      media="(max-width: 900px)"
    />
    <source
      srcset="src/image/responsive/large_600.webp"
      media="(max-width: 1500px)"
    />
    <img src="src/image/responsive/normal_300.webp" />
  </picture>
</template>

<script setup lang="ts">
import FRow from '@/components/layout/flex/FRow.vue';
import FCol from '@/components/layout/flex/FCol.vue';
</script>

<style scoped></style>

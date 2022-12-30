<template>
<div>
  <Back></Back>
  <section class="chapter2">
    <h1 class="chapter2__title" @click="toChapter3">
      真
    </h1>
  </section>
</div>

</template>

<script setup>
import { ref } from 'vue';
import Back from '@/components/Back.vue';
import { useRouter } from 'vue-router';
import track2Audio from '@/assets/track2.mp3'
import { onMounted, onUnmounted } from '@vue/runtime-core';

const router = useRouter();

let canNextChapter = ref(false);

const audio = new Audio(track2Audio);

function toChapter3() {
  if(canNextChapter.value) {
    router.push('/chapter3')
  }
}
function allowNextChapter() {
  canNextChapter.value = true;
  console.log('can jump')
}
function audioInit() {
  audio.currentTime = 0;
  audio.play();
}

onMounted(() => {
  audioInit();
  setTimeout(allowNextChapter,10000)
})

onUnmounted(() => {
  audio.pause();
})
</script>

<style scoped lang="scss">
  .chapter2 {
    height: 100vh;
    background: url('@/assets/3.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    text-shadow: 2px 2px 5px rgba($color: #000000, $alpha: 0.9);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.397);
    }
    &__title {
      font-weight: normal;
      font-size: 2.3rem;
      position: absolute;
      right: 64px;
      bottom: 64px;
      z-index: 1;
      cursor: pointer;
    }
  }
</style>
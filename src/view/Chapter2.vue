<template>
<div>
  <Back></Back>
  <section class="chapter2">
    <h1 class="chapter2__title" @click="toChapter3">
      真
    </h1>
  </section>
  <ToMenu></ToMenu>
  <Page></Page>
  <MusicIndicator :isPlaying="isPlaying"></MusicIndicator>
</div>

</template>

<script setup>
import { ref } from 'vue';
import { onMounted, onUnmounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import Back from '@/components/Back.vue';
import ToMenu from '@/components/ToMenu.vue'
import Page from '@/components/Page.vue'
import MusicIndicator from '@/components/MusicIndicator.vue'
import track2Audio from '@/assets/track2.mp3';

const router = useRouter();

const audio = new Audio(track2Audio);

let canNextChapter = ref(false);
let isPlaying = ref(false);

function toChapter3() {
  if(canNextChapter.value) {
    router.push('/chapter3')
  }
}
function allowNextChapter() {
  canNextChapter.value = true;
}
function audioInit() {
  audio.currentTime = 0;
  audio.play();
  if (audio.paused) {
    isPlaying.value = false;
  }
  else {
    isPlaying.value = true;
  }
}
function audioEnd() {
  audio.pause();
  isPlaying.value = false;
}

onMounted(() => {
  audioInit();
  setTimeout(allowNextChapter,10000)
})

onUnmounted(() => {
  audioEnd();
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
    text-shadow: 2px 2px 5px rgba($color: #000000, $alpha: 0.7);
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
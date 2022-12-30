<template>
<div>
  <Back></Back>
  <section class="chapter3">
    <ToMenu></ToMenu>
    <Page></Page>
    <MusicIndicator :isPlaying="isPlaying"></MusicIndicator>
  </section>
</div>

</template>

<script setup>
import { ref } from 'vue';
import { onMounted, onUnmounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import track3Audio from '@/assets/track3.mp3';
import Back from '@/components/Back.vue';
import ToMenu from '@/components/ToMenu.vue'
import Page from '@/components/Page.vue'
import MusicIndicator from '@/components/MusicIndicator.vue'


const router = useRouter();

const audio = new Audio(track3Audio);

let isPlaying = ref(false);

function toRefer() {
  router.push('/Refer')
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
})

onUnmounted(() => {
  audioEnd()
})

audio.addEventListener('ended',() => {
  toRefer()
})
</script>

<style scoped lang="scss">
  .chapter3 {
    height: 100vh;
    background: url('@/assets/4.png');
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
  }
</style>
<template>
<div>
  <Back></Back>
  <section class="chapter3"></section>
</div>

</template>

<script setup>
import { ref } from 'vue';
import Back from '@/components/Back.vue';
import { useRouter } from 'vue-router';
import track3Audio from '@/assets/track3.mp3'
import { onMounted, onUnmounted } from '@vue/runtime-core';

const router = useRouter();

const audio = new Audio(track3Audio);

function toRefer() {
  router.push('/Refer')
}
function audioInit() {
  audio.currentTime = 0;
  audio.play();
}

onMounted(() => {
  audioInit();
})

onUnmounted(() => {
  audio.pause();
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
    text-shadow: 2px 2px 5px rgba($color: #000000, $alpha: 0.9);
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
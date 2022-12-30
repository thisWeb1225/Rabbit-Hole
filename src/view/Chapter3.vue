<template>
<div>
  <Back></Back>
  <section class="chapter3">

  </section>
</div>

</template>

<script setup>
import { ref } from 'vue';
import Back from '@/components/Back.vue';
import { useRouter } from 'vue-router';
import chapter3Audio from '@/assets/chapter3.mp3'
import { onMounted, onUnmounted } from '@vue/runtime-core';

const router = useRouter();

let canNextChapter = ref(false);

const audio = new Audio(chapter3Audio);

function toRefer() {
  router.push('/Refer')
}
function allowNextChapter() {
  canNextChapter.value = true;
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
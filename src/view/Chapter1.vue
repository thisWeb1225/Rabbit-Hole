<template>
<div>
  <section class="chapter1">
    <h1 class="chapter1__title" @click.self="toChapter2">
      想成
    </h1>
  </section>
</div>

</template>

<script setup>
import { ref } from 'vue';
import { onMounted, onUnmounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import track1Audio from '@/assets/track1.mp3'

const router = useRouter();

const audio = new Audio(track1Audio)

let canNextChapter = ref(false);

function toChapter2() {
  if(canNextChapter.value) {
    router.push('/chapter2')
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
  .chapter1 {
    height: 100vh;
    background: url('@/assets/2.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    text-shadow: 2px 2px 5px rgba($color: #000000, $alpha: 0.8);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
    }

    &__title {
      font-weight: normal;
      font-size: 2.3rem;
      position: absolute;
      right: 64px;
      bottom: 64px;
      z-index: 1;
    }

  }
</style>
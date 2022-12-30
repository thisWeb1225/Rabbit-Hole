<template>
  <div class="back" @click="backLastPage">
    <div class="back__arrow">
      <span class="arrow1 line"></span>
      <span class="arrow2 line"></span>
      <span class="arrow3 line"></span>
    </div>
    <p class="back__text">回上頁</p>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute()

function backLastPage() {
  switch (route.path) {
    case '/chapter1': 
      router.push('/');
      break;
    case '/chapter2': 
      router.push('/chapter1');
      break;
    case '/chapter3': 
      router.push('/chapter2');
      break;
  }
}
</script>

<style scope lang="scss">
  .back {
    display: flex;
    position: absolute;
    left: 64px;
    top: 44px;
    color: white;
    z-index: 1;
    cursor: pointer;

    &__arrow {
      width: 24px;
      position: relative;

      > .line {
        width: 8px;
        height: 2px;
        top: 52%;
        background: white;
        position: absolute;
        border-radius: 999px;
      }

      > .arrow1 {
        transform-origin: left;
        transform: rotate(40deg);
      }

      > .arrow2 {
        width: 16px;
      }

      > .arrow3 {
        transform-origin: left;
        transform: rotate(-40deg);
      }
    }

    &__text {
      padding-left: 2px;
      text-shadow: 2px 2px 5px rgba($color: #000000, $alpha: 0.9);
      font-size: 0.8rem;
    }
  }
</style>
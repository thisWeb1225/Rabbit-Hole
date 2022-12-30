<template>
  <div class="back" @click="backLastPage">
    <div class="back__arrow">
      <span class="arrow1 line"></span>
      <span class="arrow2 line"></span>
      <span class="arrow3 line"></span>
    </div>
    <p class="back__text">BACK</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function backLastPage() {
  router.back()
}
</script>

<style scope lang="scss">
  .back {
    display: flex;
    position: absolute;
    left: 64px;
    top: 64px;
    color: white;
    z-index: 1;

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
      font-size: 0.9rem;
    }
  }
</style>
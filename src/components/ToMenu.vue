<template>
  <div class="tomenu" @click="toMenu">
    <p class="tomenu__text">回首頁</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function toMenu() {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.tomenu {
  position: absolute;
  bottom: 64px;
  left: 64px;
  color: white;
  font-size: 0.8rem;
  z-index: 1;
}
</style>
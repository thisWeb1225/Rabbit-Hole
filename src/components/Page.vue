<template>
  <div class="page">
    <span class="page__circle" :class="{ active : isChapter1 }" @click="toPage('/chapter1')"></span>
    <span class="page__circle" :class="{ active : isChapter2 }" @click="toPage('/chapter2')"></span>
    <span class="page__circle" :class="{ active : isChapter3 }" @click="toPage('/chapter3')"></span>
  </div>
</template>

<script setup>
import { onMounted, onUpdated } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();

let isChapter1 = ref(false);
let isChapter2 = ref(false);
let isChapter3 = ref(false);


function whichPage() {
  if (route.path === '/chapter1') isChapter1.value = true;
  if (route.path === '/chapter2') isChapter2.value = true;
  if (route.path === '/chapter3') isChapter3.value = true;
}

function toPage(path) {
  router.push(path);
}

onMounted(() => {
  whichPage()
})

</script>

<style lang="scss">
  .page {
    display: flex;
    gap: 24px;
    position: absolute;
    bottom: 64px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    &__circle {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid white;

      &.active {
        background: white;
      }
    }
  }
</style>
<template>
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition-group name="fade">
       <component :is="Component" :key="$route.path"></component>
      </transition-group>
    </router-view>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;500&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Noto Sans TC', sans-serif;
}

.container {
  height: 100vh;
  background: black;
  overflow: hidden;
}

.fade-enter-active {
  animation: fade 1s 1s ease-in-out;
}
.fade-leave-active {
  animation: fade 1s ease-in-out reverse;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>



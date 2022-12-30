<template>
  <section class="home" @click="toChapter1">
    <h1 class="home__title">
      兔子洞有夢公司歡迎您
    </h1>
    <!-- <p class="home__tag">開始前，請您先戴上耳機以享受音樂</p> -->
    <p class="home__btn">點擊進入</p>
  </section>

</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function toChapter1() {
  router.push('/chapter1')
}

</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
    background-image: url('@/assets/1.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    display: grid;
    place-content: center;
    text-align: center;
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
      z-index: 1;
    }
    &__tag {
      font-weight: normal;
      margin-top: 16px;
      z-index: 1;
    }
    
    &__btn {
      font-weight: lighter;
      font-size: 0.8rem;
      justify-self: center;
      margin-top: 48px;
      width: 72px;
      height: 72px;
      display: grid;
      place-content: center;
      position: relative;
      background: transparent;
      z-index: 1;
      
      &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: white;
        opacity: 0.4;

        animation: ripple 1.5s infinite;
      }
      
      @keyframes ripple {
        to {
          transform: scale(1.7);
          opacity: 0;
        }
      }
    }
  }

  @keyframes show {
    from {
      opacity: 0;
      transform: translateY(24px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
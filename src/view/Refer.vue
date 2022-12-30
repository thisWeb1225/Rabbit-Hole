<template>
  <section class="refer">
    <p>
      為確保下一位使用者體驗<br/>
      此頁面將於 {{ seconds }} 秒後跳轉至首頁
    </p>
    <br/>
    <p>
      此系列療程加強版「夢 想成 真＋」將於明年推出，請持續追蹤敝公司
       <br/>
      請用手機掃下面QRcode
    </p>
    <img src="../assets/teamQRcode.png" alt="">
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, onUnmounted, ref } from 'vue';

const router = useRouter();
const jumpSeconds = 31;
let seconds = ref(jumpSeconds);
let toHome;

function jumpToHome() {
  if (seconds.value <= 0) {
    router.push('/');
    return;
  }

  seconds.value--;
}

onMounted(() => {
  toHome = setInterval(jumpToHome, 1000)
})

onUnmounted(() => {
  clearInterval(toHome);
  seconds.value = jumpSeconds;
})

</script>

<style lang="scss" scoped>
.refer {
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  color: white;

  > img {
    width: 200px;
    margin-top: 32px;
    justify-self: center;
  }
}
</style>
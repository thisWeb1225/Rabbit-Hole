<template>
  <section class="rabbitHole">
    <div class="rabbitHole__music">
      <h2 class="rabbitHole__musicTitle">音樂欣賞</h2>
      <MusicCard :isPlaying="isPlayingMusic1" @click="playMusic(1)">1. 熊爺爺的地下室</MusicCard>
      <MusicCard :isPlaying="isPlayingMusic2" @click="playMusic(2)">2. 小熊的眼淚</MusicCard>
      <MusicCard :isPlaying="isPlayingMusic3" @click="playMusic(3)">3. 二師兄的酒館</MusicCard>
    </div>
    <div class="rabbitHole__member">
      <h2 class="rabbitHole__memberTitle">團隊成員</h2>
      <ul class="rabbitHole__memberList">
        <li>文字：</li>
        <li>繪圖：</li>
        <li>網站製作：</li>
      </ul>
    </div>
    <div class="rabbitHole__gallery">
      <h2 class="rabbitHole__galleryTitle">圖片廊</h2>
      
    </div>
    
  </section>
</template>

<script setup>
import MusicCard from '@/components/MusicCard.vue'
import music1 from '@/assets/ch1.mp3';
import music2 from '@/assets/ch1+ch2.mp3';
import music3 from '@/assets/ch3.mp3';
import { ref } from 'vue';

let track1 = new Audio(music1);
let track2 = new Audio(music2);
let track3 = new Audio(music3);
let isPlayingMusic1 = ref(false);
let isPlayingMusic2 = ref(false);
let isPlayingMusic3 = ref(false);

function playMusic(i) {
  track1.pause();
  track2.pause();
  track3.pause();
  isPlayingMusic1.value = false;
  isPlayingMusic2.value = false;
  isPlayingMusic3.value = false;

  switch (i) {
    case 1: 
      track1.play();
      isPlayingMusic1.value = true
      break;
    case 2: 
      track2.play();
      isPlayingMusic2.value = true
      break;
    case 3:
      track3.play();
      isPlayingMusic3.value = true
      break;
  }
}

</script>

<style scoped lang="scss">
li {
  list-style-position: inside;
}

.rabbitHole {
  background: #FFFCF3;
  height: 100vh;
  color: #242B82;
  padding: 5vw;
  
  &__music {
    display: flex;
    flex-direction: column;
    gap:16px
  }

  &__member {
    &Title {
      margin-top: 32px;
      margin-bottom: 8px;
    }
  }

  &__gallery {
    &Title {
      margin-top: 32px;
      margin-bottom: 8px;
    }
  }
}
</style>



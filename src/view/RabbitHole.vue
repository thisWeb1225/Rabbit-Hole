<template>
  <section class="rabbitHole">
    <div class="rabbitHole__introdution">
      <h2 class="rabbitHole__introdutionTitle">兔子洞有夢公司</h2>
      <p>
        很高興你喜歡我們唷！<br/>
        「 夢想成真＋」會在明年推出，還有共同概念專輯
        <br/>
        <br/>
        本公司明年即將推出電子版繪本與同概念專輯<br/>
        如果您期待夢想成真歡迎跟我們分享，並持續關注
        <br/>
        <br/>
        若您有意在夢想成真的道路上助兔子洞中的我們一臂之力
        <br/>
        <br/>
        你可以在這找到我們
        <br/>
        <br/>
      </p>
      <ul class="rabbitHole__introdutionList">
        <li>繪圖 : <a href="https://www.instagram.com/fu_shen__/" target="__blank">＠fu_shen__ (IG)</a></li>
        <li>音樂 : <a href="https://streetvoice.com/Nick3190/songs/album/97319505/" target="__blank">街聲連結</a></li>
        <li>文字劇情 : <a href="mailto:110405197@nuuc.edu.tw">110405197@nuuc.edu.tw</a></li>
        <li>網頁製作 : <a href="https://www.instagram.com/this.web/" target="__blank">@this.web (IG)</a></li>
      </ul>
    </div>

    <div class="rabbitHole__music">
      <h2 class="rabbitHole__musicTitle">音樂欣賞</h2>
      <MusicCard :isPlaying="isPlayingMusic1" @click="playMusic(1)">1. 熊爺爺的地下室</MusicCard>
      <MusicCard :isPlaying="isPlayingMusic2" @click="playMusic(2)">2. 小熊的眼淚</MusicCard>
      <MusicCard :isPlaying="isPlayingMusic3" @click="playMusic(3)">3. 佛洛伊德的五臟廟</MusicCard>
      <MusicCard :isPlaying="isPlayingMusic4" @click="playMusic(4)">4. 二師兄的酒館</MusicCard>
    </div>
    

    <div class="rabbitHole__gallery">
      <h2 class="rabbitHole__galleryTitle">圖片廊</h2>
      <div class="rabbitHole__galleryBox">
        <img v-for="(url, i) in gallery" :key="i" :src=url>
      </div>
    </div>
    
  </section>
</template>

<script setup>
import MusicCard from '@/components/MusicCard.vue'
import music1 from '@/assets/gallery/熊爺爺的地下室.mp3';
import music2 from '@/assets/gallery/小熊的眼淚.mp3';
import music3 from '@/assets/gallery/佛洛伊德的五臟廟.mp3';
import music4 from '@/assets/gallery/二師兄的酒館.mp3';
import img1 from '@/assets/gallery/1.png';
import img2 from '@/assets/gallery/2.png';
import img3 from '@/assets/gallery/3.png';
import img4 from '@/assets/gallery/4.png';
import img5 from '@/assets/gallery/5.png';
import img6 from '@/assets/gallery/6.png';
import img7 from '@/assets/gallery/7.png';
import img8 from '@/assets/gallery/8.png';
import img9 from '@/assets/gallery/9.png';
import { ref } from 'vue';

let track1 = new Audio(music1);
let track2 = new Audio(music2);
let track3 = new Audio(music3);
let track4 = new Audio(music4);
let isPlayingMusic1 = ref(false);
let isPlayingMusic2 = ref(false);
let isPlayingMusic3 = ref(false);
let isPlayingMusic4 = ref(false);

function playMusic(i) {
  track1.pause();
  track2.pause();
  track3.pause();
  track4.pause();
  isPlayingMusic1.value = false;
  isPlayingMusic2.value = false;
  isPlayingMusic3.value = false;
  isPlayingMusic4.value = false;

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
    case 4:
      track4.play();
      isPlayingMusic4.value = true
      break;
  }
}

let gallery = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
]

</script>

<style scoped lang="scss">
li {
  list-style-position: inside;
}

.rabbitHole {
  background: #FFFCF3;
  min-height: 100vh;
  color: #242B82;
  padding: 5vw;

  &__introdution {
    margin-bottom: 32px;
    &Title {
      margin-top: 32px;
      margin-bottom: 8px;
    }
    &List {
      & > li > a{
        color: #242B82;
        &:visited {
          color: #242B82;
        }
      }
    }
  }
  
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
    &Box {
      display: flex;
      flex-wrap: wrap;

      & > img {
        flex: 1 1 300px;
        width: 30%;
        height: 100%;
      }
    }
  }
}
</style>



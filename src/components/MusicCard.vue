<template>
  <div class="musicCard">
    <p class="musicCard__title">
      <slot></slot>
    </p>
    <div class="musicCard__play" :class="{playing : isPlaying}">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  isPlaying: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
.musicCard {
  border: 1px solid #242B82;
  border-radius: 0.25em;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  cursor: pointer;

  &__play {
    display: flex;
    gap: 2px;

    & > span {
      width: 5px;
      height: 15px;
      background: #242B82;
      transform: scaleY(0.1);
      transform-origin: bottom;
    }
  }

  &__play.playing {
    & > span {
      animation: play 0.5s infinite alternate linear;

      &:nth-of-type(2) {
        animation: play 0.5s 0.5s infinite alternate linear;
      }
    }
  }
}

@keyframes play {
  to {
    transform: scaleY(1);
  }
}
</style>
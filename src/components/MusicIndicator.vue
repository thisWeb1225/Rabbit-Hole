<template>
  <div class="musicIndicator" :class="{playing : isPlaying}">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script setup>
const props = defineProps({
  isPlaying: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.musicIndicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.8;
  z-index: 1;

  display: flex;
  gap: 4px;

  & > span {
    display: block;
    width: 5px;
    height: 20px;
    background: white;
    transform: scaleY(0.1);
    transform-origin: center;
  }

  &.playing {
    & > span {
      animation: play 0.6s infinite alternate linear;

      &:nth-of-type(2) {
        animation: play 0.6s 0.6s infinite alternate linear;
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
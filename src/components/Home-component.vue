<template>
        <MusicComponent ref="force" class="force" :isPlaying="isPlaying" @click="playPiano"></MusicComponent>
    <main>
        <ScrollerComponent :isPlaying="isPlaying"></ScrollerComponent>
        <!-- <button @click="playPiano">Play Audio</button> -->
    </main>
</template>

<style scoped lang="scss">
.force {
    position: absolute;
    right: 0;
    z-index: 1000;
    // In order for the button to be clickable, it needs to appear on top of anything
}
main {
    color: white;
    overflow: hidden;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    @media (min-width: 320px) and (max-width: 991px) {
        height: 80vh;
    }
        main::after {
        content: '';
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
        background: linear-gradient(180deg, black 40%, black 100%);
        
        @media (min-width: 2048px) and (max-width: 4080px) {
            height: 120px;
            z-index: 6;
        }
    }
}
</style>

<script>
import ScrollerComponent from '../components/Scroller-component';
import MusicComponent from '../components/icons/Music-component.vue';

export default {
  name: "StarWarsText",
  components: {
    ScrollerComponent,
    MusicComponent
  },
  data() {
    return {
      isPlaying: false,
      force: new Audio(require('@/assets/sound/force.wav'))
    };
  },
  methods: {
    playPiano() {
      if (this.isPlaying) {
        this.force.pause();
        this.isPlaying = false;
      } else {
        this.force.play();
        this.isPlaying = true;
        this.force.onended = () => {
          this.isPlaying = false;
        };
      }
    }
  }
};
</script>

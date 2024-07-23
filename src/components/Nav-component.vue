<template>
  <header>
    <nav>
      <div id="logo-container">
        <picture>
          <img 
            :src="currentSaber" 
            alt="image d'un sabre laser" 
            id="lightsaber-small" 
            @click="changeImage"
          />
        </picture>
      </div>
      <div class="hamburger" @click="toggleMenu">
        <div class="upper"></div>
        <div class="middle"></div>
        <div class="lower"></div>
      </div>
      <div class="desktop-menu">
        <router-link v-for="(page, index) in navStore.pages" :key="index" :to="page.link">{{ page.label }}</router-link>
      </div>
    </nav>
  </header>
  <transition name="fade">
    <MobilemenuComponent v-if="hamburgerActive" @closeMenu="toggleMenu"></MobilemenuComponent>
  </transition>
</template>


<style>
header {
  display: flex;
  width: 100%;
  height: 80px;
  @media (min-width: 1080px) and (max-width: 2048px) {
    height: 100px;
  }
  @media (min-width: 2048px) {
    height: 150px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    #logo-container {
      box-shadow: 0 10px 5px 5px rgba(255, 0, 0, 0.13);
      border-radius: 50%;
      @media (min-width: 320px) and (max-width: 550px) {
        width: 50%;
        height: 100%;
      }
      @media (min-width: 550px) and (max-width: 991px) {
        width: 60%;
        height: 100%;
      }
      @media (min-width: 991px) and (max-width: 2048px) {
        width: 75%;
        height: 100%;
      }
      @media (min-width: 2048px) {
        width: 60%;
        height: 80px;
      }
      @media (min-width: 991px) {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .hamburger {
      @media (min-width:991px) {
        display: none;
      }

      @media (min-width:320px) and (max-width: 991px) {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 50px;
        height: 50px;
      }

      .upper, .middle, .lower {
        position: absolute;
        top: 25%;
        width: 25px;
        height: 2px;
        background: linear-gradient(rgba(255, 0, 0, 0.555), rgba(165, 26, 26, 0.24));
      }

      .middle {
        top: 50%;
      }

      .lower {
        top: 75%;
      }
    }

    .desktop-menu {
      @media (min-width:320px) and (max-width: 991px) {
        display: none;
      }
      @media (min-width: 991px) {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 65%;
        height: 50px;
        color: white;
        margin-left: 50vw;
      }
    }

    a {
      font-weight: bold;
      color: #2c3e50;
      @media (min-width: 991px) {
        padding: 0 3vw;
      }

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>

<script setup>
import { useNavStore } from '@/stores/NavStore';
import { ref, onMounted, onUnmounted } from 'vue';
import MobilemenuComponent from '@/components/Mobile-menu-component';

const ignitionSound = new Audio(require('@/assets/sound/ignition.mp3'));
const extinctionSound = new Audio(require('@/assets/sound/extinction.mp3'));
const navStore = useNavStore();
const isExtended = ref(false);
const currentSaber = ref(require('../assets/mobile/saber.png'));
const hamburgerActive = ref(false);

function toggleMenu() {
  hamburgerActive.value = !hamburgerActive.value;
}

function updateSaber() {
    currentSaber.value = isExtended.value 
      ? require('../assets/mobile/saber_on.png')
      : require('../assets/mobile/saber.png');
}

function changeImage() {
  isExtended.value = !isExtended.value;
  updateSaber();
  if (isExtended.value) {
    ignitionSound.play();
  } else {
    extinctionSound.play();
  }
}

function handleResize() {
  updateSaber();
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  updateSaber();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
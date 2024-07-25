<template>
  <header>
    <nav>
      <div id="logo-container">
        <picture>
    <source media="(min-width: 992px)" :srcset="currentSaber">
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
      /* @media (min-width: 320px) and (max-width: 991px) {
        width: 100%;
        height: 100%;
      } */

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
        z-index: 1001;
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
      color: transparent;
      text-decoration: none;
      letter-spacing: 3px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 35px;
      @media (min-width: 991px) {
        margin-right: 30px;
        font-size: 1.5vw;
      }

      &.router-link-exact-active {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: rgba(255, 0, 0, 0.897);
      }
      
      &::before {
        content: '';
        position: absolute;
        bottom: -1px;
        width: 0;
        height: 2px;
        background: linear-gradient(rgba(228, 10, 10, 0.445), red);
        transition: width 0.2s ease;
      }

      &:hover::before {
        width: 100%;
        transition: width 0.2s ease;
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

const smallSaber = require('../assets/mobile/saber.png');
const largeSaber = require('../assets/desktop/saber.png');
const smallSaberOn = require('../assets/mobile/saber_on.png');
const largeSaberOn = require('../assets/desktop/saber_on.png');

function toggleMenu() {
  hamburgerActive.value = !hamburgerActive.value;
}

function updateSaber() {
  if (window.innerWidth > 991) {
    currentSaber.value = isExtended.value ? largeSaberOn : largeSaber;
  } else {
    currentSaber.value = isExtended.value ? smallSaberOn : smallSaber;
  }
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
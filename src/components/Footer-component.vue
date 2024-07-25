<template>
    <footer>
      <div id="logos-container">
        <ul>
          <li v-for="(logo, logoIndex) in footerStore.logos" :key="logoIndex">
            <a :href="logo.link" target="_blank">
              <img :src="logo.path" :alt="logo.alt">
            </a>
          </li>
          <li><a href="/cv_rousselet_kevin.pdf" download="cv_rousselet_kevin.pdf">
            <img :src="footerStore.cvPath" alt="Download CV"></a></li>
        </ul>
      </div>
    </footer>
  </template>

<script setup>
import { useFooterStore } from '@/stores/FooterStore';
const footerStore = useFooterStore();
</script>

<style lang="scss" scoped>
footer {
    display: flex;
    height: 60px;
    width: 95%;
    position: absolute;
    overflow-y: hidden;
    bottom: 0;
    margin: 0 auto;

    #logos-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 0 auto;

        ul {
            display: flex;
            width: 100%;
            margin: 0 auto;
            padding: 0;

            li {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;

                img {
                  width: 50px;
                  height: 50px;
                }
            }
        }
    }
}

img {
  transition: .3s;
}

img:hover {
  @media (min-width: 991px) {
    transition: .3s;
    transform: rotate(360deg);
  }
}
</style>
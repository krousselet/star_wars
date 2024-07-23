<template>
  <div class="overflow">
    <div id="mobile-menu">
      <ul>
        <li v-for="(page, index) in pages" :key="index" @click="closeMenu">
          <router-link :to="page.link">{{ page.label }}</router-link>
        </li>
      </ul>
    </div>
  </div>  
  </template>
  
  <script>
  import { useNavStore } from '@/stores/NavStore';
  import { defineComponent, computed } from 'vue';
  
  export default defineComponent({
    name: 'MobilemenuComponent',
    setup(props, { emit }) {
      const navStore = useNavStore();
      const pages = computed(() => navStore.pages);
  
      const closeMenu = () => {
        emit('closeMenu');
      };
  
      return {
        pages,
        closeMenu
      };
    }
  });
  </script>

  <style scoped>

  @keyframes menu {
    0% {
        display: none;
        opacity: 0;
        transition-property: display opacity;
        transition-duration: .2s;
        transition-behavior: allow-discrete;
    }
    100% {
        display: flex;
        opacity: 1;
    }
  }

  .overflow {
    overflow-y: hidden;
  
    #mobile-menu {
      opacity: 0;
      position: absolute;
      z-index: 50;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      width: 100%;
      height: 90vh;
      top: 0;
      left: 0;
      margin-top: 80px;
      background: black;
      animation: menu .3s linear forwards;

      ul {
          display: flex;
          flex-direction: column;
          list-style: none;
          padding: 0;

          li {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1em 0;
            font-size: 1.5em;

            a {
              text-decoration: none;
              color: rgba(255, 0, 0, 0.719);
            }
          }
      }
    }

  }
  </style>
  
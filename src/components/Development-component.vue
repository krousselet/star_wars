<template>
    <main>
      <swiper-container
      class="swiper-container"
      :modules="[Navigation, Pagination, Autoplay, Mousewheel]"
      :navigation="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :mousewheel="true"
      :effect="'coverflow'"
      :grabCursor="true"
      slidesPerView="auto"
      :breakpoints="{
        1500: {
          slidesPerView: 2
        }
      }"
    >
        <swiper-slide v-for="(image, imageDevelopmentIndex) in developmentStore.images" :key="imageDevelopmentIndex" class="swiper-slide">
          <a :href="image.link" :target="'_blank'"><img :lazy="true" :src="image.path" :alt="image.alt"></a>
        </swiper-slide>
      </swiper-container>
    </main>
  </template>
  
  <script setup>
  import { useDevelopmentStore } from '@/stores/DevelopmentStore';
  import { Navigation, Pagination, Autoplay, Mousewheel  } from 'swiper/modules';
  import { register } from 'swiper/element/bundle';
  const developmentStore = useDevelopmentStore();
  register();
  </script>
  
  <style scoped>
  
  .swiper-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: 320px) and (max-width: 991px) {
      width: 95%;
      margin: 0 auto;
    }
  
    @media (min-width: 991px) and (max-width: 1499px) {
      width: 80%;
      padding: 40px;
    }
  
    @media (min-width: 1499px) and (max-width: 3080px) {
      width: 40%;
    }
  
  
  }
  
  .swiper-slide {
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px); /* For Safari */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    height: 360px;
    width: 300px;
    animation: appear .5s ease forwards;
    @media (min-width: 1499px) and (max-width: 3080px) {
      height: 400px;
      width: 340px;
    }
  
    img {
      border-radius: 15px;
      height: 250px;
      width: 275px;
      @media (min-width: 1499px) and (max-width: 3080px) {
        height: 350px;
      width: 300px;
      }
    }
  }
  </style>
<template>
    <WrapperComponent id="wrapper-component"></WrapperComponent>
    <main>
        <ScrollerComponent></ScrollerComponent>
    </main>
    <canvas id="lightsaberCanvas" width="200" height="80"></canvas>  
</template>

<style scoped lang="scss">
#wrapper-component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 80px;
    width: 50px;
    height: max-content;
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
import WrapperComponent from '../components/icons/Wrapper-component';
import ScrollerComponent from '../components/Scroller-component';

export default {
  name: "StarWarsText",
  components: {
    WrapperComponent,
    ScrollerComponent,
  },
};
</script>

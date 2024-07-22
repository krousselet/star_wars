<template>
    <div class="wrapper">
        <MusicComponent></MusicComponent>
    </div>
</template>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        flex-direction: column;
    }
</style>

<script>
import MusicComponent from '../icons/Music-component.vue';
export default {
  name: 'WrapperComponent',
  components: {
        MusicComponent,
    },
};
</script>
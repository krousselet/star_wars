<template>
    <div class="image-container">
        <img :src="require('@/assets/icons/music-mute.png')" alt="logo d'une note de musique">
    </div>
</template>

<style>
    .image-container {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<script>
    export default {
    name: "MusicComponent",
};
</script>
<template>
    <div class="image-container" @click="changeImage">
        <img :src="currentSrc" :class="{'fade': isFading}" @transitionend="handleTransitionEnd" alt="logo d'une note de musique">
    </div>
</template>

<script>
export default {
    name: "MusicComponent",
    props: {
        isPlaying: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            currentSrc: require('@/assets/icons/music-mute.png'),
            newSrc: require('@/assets/icons/music.png'),
            isFading: false
        };
    },
    watch: {
        isPlaying(newVal) {
            if (newVal) {
                this.currentSrc = this.newSrc;
            } else {
                this.currentSrc = require('@/assets/icons/music-mute.png');
            }
        }
    },
    methods: {
        changeImage() {
            this.isFading = true;
        },
        handleTransitionEnd() {
            if (this.isFading) {
                this.currentSrc = this.isPlaying ? this.newSrc : require('@/assets/icons/music-mute.png');
                this.isFading = false;
            }
        },
    },
};
</script>

<style scoped>
.image-container {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
img {
    transition: opacity 0.1s linear;
}
img.fade {
    opacity: 1;
}
</style>
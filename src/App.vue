<template>
  <Nav></Nav>
  <router-view/>
</template>

<style lang="scss">

body {
    background: black;
}

h1, h2, a, label, input {
    color: white;
}

@keyframes scroll {
    0% {
        top: 0;
        transform: translateZ(0) rotateX(20deg);
    }

    100% {
        top: -7500px;
        transform: translateZ(-2500px) rotateX(21deg);
    }
}

@keyframes appear {
    0% {
    }

    100% {
        opacity: 1;
    }
}

@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>

<script setup>
import Nav from '@/components/Nav-component.vue'
</script>
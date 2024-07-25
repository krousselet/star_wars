<template>
  <Nav></Nav>
  <router-view/>
  <Footer></Footer>
</template>

<style lang="scss">

body {
    background: black;
}

h1, h2, a, label, input {
    color: white;
}

a {
    transition: .2s ease;
}

// THIS IS THE CLASSES TO RESPECT THE DRY PRINCIPLE AND STYLE ELEMENTS THROUGHOUT THE ENTIRE APP

.send {
            transform: translateY(100vh);
            animation: transform-y .3s ease 1.5s forwards;
            background: #000;
            border: 2px solid #ffe81f;
            width: 50%;
            height: 100%;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: color 0.3s, border-color 0.3s;
            font-size: 3.2vw;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: .3s ease;
            font-family: "Bebas Neue", sans-serif;
            color: transparent;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: yellow;
        }

        .send::before {
            transform: skewX(-45deg) translateX(-100%);
            }

            .send::after {
            transform: skewX(-45deg) translateX(100%);
            }

            .send:hover::before {
            transform: skewX(-45deg) translateX(100%);
            }

            .send:hover::after {
            transform: skewX(-45deg) translateX(-100%);
            }

            .send:hover {
            color: #000;
            border-color: #fff;
            background: #b31313;
            transition: .3s ease;
            }
            .send:active {
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.233);
            transition: .3s ease;
            border: red;
        }

.outlined-text {
    font-family: "Bebas Neue", sans-serif;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: yellow;
}

h2, label, a {
    color: transparent;
    font-family: "Bebas Neue", sans-serif;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    letter-spacing: 3px;
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
        opacity: 0;
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

// MAKE SURE TO APPLY THE TRANSFORM TO THE SELECTED ELEMENT WITH THE SAME VALUES AS BELOW AND AN OVERFLOW HIDDING TO THE PARENT
@keyframes transform-x {
    0% {
        transform: translateX(-100vw);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes transform-y {
    0% {
        transform: translateY(100vh);
    }

    100% {
        transform: translateY(0);
    }
}
</style>

<script setup>
import Nav from '@/components/Nav-component.vue'
import Footer from '@/components/Footer-component.vue'
</script>
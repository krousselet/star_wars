<template>
    <div :class="{'shake': showError, 'red-background': showError}" id="form-container">
        <transition name="fade">
            <div v-if="!isCorrect">
                <form @submit.prevent="checkAnswer">
                    <label id="kenobi" class="outlined-text">Hello there...</label>
                    <MusicComponent ref="kenobiVoice" class="kenobi-voice" :isPlaying="isPlaying" @click="playVoice"></MusicComponent>
                    <div class="field-container one">
                        <input type="radio" id="option1" value="option1" v-model="selectedOption" />
                        <label for="option1">What's up ?</label>
                    </div>
                    <div class="field-container two">
                        <input type="radio" id="option2" value="general kenobi" v-model="selectedOption" />
                        <label for="option2">General Kenobi</label>
                    </div>
                    <div class="field-container three">
                        <input type="radio" id="option3" value="option3" v-model="selectedOption" />
                        <label for="option3">Petunia</label>
                    </div>
                    <button type="submit" class="send outlined-text">Envoyer</button>
                </form>
            </div>
            <DescriptionComponent v-else></DescriptionComponent>
        </transition>
    </div>
</template>

<style scoped>
p {
    color: white;
}

input[type="radio"] {
  display: none;
}

input[type="radio"] + label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  display: inline-block;
  color: #444;
  font-size: 16px;
}

input[type="radio"] + label::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #444;
  background: #fff;
  transition: all 0.3s;
}

/* Style for the checked state */
input[type="radio"]:checked + label::before {
  background: rgba(255, 0, 0, 0.582);
  border-color: black;
}

input[type="radio"]:checked + label::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: black;
}

#form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s;
    width: 90%;
    position: relative;
    height: 400px;
    opacity: 0;
    animation: appear .3s ease forwards;
    margin: 0 auto;

    form {
        position: absolute;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        @media (min-width: 320px) and (max-width: 991px) {
            width: 100%;
        }
        @media (min-width: 991px) and (max-width: 2048px) {
            width: 75%;
            font-size: 34px;
            height: 90%;
        }
        @media (min-width: 2048px) {
            width: 50%;
            font-size: 54px;
            height: 90%;
        }

        #kenobi {
            transform: translateX(-100vw);
            animation: transform-x .5s ease .5s forwards;
            @media (min-width: 320px) and (max-width: 991px) {
                font-size: 24px;
                padding: 10px;
                margin: 0 auto;
            }
        }
        .kenobi-voice {
            transform: translateX(-100vw);
            animation: transform-x .5s ease .7s forwards;
        }
        .field-container {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            font-family: "Bebas Neue", sans-serif;


            label {
                width: 50%;
            }

            textarea {
                width: 50%;
            }
        }

        .one {
            transform: translateX(-100vw);
            animation: transform-x .5s ease .7s forwards;
        }

        .two {
            transform: translateX(-100vw);
            animation: transform-x .5s ease 1s forwards;
        }

        .three {
            transform: translateX(-100vw);
            animation: transform-x .5s ease 1.3s forwards;
        }

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
    }

    #description {
        position: absolute;
        opacity: 0;
        animation: appear .5s linear .7s forwards;
    }

}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.shake {
    animation: shake 0.5s;
    animation-iteration-count: 15;
    border-radius: 7px;
}

.red-background {
    background: linear-gradient(rgba(255, 0, 0, 0.61), rgba(211, 19, 19, 0.89));
    border-radius: 7px;
    transition: .3s ease;
}

@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-5px);
    }
    75% {
        transform: translateX(5px);
    }
}

@keyframes appear {
    to {
        opacity: 1;
    }
}
</style>

<script>
import DescriptionComponent from '../Description-component.vue';
import MusicComponent from '../icons/Music-component.vue';

export default {
    name: 'KenobiComponent',
    components: {
        DescriptionComponent,
        MusicComponent,
    },
    data() {
        return {
            selectedOption: '',
            isCorrect: false,
            showError: false,
            isPlaying: false,
            faith: new Audio(require('@/assets/sound/faith.mp3')),
            kenobi: new Audio(require('@/assets/sound/hello-there.mp3'))
        };
    },
    methods: {
        checkAnswer() {
            if (this.selectedOption === 'general kenobi') {
                this.isCorrect = true;
                this.showError = false;
            } else {
                this.faith.play();
                this.triggerErrorEffect();
            }
        },
        triggerErrorEffect() {
            this.showError = true;
            setTimeout(() => {
                this.showError = false;
            }, 500);
        },
        playVoice() {
            this.kenobi.play();
            this.isPlaying = true;
            this.kenobi.onended = () => {
                this.isPlaying = false;
            };
        }
    }
};
</script>
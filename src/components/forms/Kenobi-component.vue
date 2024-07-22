<template>
    <div :class="{'shake': showError, 'red-background': showError}" id="form-container">
        <transition name="fade">
            <div v-if="!isCorrect">
                <form @submit.prevent="checkAnswer">
                    <label>Hello there...</label>
                    <div>
                        <input type="radio" id="option1" value="option1" v-model="selectedOption" />
                        <label for="option1">What's up ?</label>
                    </div>
                    <div>
                        <input type="radio" id="option2" value="general kenobi" v-model="selectedOption" />
                        <label for="option2">General Kenobi</label>
                    </div>
                    <div>
                        <input type="radio" id="option3" value="option3" v-model="selectedOption" />
                        <label for="option3">Petunia</label>
                    </div>
                    <button type="submit">Envoyer</button>
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

#form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s;
    height: 90vh;
    position: relative;

    form {
        position: absolute;
        transform: translate(-50%, -50%);
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
    background-color: red;
    border-radius: 7px;
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

export default {
    name: 'KenobiComponent',
    components: {
        DescriptionComponent
    },
    data() {
        return {
            selectedOption: '',
            isCorrect: false,
            showError: false,
            faith: new Audio(require('@/assets/sound/faith.mp3'))
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
        }
    }
};
</script>

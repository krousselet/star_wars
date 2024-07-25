<template>
        <form name="contact" method="POST" data-netlify="true" action="https://formspree.io/f/xrgnyjkl">
            <input type="hidden" name="form-name" value="contact" />
            <div class="field-container">
                <label for="name">{{ contactStore.labels[0] }}</label><input type="text" name="name" id="name" required autocomplete="true" />
            </div>
            <div class="field-container">
                <label for="email">{{ contactStore.labels[1] }}</label><input type="email" name="email" required id="email" autocomplete="true" />
            </div>
            <div class="field-container">
                <label for="message">{{ contactStore.labels[2] }}</label><textarea name="message" id="message" required autocomplete="true"></textarea>
            </div>
            <div>
                <button class="send" type="submit">Envoyer</button>
            </div>
        </form>
</template>
    
<script setup>
import { useContactFormStore } from '../stores/ContactFormStore';
    
const contactStore = useContactFormStore();
</script>
    
<style lang="scss" scoped>
form {
    display: flex;
    font-size: 16px;
    width: 90%;
    height: 100%;
    padding: 5px;
    margin-top: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    height: 100%;
    opacity: 0;
    animation: appear .5s ease forwards;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.075);
    border-radius: 7px;
    @media (min-width: 991px) and (max-width: 1499px) {
        font-size: 24px;
        width: 75%;
    }
    @media (min-width: 1499px) and (max-width: 3080px) {
        font-size: 32px;
        width: 50%;
    }

    .field-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 80px;
        margin: 0 auto;
        opacity: 0;
        animation: appear .3s linear forwards;

        label, input {
            width: 50%;
        }

        input, textarea {
            color: white;
            border: 0;
            border-bottom: 1px solid white;
            background: transparent;
        }

        textarea {
            width: 100%;
            min-height: 24px;
        }
    }
    div {
        width: 100%;
        overflow-y: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            margin-top: 50px;
            @media (min-width: 991px) {
                    padding: 25px;
                }
        }
    }

}
.send {
    animation: transform-y .3s ease 1.2s forwards;
}

$number-of-fields: 3;
$delay-step: 0.3s;

@for $i from 1 through $number-of-fields {
  .field-container:nth-of-type(#{$i}) {
    animation-delay: $i * $delay-step;
  }

  .field-container:nth-of-type(#{$i}) label {
    animation-delay: $i * $delay-step;
  }

  .field-container:nth-of-type(#{$i}) input,
  .field-container:nth-of-type(#{$i}) textarea {
    animation-delay: ($i * $delay-step) + 0.3s; // Adjust delay for inputs and textareas
  }
}
    </style>
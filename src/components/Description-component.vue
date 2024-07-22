<template>
    <div id="description">
        <div id="title-container">
            <h2>Bienvenue à toi !</h2>
        </div>
        <div class="paragraph-container">
            <p>Je m'appelle Kevin</p>
        </div>
    </div>
</template>

<style scoped>
p {
    color: white;
}

#description {
    position: absolute;
    opacity: 0;
    animation: appear .5s linear .7s forwards;

    #title-container {
        opacity: 0;
        animation: appear .3s linear 1s forwards;
    }

    .paragraph-container {
        opacity: 0;
        animation: appear .3s linear 1.2s forwards;
    }
}

</style>
<script>
export default {
    name: 'DescriptionComponent',
}
</script>
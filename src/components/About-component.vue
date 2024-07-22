<template>
    <KenobiComponent></KenobiComponent>
</template>

<style scoped>
    #kenobi-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<script>
import KenobiComponent from '../components/forms/Kenobi-component';

export default {
  name: "StarWarsText",
  components: {
    KenobiComponent,
  },
};
</script>
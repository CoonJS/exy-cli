<script>
  import VueLogo from './assets/img/VueLogo.png';

  export default {
    data() {
      return {
        vueLogoSrc: VueLogo
      };
    }
  }
</script>

<template>
    <div style="display: flex; justify-content: center; align-items: center; flex-direction: column">
        <h1 style="font-family: monospace;">POWERED BY EXY CLI</h1>
        <img :src="vueLogoSrc" alt="Vue" />
    </div>
</template>

<style scoped>

</style>


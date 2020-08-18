<template>
  <div id="app">
    <form-main></form-main>
  </div>
</template>

<script>
import formMain from "./components/form.vue";
export default {
  components: {
    formMain
  },
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="sass"></style>

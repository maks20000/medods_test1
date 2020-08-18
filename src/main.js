import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
Vue.config.devtools = true;
Vue.use(Vuelidate);

new Vue({
  el: "#app",
  render: h => h(App)
});

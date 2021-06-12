import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from "./router";
import BaseComponent from "@/components/global";

Vue.use(BaseComponent)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

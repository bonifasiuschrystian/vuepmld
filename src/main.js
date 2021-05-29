import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
Vue.config.productionTip = false
Vue.component('modal', {
    template: '#modal-template'
  })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

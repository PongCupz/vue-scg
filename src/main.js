// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles/style.css'
import './assets/styles/colors/green.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueStickyKit from 'vue-stickykit'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.component('v-icon', Icon)
Vue.use(VueStickyKit)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GG_KEY,
    libraries: 'places' // necessary for places input
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

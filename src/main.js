import Vue from 'vue'

import app from './app.vue'
import router from './router'
import './mock/mockServer'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
})

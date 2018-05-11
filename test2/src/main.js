// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(Bootstrap)

import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
require('moment/locale/tr')
Vue.use(VueMoment, { moment })

import fa from 'fontawesome-vue'
Vue.use(fa)

import Lang from 'vue-lang'
var locales = {
  'tr': require('./locale/tr.json'),
  'en': require('./locale/en.json')
}
Vue.use(Lang, {lang: 'en', locales: locales})

import BotUI from 'botui'
Vue.use(BotUI)

import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UI-123123-12',
  router
})

import Vuex from 'vuex'
Vue.use(Vuex)

import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";
Vue.use(VueFormGenerator)

import VueRecaptcha from 'vue-recaptcha';
Vue.use(VueRecaptcha)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

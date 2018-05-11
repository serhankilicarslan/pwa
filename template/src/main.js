{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

{{#isEnabled plugins 'bootstrap'}}
import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(Bootstrap);
{{/isEnabled}}

{{#isEnabled plugins 'momentjs'}}
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
require('moment/locale/tr')
Vue.use(VueMoment, { moment })
{{/isEnabled}}

{{#isEnabled plugins 'fontawesome'}}
import fa from 'fontawesome-vue';
Vue.use(fa);
{{/isEnabled}}

{{#isEnabled plugins 'multilanguage'}}
import Lang from 'vue-lang'
var locales = {
  "tr" : require("./locale/tr.json"),
  "en" : require("./locale/en.json")
}
Vue.use(Lang, {lang: 'en', locales: locales})
{{/isEnabled}}

{{#isEnabled plugins 'botui'}}
import BotUI from 'botui'
Vue.use(BotUI);
{{/isEnabled}}

{{#isEnabled plugins 'vue-analytics'}}
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics)
{{/isEnabled}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

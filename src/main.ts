import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


import GloblePlugin from './plugins/globle'



/*********************************************************
 * axios
 *********************************************************/
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);


/*********************************************************
 * jquery
 *********************************************************/

import 'expose-loader?$!expose-loader?jQuery!jquery'
import $ from 'jquery';


/*********************************************************
 * moment
 *********************************************************/

Vue.use(require('vue-moment'))


Vue.use(GloblePlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


import GloblePlugin from './plugins/global'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


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

Vue.use(require('vue-moment'));


// import VuetifyDaterangePicker from "vuetify-daterange-picker";
// import "vuetify-daterange-picker/dist/vuetify-daterange-picker.css";
// Vue.use(VuetifyDaterangePicker as any);


Vue.use(GloblePlugin);

Vue.config.productionTip = false


import VueApexCharts  from 'vue-apexcharts';

Vue.component('apexchart', VueApexCharts)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

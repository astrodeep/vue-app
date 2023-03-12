import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vueBem from '@verstaerker/vue-bem';
import router from './router'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import VuePaginate from 'vue-paginate'
import './assets/style/style.scss'
Vue.use(
  vueBem,{
  namespace: '',
  blockSource: 'name',
  method: '$bem',
  hyphenate: {
    blockAndElement: true,
    modifier: true,
  },
  delimiters: {
    element: '__',
    modifier: '_',
  }
},VuePaginate,
VueLodash, { name: 'custom' , lodash: lodash });

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

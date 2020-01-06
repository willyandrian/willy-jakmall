// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import persistentState from 'vue-persistent-state'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

let initialState = {
  deliveryState: {
    email: '',
    dropshipperName: '',
    phoneNumber: '',
    dropshipperPhoneNumber: '',
    deliveryAddress: '',
    dropship: true
  },
  shipmentState: {
    id: 0,
    name: 'GO-SEND',
    desc: '15,000',
    estimation: 'today',
    price: 15000
  },
  paymentState: {
    id: 0,
    name: 'e-Wallet',
    desc: '1,500,000 left'
  }
}

library.add(faArrowLeft, faCheck, faTimes)

Vue.use(VeeValidate)
Vue.use(persistentState, initialState)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
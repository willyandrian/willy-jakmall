import Vue from 'vue'
import Router from 'vue-router'
import Delivery from '@/components/pages/delivery/Delivery'
import Payment from '@/components/pages/payment/Payment'
import Finish from '@/components/pages/finish/Finish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Delivery',
      component: Delivery
    },
    {
    	path: '/payment',
    	name: 'Payment',
    	component: Payment
    },
    {
      path: '/finish',
      name: 'Finish',
      component: Finish
    }
  ]
})

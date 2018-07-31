import Vue from 'vue'

import Router from 'vue-router'

import About from '@/components/About'
import Double from '@/components/Double'
import App from '@/App'

Vue.use(Router)

export default new Router({

routes: [

  {

    path: '/',

    name: 'Home',

    component: Double

  },
  {
    path: '/about',
    name: 'About',
    component: About
  }

]

})

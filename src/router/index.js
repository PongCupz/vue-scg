import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/Profile'
import Function1 from '@/components/Function1'
import Function2 from '@/components/Function2'
import GGmap from '@/components/ggmap'
import Linebot from '@/components/linebot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/function1',
      name: 'function1',
      component: Function1
    },
    {
      path: '/function2',
      name: 'function2',
      component: Function2
    },
    {
      path: '/ggmap',
      name: 'ggmap',
      component: GGmap
    },
    {
      path: '/linebot',
      name: 'linebot',
      component: Linebot
    }
  ]
})

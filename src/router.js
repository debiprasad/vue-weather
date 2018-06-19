import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Details from './views/Details.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search/:keyword',
      name: 'search',
      component: Search
    },
    {
      path: '/weather/:woeid',
      name: 'details',
      component: Details
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home/users',
          name: 'users',
          component: () => import('./views/Users.vue')
        },
        {
          path: '/home/introduction',
          name: 'introduction',
          component: () => import('./components/Introduction.vue')
        },
        {
          path: '/home/d3',
          name: 'd3',
          component: () => import('./components/D3.vue')
        },
        {
          path: '/home/quill',
          name: 'quill',
          component: () => import('./components/Quill.vue')
        }
      ]
    },
    {
      path: '/basic',
      name: 'basic',
      component: Home,
      children: [
        {
          path: '/basic/hello',
          name: 'hello',
          component: () => import('./components/Hello.vue')
        },
        {
          path: '/basic/hello2',
          name: 'hello2',
          component: () => import('./components/Hello2.vue')
        }
      ]
    },
    {
      path: '/icons',
      name: 'icons',
      component: Home,
      children: [
        {
          path: '/icons/iconfont',
          name: 'iconfont',
          component: () => import('./components/Icons/IconFont.vue')
        },
        {
          path: '/icons/materialdesignicons',
          name: 'materialdesignicons',
          component: () => import('./components/Icons/MaterialDesignIcons.vue')
        }
      ]
    },
    {
      path: '/charts',
      name: 'charts',
      component: Home,
      children: [
        {
          path: '/charts/echarts',
          name: 'echarts',
          component: () => import('./components/Charts/ECharts.vue')
        },
        {
          path: '/basic/bar',
          name: 'bar',
          component: () => import('./components/Hello2.vue')
        },
        {
          path: '/basic/pie',
          name: 'pie',
          component: () => import('./components/Hello2.vue')
        }
      ]
    },
    {
      path: '/zoom',
      name: 'zoom',
      component: Home,
      children: [
        {
          path: '/zoom/openlayer',
          name: 'openlayer',
          component: () => import('./components/Hello.vue')
        },
        {
          path: '/basic/openseadragon',
          name: 'openseadragon',
          component: () => import('./components/Hello2.vue')
        },
        {
          path: '/basic/leaflet',
          name: 'leaflet',
          component: () => import('./components/Hello2.vue')
        }
      ]
    },
    {
      path: '*',
      name: 'notfound',
      component: () => import('./views/NotFound.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('./views/Join.vue')
    }
  ]
})

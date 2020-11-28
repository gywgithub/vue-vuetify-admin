import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
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
          path: '/home/guide',
          name: 'guide',
          component: () => import('./components/Guide.vue')
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
      path: '/markdown',
      name: 'markdown',
      component: Home,
      children: [
        {
          path: '/markdown/showdown',
          name: 'showdown',
          component: () => import('./components/Markdown/Showdown.vue')
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
          path: '/charts/vega-charts',
          name: 'vega-charts',
          component: () => import('./components/Charts/VegaCharts.vue')
        },
        {
          path: '/charts/d3-charts',
          name: 'd3-charts',
          component: () => import('./components/Charts/D3Charts.vue')
        }
      ]
    },
    {
      path: '/maps',
      name: 'maps',
      component: Home,
      children: [
        {
          path: '/maps/openlayers',
          name: 'openlayers',
          component: () => import('./components/Maps/OpenLayers.vue')
        },
        {
          path: '/maps/openseadragon',
          name: 'openseadragon',
          component: () => import('./components/Maps/OpenSeadragon.vue')
        },
        {
          path: '/maps/leaflet',
          name: 'leaflet',
          component: () => import('./components/Maps/Leaflet.vue')
        }
      ]
    },
    {
      path: '/schema',
      name: 'schema',
      component: Home,
      children: [
        {
          path: '/schema/vuetifyjsonschema',
          name: 'vuetifyjsonschema',
          component: () => import('./components/Schema/VuetifyJSONSchema.vue')
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
      path: '/join',
      name: 'join',
      component: () => import('./views/Join.vue')
    }
  ]
})

router.beforeEach((to: any, from, next) => {
  sessionStorage.setItem('pathName', to.name)
  if (to.name === 'login' || to.name === 'join') {
    next()
  } else {
    if (sessionStorage.getItem('userInfo')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
})

export default router

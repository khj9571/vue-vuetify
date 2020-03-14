import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // meta: {
      //   title: 'Home',
      //   keepAlive: true
      // }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'Home',
        keepAlive: true
      },
      // props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import(/* webpackChunkName: "about" */ './components/layouts/SubMain.vue'),


      // // 중첩된 라우트는 children 속성으로 하위 라우트를 정의할 수 있다.
      children: [
        {
          path: 'events', name: 'events',
          component: () => import(/* webpackChunkName: "about" */ './components/layouts/SubMain.vue'),
          children: [
            {
              path: 'loadingEvent', name: 'loadingEvent',
              component: () => import(/* webpackChunkName: "about" */ './views/components/events/LoadingEvent.vue')
            }
          ]
        },
        {
          path: 'table', name: 'table',
          component: () => import(/* webpackChunkName: "about" */ './components/layouts/SubMain.vue'),
          children: [
            {
              path: 'dataIterators', name: 'dataIterators',
              component: () => import(/* webpackChunkName: "about" */ './views/components/table/DataIterators.vue')
            },
            {
              path: 'simpleTables', name: 'simpleTables',
              component: () => import(/* webpackChunkName: "about" */ './views/components/table/SimpleTables.vue')
            },
            {
              path: 'dataTables', name: 'dataTables',
              component: () => import(/* webpackChunkName: "about" */ './views/components/table/DataTables.vue')
            }
          ]
        },
        {
          path: 'dateRangePicker', name: 'dateRangePicker',
          component: () => import(/* webpackChunkName: "about" */ './views/components/DateRangePicker.vue'),
          meta: {
            title: 'DateRangePicker',
            keepAlive: false
          }
        },
      ]
    },
    {
      path: '/samples',
      name: 'sample',
      component: () => import(/* webpackChunkName: "about" */ './components/layouts/SubMain.vue'),


      // // 중첩된 라우트는 children 속성으로 하위 라우트를 정의할 수 있다.
      children: [
        {
          path: 'api', name: 'api',
          component: () => import(/* webpackChunkName: "about" */ './views/examples/ApiExam.vue')
        },
        {
          path: 'filter',
          name: 'filter',
          component: () => import(/* webpackChunkName: "about" */ './views/examples/FilterExam.vue')
        },
        {
          path: 'directive',
          name: 'directive',
          component: () => import(/* webpackChunkName: "about" */ './views/examples/DirectiveExam.vue')
        },
        {
          path: 'store',
          name: 'store',
          component: () => import(/* webpackChunkName: "about" */ './views/examples/StoreExam.vue')
        },
        {
          path: 'layout',
          name: 'layout',
          component: () => import(/* webpackChunkName: "about" */ './components/layouts/SubMain.vue'),
          children:[
            {
              path: 'layout1',
              name: 'layout1',
              component: () => import(/* webpackChunkName: "about" */ './views/examples/layouts/Layout1.vue')
            },
            {
              path: 'layout2',
              name: 'layout2',
              component: () => import(/* webpackChunkName: "about" */ './views/examples/layouts/Layout2.vue')
            },
            {
              path: 'layout3',
              name: 'layout3',
              component: () => import(/* webpackChunkName: "about" */ './views/examples/layouts/Layout3.vue')
            },
            {
              path: 'layout4',
              name: 'layout4',
              component: () => import(/* webpackChunkName: "about" */ './views/examples/layouts/Layout4.vue')
            }
          ]
        },

        {
          path: 'charts', name: 'charts',
          component: () => import(/* webpackChunkName: "about" */ './components/layouts/SubMain.vue'),
          children: [
            {
              path: 'area', name: 'area',
              component: () => import(/* webpackChunkName: "about" */ './views/examples/charts/AreaExample.vue')
            },
            {
              path: 'bar', name: 'bar',
              component: () => import(/* webpackChunkName: "about" */ './views/examples/charts/BarExample.vue')
            },
            {
              path: 'bubble', name: 'bubble',
              component: () => import(/* webpackChunkName: "about" */ './views/examples/charts/BubbleExample.vue')
            },
            {
              path: 'column', name: 'column',
              component: () => import(/* webpackChunkName: "about" */ './views/examples/charts/ColumnExample.vue')
            },
            {
              path: 'donut', name: 'donut',
              component: () => import(/* webpackChunkName: "about" */ './views/examples/charts/DonutExample.vue')
            },
            {
              path: 'heatmap', name: 'heatmap',
              component: () => import(/* webpackChunkName: "about" */ './views/examples/charts/HeatmapExample.vue')
            },
            {
              path: 'line', name: 'line',
              component: () => import(/* webpackChunkName: "about" */ './views/examples/charts/LineExample.vue')
            },
            {
              path: 'mixed', name: 'mixed',
              component: () => import(/* webpackChunkName: "about" */ './views/examples/charts/MixedExample.vue')
            },
            {
              path: 'radialbar', name: 'radialbar',
              component: () => import(/* webpackChunkName: "about" */ './views/examples/charts/RadialBarExample.vue')
            },
            {
              path: 'scatter', name: 'scatter',
              component: () => import(/* webpackChunkName: "about" */ './views/examples/charts/ScatterExample.vue')
            }
          ]
        },
        // {
        //   path: 'chart',
        //   name: 'chart',
        //   component: () => import(/* webpackChunkName: "about" */ './views/examples/ChartExam.vue')
        // }
      ]
    }
  ]
})

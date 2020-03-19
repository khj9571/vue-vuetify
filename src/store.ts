import Vue from 'vue'
import Vuex from 'vuex'
import { httpService } from '@/plugins/global'

import { modules } from '@/modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: modules,
  state: {
    munuItems: [
      {
        key: "1",
        name: "Home",
        router: "home"
      },
      {
        key: "2",
        name: "About",
        router: "about"
      },
      {
        key: "3",
        name: "컴포넌트",
        router: "",
        children: [
          {
            key: "3-1",
            name: "Events",
            router: "",
            children: [
              {
                key: "3-1-1",
                name: "LoadingEvent",
                file: "png",
                router: "loadingEvent"
              }
            ]
          },
          {
            key: "3-2",
            name: "Table",
            router: "",
            children: [
              {
                key: "3-2-1",
                name: "Data Iterator",
                file: "png",
                router: "dataIterators"
              },
              {
                key: "3-2-2",
                name: "Simple Table",
                file: "png",
                router: "simpleTables"
              },
              {
                key: "3-2-3",
                name: "Data Table",
                file: "png",
                router: "dataTables"
              }
            ]
          },
          {
            key: "3-3",
            name: "DateRangePicker",
            file: "png",
            router: "dateRangePicker"
          },
          {
            key: "3-4",
            name: "CodeComboBox",
            file: "png",
            router: "codeComboBox"
          }
        ]
      },
      {
        key: "4",
        name: "Example",
        router: "",
        children: [
          {
            key: "4-1",
            name: "Api Exam",
            file: "png",
            router: "api"
          },
          {
            key: "4-2",
            name: "Filter",
            file: "txt",
            router: "filter"
          },
          {
            key: "4-3",
            name: "Directive",
            file: "js",
            router: "directive"
          },
          {
            key: "4-4",
            name: "Store",
            file: "json",
            router: "store"
          },
          {
            key: "4-5",
            name: "Layouts",
            router: "layouts",
            children: [
              {
                key: "4-5-1",
                name: "Layout1",
                file: "png",
                router: "layout1"
              },
              {
                key: "4-5-2",
                name: "Layout2",
                file: "png",
                router: "layout2"
              },
              {
                key: "4-5-3",
                name: "Layout3",
                file: "png",
                router: "layout3"
              },
              {
                key: "4-5-4",
                name: "Layout4",
                file: "png",
                router: "layout4"
              }
            ]
          },
          {
            key: "4-6",
            name: "Chart",
            router: "charts",
            children: [
              {
                key: "4-6-1",
                name: "AreaExample",
                file: "png",
                router: "area"
              },
              {
                key: "4-6-2",
                name: "BarExample",
                file: "txt",
                router: "bar"
              },
              {
                key: "4-6-3",
                name: "BubbleExample",
                file: "js",
                router: "bubble"
              },
              {
                key: "4-6-4",
                name: "ColumnExample",
                file: "json",
                router: "column"
              },
              {
                key: "4-6-5",
                name: "DonutExample",
                file: "json",
                router: "donut"
              },
              {
                key: "4-6-6",
                name: "HeatmapExample",
                file: "json",
                router: "heatmap"
              },
              {
                key: "4-6-7",
                name: "LineExample",
                file: "json",
                router: "line"
              },
              {
                key: "4-6-8",
                name: "MixedExample",
                file: "json",
                router: "mixed"
              },
              {
                key: "4-6-9",
                name: "RadialBarExample",
                file: "json",
                router: "radialbar"
              },
              {
                key: "4-6-10",
                name: "ScatterExample",
                file: "json",
                router: "scatter"
              }
            ]
          }
        ]
      },
      {
        key: "5",
        name: "메뉴7",
        file: "md",
        router: ""
      },
      {
        key: "6",
        name: "메뉴8",
        file: "js",
        router: ""
      },
      {
        key: "7",
        name: "메뉴9",
        file: "txt",
        router: ""
      }
    ],
    selectedMenuItems: [
      {
        key: "1",
        name: "Home",
        router: "home"
      }
    ],
    currentIndex: 0,
    isLogin: false,
    userInfo: {}
  },
  getters: {
    getSelectedMenuItem: (state) => {
      return state.selectedMenuItems
    },
    getCurrentMenuItem: (state) => {
      const { length } = state.selectedMenuItems;
      if (length == 0) return null
      return length - 1
    },
    getCurrentIndex: (state) => {
      return state.currentIndex
    },
    getMenuItem: (state) => {
      return state.munuItems
    },
    getIsLogin: (state) => {
      return state.isLogin
    },
    getUserInfo: (state) => {
      return state.userInfo
    }
  },
  mutations: {
    addMenuItem(state, item) {

      if (item === undefined) return

      let currentIdx = 0;
      let hasItem = state.selectedMenuItems.some((d: any, idx: number) => {
        if (d.key == item.key) {
          currentIdx = idx
          return true
        }
        return false;
      })

      if (!hasItem) {
        state.selectedMenuItems = [...state.selectedMenuItems, item]
        const { length } = state.selectedMenuItems;
        state.currentIndex = length - 1
      } else {
        state.currentIndex = currentIdx
      }

    },
    removeMenuItem(state, idx) {
      state.selectedMenuItems.splice(idx, 1)
    },
    setUserInfo(state, item) {
      state.userInfo = item
    },
    clearLogout(state) {

      if (!state.isLogin) return

      state.selectedMenuItems = [{
        key: "1",
        name: "Home",
        router: "home"
      }]

      state.isLogin = false
      state.userInfo = {}
    }
  },
  actions: {
    async loginUser({ commit, state }, params) {
      if (params.userId == 1 && params.userPw == 1) {

        state.isLogin = true

        let userInfo = {
          name: '홍길동',
          empNo: '1234'
        }

        commit('setUserInfo', userInfo)

        const result = await httpService.get("http://localhost:4000/user/sample").then(res => {
          
        /**
         * 1단계 처리 후... 화면단에서 성공 처리후에 대한 걸 하고 싶을때
         */
          return new Promise(function (resolve, reject) {
            // serviceResLog(url,response);
            resolve(res);
          })
        })

        return result
      }

      
    }
  }
})

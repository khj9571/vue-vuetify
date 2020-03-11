import Vue from 'vue'
import Vuex from 'vuex'

import {modules} from '@/modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: modules,
  state: {
    test:'ABC',
    selectedMenuItems: new Array,
    currentIndex: 0
  },
  getters:{
    getTest:(state) => {
      return state.test
    },
    getSelectedMenuItem:(state) => {      
      console.log('선택된 아이템들')
      console.log(state.selectedMenuItems)
      return state.selectedMenuItems
    },
    getCurrentMenuItem:(state) => {
      const {length} = state.selectedMenuItems;      
      if(length == 0) return null
      return length -1
    },
    getCurrentIndex:(state) => {
      return state.currentIndex
    }
  },
  mutations: {
    addMenuItem (state, item) {

     if(item === undefined) return
    
     let currentIdx = 0;
     let hasItem = state.selectedMenuItems.some( (d:any, idx:number) => {
        if(d.key == item.key) {
          currentIdx = idx
          return true
        }
        return false;
      })

     if(!hasItem) {
      state.selectedMenuItems.push(item)
      const {length} = state.selectedMenuItems;      
      state.currentIndex =  length -1
     }else {  
        state.currentIndex  = currentIdx
     }

    },
    removeMenuItem(state, idx) {  
      state.selectedMenuItems.splice(idx,1)
    }
  },
  actions: {

  }
})

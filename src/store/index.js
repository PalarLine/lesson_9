import { createStore } from "vuex"
import  goods  from '../data/goods.json'

export default createStore({
  state: {    
      goodsList: [] ,
  },
  getters: {
    
    getCategoriesList: (state) => {
      
        let newDataSet = new Set()
        state.goodsList.forEach((item) => {
        newDataSet.add(item.category)
      })
      return newDataSet      
    },
    
    getGoodsByCategory: (state) => {
      return (category) => {
          return { ...state.goodsList
                    .filter((good)=>
                    good.category == category
                    )
                  }
      }
  },
  },
  mutations: {
    goodsList(state, dataList) {
      state.goodsList = dataList
    }
  },
  actions: {
    loadDataList({ commit }) {
      commit('goodsList', goods)
    }
  },
  modules: {},
});

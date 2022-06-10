const analyze = {
  namespace:true,
  state:{
    analyze_list: null
  },
  mutations:{
    ANALYZE_LIST(state,res){
      state.analyze_list = res
    }
  },
  actions:{
    analyze_list({commit},res){
      commit('ANALYZE_LIST',res)
    }
  },
  getters:{
    analyze_list(state) {
      return state.analyze_list
    }
  }
}
export default analyze;

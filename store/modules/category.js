const category  = {
  namespace:true,
  state:{
    menu:[],
    contents:null
  },
  mutations:{
    CONTENTS(state,res){
      state.contents = res
    }
  },
  actions:{
    contents({commit},res){
      console.log(res)
      commit('CONTENTS',res)
    }
  },
  getters:{
    contents(state) {
      return state.contents
    }
  }
}

export default category

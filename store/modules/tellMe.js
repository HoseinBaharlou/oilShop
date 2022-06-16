const tellMe = {
  namespace:true,
  state:{
    tellMe: null
  },
  mutations:{
    TELL_ME(state,res){
      state.tellMe = res
    }
  },
  actions:{
    TellMe({commit},res){
      commit('TELL_ME',res)
    }
  },
  getters:{
    TellMe(state) {
      return state.tellMe
    }
  }
}
export default tellMe;

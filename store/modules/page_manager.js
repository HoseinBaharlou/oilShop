const page_manager = {
  namespace:true,
  state:{
    contents: []
  },
  mutations:{
    CONTENTS(state,res){
      state.contents = res
    }
  },
  actions:{

  },
  getters:{
    contentPage(state) {
      return state.contents
    }
  }
}
export default page_manager;

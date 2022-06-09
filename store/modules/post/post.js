
const post={
  namespaced:true,
  state:{
    postList:null,
    post:null,
    trash:null
  },
  mutations:{
    POST_LIST(state,res){
      state.postList = res
    },
    //SHOW one post for update and other
    SHOW_POST(state,res){
      state.post = res
    },
    TRASH(state,res){
      state.trash = res
    },
  },
  actions:{
    post_list({commit},res){
      commit('POST_LIST',res)
    },
    show_post({commit},res){
      commit('SHOW_POST',res)
    },
    //trash
    async trash({commit},res){
      commit('TRASH',res)
    },
  },
  getters:{
    post_list(state){
      return state.postList
    },
    show_post(state){
      return state.post
    },
    //trash
    trash(state){
      return state.trash
    }
  }
}

export default post

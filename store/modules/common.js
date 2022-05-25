const common = {
  namespaced:true,
  state:{
    singleFile:''
  },
  mutations:{
    HeaderImage(state,response){
      state.singleFile = {
        name:response.name,
        url:response.url,
        size:response.size,
        width:response.width,
        height:response.height,
        format:response.format,
        updated_at: response.updated_at,
        created_at:response.created_at
      }
    }
  },
  actions:{
    // nuxtServerIniterInit(commit) {
    //   this.$axios.get();
    // },
    header_image({commit},response){
      commit("HeaderImage",response)
    }
  },
  getters:{
    image_header(state){
      return state.singleFile
    }
  }

}
export default common;

const common = {
  namespaced:true,
  state:{
    singleFile:'',
    multiImageHeader:{
      url:'test',
      name:'test'
    },
    slider:'',
    width:'',
    height:'',
  },
  mutations:{
    //image header
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
    },
  //  Slider
    HeaderSlider(state,response){
      state.multiImageHeader = response
    },
    //show header
    SHOW_HEADER(state,response){
      if (response.header.size){
        state.singleFile = {
          name:response.header.file,
          url:response.url[0],
          size:response.header.size,
          width:response.header.width,
          height:response.header.height,
          format:response.header.file.split('.')[1],
          updated_at: response.header.updated_at,
          created_at:response.header.created_at
        }
      }else {
        state.multiImageHeader = {'url':response.url,'name':response.name,'updated_at':response.header.updated_at}
      }
      state.width = response.header.width
      state.height = response.header.height
      state.slider = response.header.slider
    }
  },
  actions:{
    //add single image to header
    header_image({commit},response){
      commit("HeaderImage",response)
    },
    //slider for header
    header_slider({commit},response){
      commit('HeaderSlider',response)
    }
  },
  getters:{
    //single image header
    image_header(state){
      return state.singleFile
    },
    // multi image header
    header_slider(state){
      return state.multiImageHeader
    }
  }

}
export default common;

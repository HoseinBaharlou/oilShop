export const Product = {
  namespaced:true,
  state:{
    Product_List:null,
    product:null
  },
  mutations:{
    PRODUCT_LIST(state,res){
      state.Product_List = res
    },
    PRODUCT(state,res){
      state.product = res
    }
  },
  actions:{
    //list products
    async product_list({commit},res){
      commit('PRODUCT_LIST',res)
    },
    //update product
    async update_product({commit},res){
      commit('PRODUCT',res)
    }
  },
  getters:{
    product_list(state){
      return state.Product_List
    },
    //Product
    product(state){
      return state.product
    }
  }
}

export default Product;

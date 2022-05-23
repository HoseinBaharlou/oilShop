import Vuex from 'vuex'
import article from './modules/article'
export default ()=>{
  return  new Vuex.Store({
    state:{
      success:'',
      errors:'',
      status:'',
      options: [ //option category
        {
          'label':'گروه اصلی',
          'id':0
        }
      ],
    },
    mutations:{
      CATEGORY(state,content){
        if (content.success){
          state.success = content.success
          this.$axios.get('/category').then(function (res){
            res.data.category.unshift({
              'label':'گروه اصلی',
              'id':0
            })
            state.options = res.data.category
          })
        }else {
          state.errors = content.errors
        }
      },
      //  set category
      SET_CATEGORY(state,content){
        content.category.unshift({
          'label':'گروه اصلی',
          'id':0
        })
        state.options = content.category
        console.log(JSON.stringify(content))
      }
    },
    actions:{
      async nuxtServerInit({commit}){
        // await this.$axios.get('/category').then(function (res){
        //   commit('SET_CATEGORY',{'category':res.data.category})
        // })
      },
      //  category
      async category({commit},category){
        // send category
        this.$axios.post('/category',{'title':category.title,'parent_id':category.parent_id}).then(
          function (response){
            commit('CATEGORY',{'success':response.data.success})
          }
        ).catch(
          function (er){
            commit('CATEGORY',{'errors':er.response.data.errors})
          }
        );
      }
    },
    getters:{
      success(state){
        return state.success
      },
      errors(state){
        return state.errors
      },
      category(state){

        return state.menu
      }
    },
    modules:{
      article
    }
  })
}

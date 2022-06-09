import Vuex from 'vuex'
import post from '@/store/modules/post/post'
import showPost from '@/store/modules/post/showPost'
import common from '@/store/modules/common'
import Product from "@/store/modules/product";
import usersManager from '@/store/modules/usersManager'
export default ()=>{
  return  new Vuex.Store({
    state:{
      BackendUrl : 'http://localhost:8000/api',
      success:'',
      errors:'',
      status:'',
      options: [ //option category
        {
          'label':'گروه اصلی',
          'id':0
        }
      ],
      users:null
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
      }
    },
    actions:{
      async nuxtServerInit({commit}){
        //CATEGORY
        await this.$axios.get('/category').then(function (res){
          commit('SET_CATEGORY',{'category':res.data.category})
        }).catch(er=>console.log(er.response))
        //HEADER
        await this.$axios.get('/show-header').then(function (res){
          if(res.data.header){
            commit('common/SHOW_HEADER',res.data)
          }
        });
      },
      //  category
      async category({commit},category){
        // send category
        this.$axios.post('/category',{'title':category.title,'parent_id':category.parent_id,'type':category.type}).then(
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
        return state.options
      }
    },
    modules:{
      post,
      showPost,
      common,
      usersManager,
      Product
    }
  })
}

import Vuex from 'vuex'
import post from '@/store/modules/post/post'
import showPost from '@/store/modules/post/showPost'
import common from '@/store/modules/common'
import Product from "@/store/modules/product";
import analyze from "@/store/modules/analyze";
import category from "@/store/modules/category";
import usersManager from '@/store/modules/usersManager'
import tellMe from "~/store/modules/tellMe";
import pageManager from "@/store/modules/page_manager";
export default ()=>{
  return  new Vuex.Store({
    state:{
      success:'',
      errors:'',
      status:'',
      options: [ //option category

      ],
      categories:[],
      users:null
    },
    mutations:{
      CATEGORY(state,content){
        if (content.success){
          state.success = content.success
          this.$axios.get('/category').then(function (res){
            state.options = res.data.category
          })
        }else {
          state.errors = content.errors
        }
      },
      //  set category
      SET_CATEGORY(state,content){
        state.options = content.category
      },
      CATEGORIES(state,res){
        state.categories = res
      }
    },
    actions:{
      async nuxtServerInit({commit}){
        //CATEGORY
        await this.$axios.get('/category').then(function (res){
          commit('SET_CATEGORY',{'category':res.data.category})
        }).catch(er=>console.log(er.response))

        await this.$axios.get('/categories').then(function (res){
          commit('CATEGORIES',{'category':res.data.category})
        }).catch(er=>console.log(er.response))
        //HEADER
        await this.$axios.get('/show-header').then(function (res){
          if(res.data.header){
            commit('common/SHOW_HEADER',res.data)
          }
        });

        await this.$axios.get('/content').then(function (res){
            commit('CONTENTS',res.data.contents)
        });

        await this.$axios.get('/posts').then(res=>commit('post/POST_LIST',res.data.posts))

      },
      //  category
      async category({commit},category){
        // send category
        this.$axios.post('/category',{'title':category.title,'parent_id':category.parent_id,'type':category.type}).then(
          function (response){
            console.log(response)
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
      },
      categories(state){
        return state.categories
      }
    },
    modules:{
      post,
      showPost,
      common,
      usersManager,
      Product,
      analyze,
      category,
      tellMe,
      pageManager
    }
  })
}

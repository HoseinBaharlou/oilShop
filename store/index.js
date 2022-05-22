import Vuex from 'vuex'

export default ()=>{
  return  new Vuex.Store({
    state:{
      success:'',
      errors:'',
      status:'',
      access_token:null,
      expires_in:null,
      token_type:null,
      verify:true,
      options: [ //option category
        {
          'label':'گروه اصلی',
          'id':0
        }
      ],
    },
    mutations:{
      // register
      REGISTER(state,Credentials){
        if(Credentials.email){
          this.$cookies.set('email',Credentials.email,{
            path:'/',
            maxAge:60*60*2
          })
          this.$router.push('/auth/verify')
        }else{
          state.errors = Credentials.errors
          state.status = Credentials.state

          setTimeout(() => {
            state.errors = null
            state.status = null
          }, 10000);
        }
      },

      // login
      SET_TOKEN(state,Credentials){
        console.log(Credentials.verify);
        if(typeof Credentials.verify != undefined && !Credentials.verify && !Credentials.errors){
          const options = {
            path: '/',
            maxAge: 60*60*2
          }
          if(!Credentials.email){
            return
          }
          const cookieList = [
            { name: 'email', value: Credentials.email, opts: options },
            { name: 'Disposable_token', value: Credentials.access_token, opts: options },
          ]
          this.$cookies.setAll(cookieList)
          this.$router.push('/auth/verify')
        }else if(Credentials.access_token){
          this.$cookies.set('token',Credentials.access_token,{
            path:'/',
            maxAge:356*24*60*60
          })

          this.$router.push('/dashboard/main')
        }else{
          state.errors = Credentials.errors
          state.status = Credentials.state

          setTimeout(() => {
            state.errors = null
            state.status = null
          }, 10000);
        }
      },
      CHECKTOKEN(state,token){
        state.access_token = token.access_token
      },
      // verify
      VERIFY(state,status){
        state.verify = status.verify
      },
      // logout
      LOGOUT(state){
        state.access_token = null
        this.$cookies.removeAll()
      },
      // otp auth
      async OTPAUTH(state,Credentials){
        if(Credentials.success){
          const token = await this.$cookies.get('Disposable_token')
          console.log(Credentials.success)
          if (token){
            await this.$cookies.set('token',token,{
              path:'/',
              maxAge:356*24*60*60
            })
            // remove email and Disposable_token coockies
            await this.$cookies.remove('Disposable_token')
            await this.$cookies.remove('email')
            await this.$router.push('/dashboard/main')
          }else {
            await this.$router.push('/auth/login')
          }
        }else{
          console.log(Credentials.errors)
          state.errors = Credentials.error
          state.status = Credentials.state
          setTimeout(() => {
            state.errors = null
            state.status = null
          }, 10000);
        }
      },
      // category
      CATEGORY(state,content){
        if (content.success){
          state.success = content.success
          this.$axios.get('/category').then(function (res){
            state.options = res.data.category
          })
        }else {
          state.errors = content.errors
        }
      }
    },
    actions:{
      // register user
      async register(context,Credentials){
        this.$axios.$post('auth/register',Credentials).then(function(res){
          context.commit('REGISTER',{email:Credentials.email})
        }).catch((er)=>{
          context.commit('REGISTER',{errors:er.response.data.errors,status:er.response.status})
        })
      },
      // login user
      async login(context,Credentials){
        // axios
        this.$axios.$post('auth/login',Credentials).then(function(res){
          context.commit('SET_TOKEN',{access_token:res.access_token,verify:res.verify,email:Credentials.email})
        }).catch(function(er){
          context.commit('SET_TOKEN',{errors:er.response.data.errors,status:er.response.status})
        })
      },

      // logout user
      async logout({commit}){
        this.$axios.setHeader('Authorization', 'bearer'+this.$cookies.get('token'))
        this.$axios.$post('auth/logout').then(function(res){
          commit('LOGOUT')
        }).catch(function(er){
          console.log(er)
        })

        // await context.commit('LOGOUT')
      },
      // check token
      async initToken(context){
        const token = this.$cookies.get('token')
        if(!token){
          this.$router.push('/auth/login');
        }else {
          await context.commit('CHECKTOKEN', {access_token: token})
        }
      },
      // check verify email
      async initOtp(context){
        const email = this.$cookies.get('email')
        let verify = true
        if(email){
          verify = false
        }
        await context.commit('VERIFY',{'verify':verify})
      },
      // otp auth
      async otp({commit},Credentials){
        this.$axios.$post('auth/otp',Credentials).then(function(res){
          commit('OTPAUTH',{success:res.success})
        }).catch(function(er){
          commit('OTPAUTH',{errors:er.response.data.errors,status:er.response.status})
        })
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
      isAuthenticated(state){
        if(state.access_token){
          return true
        }else{
          return false
        }
      },
      isVerifiedEmail(state){
        return Boolean(state.verify)
      },
      category(state){

        return state.menu
      }
    },
  })
}

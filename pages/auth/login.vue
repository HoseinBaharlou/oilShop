<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" align="center">
            <!-- form -->
            <form action="" method="post" @submit.prevent="submit">
                <div class="input-auth d-flex align-center multi-inputs my-4 py-2">
                    <input type="email" class="text-center w-50" placeholder="ایمیل" v-model="form.email" maxlength="100">
                    <v-divider vertical class="liner-vertical"></v-divider>
                    <input type="password" class="text-center w-50" placeholder="رمز عبور" v-model="form.password" maxlength="100">
                </div>

                <div>
                  <v-btn class="auth-btn white--text" @click="submit" :loading="loading">ورود</v-btn>
                </div>
            </form>
        </v-col>
    </v-row>
</template>

<script>
export default {
    layout:'auth',
    head:{
      title:'ورود به سایت'
    },
    data(){
        return{
            loading:false,
            form:{
              email:'',
              password:''
            }
        }
    },
    methods:{
        submit(){
          this.loading = true
            this.$auth.loginWith('laravelSanctum',{data:this.form}).then((res)=>{
              this.loading = false
            }).catch((er)=>{
              this.loading = false
              this.$swal({
                type:'error',
                title:'خطا!',
                text:er.response.data.errors,
                confirmButtonText:'باشه'
              })
            })
        }
    },
  //if authenticated redirect to home page
  middleware({app,redirect}){
    if (app.$auth.loggedIn){
      return redirect('/')
    }
  }
}
</script>

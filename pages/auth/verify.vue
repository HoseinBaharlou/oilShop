<template>
    <section class="d-flex justify-center align-center w-100 otp-page">
        <h1>
            کد ارسال شده به ایمیل را اینجا وارد کنید لطفا بخش هرزنامه و اسپم خود را هم چک کنید
        </h1>
        <!-- alert -->
        <div class="d-flex align-center justify-center mt-5">
            <div v-if="$store.getters.errors">
                <alert type="error" :message="$store.getters.errors"/>
            </div>
            <div v-if="$store.getters.success">
                <alert type="success" :message="$store.getters.success"/>
            </div>
        </div>
        <!-- otp field -->
        <div class="custom-otp d-flex align-center justify-center mt-5">
            <v-otp-input
            length="6"
            plain
            class="otp-field"
            v-model="code"
            ></v-otp-input>
        </div>
        <div class="d-flex align-center justify-center mt-5">
            <v-btn text @click="sendCode" :loading="sendCodeLoading">ارسال مجدد کد</v-btn>
        </div>
        <!-- btn -->
        <v-btn class="custom-otp white--text mt-5 custom-btn-otp" :loading="verifyLoading" @click="submit">تایید</v-btn>
    </section>
</template>
<script>
import alert from '../../components/partials/alert.vue'

export default {
    layout:'auth',
    components:{alert},
    middleware:['check-verify'],
    data(){
        return{
          code:'',
          sendCodeLoading:false,
          verifyLoading:false
        }
    },
    methods:{
        submit(){
          this.verifyLoading = true //loading btn
          let data = {
              code:this.code,
              email:this.$cookies.get('email') ? this.$cookies.get('email') : this.$auth.user.email
            }

            this.$axios.post('/auth/otp',data).then((res)=>{
              console.log(res)
              this.verifyLoading = false //unload
              //message
              this.$swal({
                type:'success',
                title:'موفق',
                text:res.data.success,
                confirmButtonText:'باشه'
              }).then(()=>{
                this.$cookies.remove('email')
                this.$router.push('/auth/login')
              })
            }).catch((er)=>{
              //message
              this.verifyLoading = false
              this.$swal({
                type:'error',
                title:'خطا!',
                text:er.response.data.errors,
                confirmButtonText:'باشه'
              })
            })
        },
        async sendCode(){
          this.sendCodeLoading = true //loading btn
          await this.$axios.$post('auth/sendEmailVerify',{'email':this.$cookies.get('email') ? this.$cookies.get('email') : this.$auth.user.email}).then((res)=>{
            this.sendCodeLoading = false //unload
            this.$swal({
                type:'success',
                title:'موفق',
                text:res.success,
                confirmButtonText:'باشه'
              })
            }).catch((er)=>{
            this.sendCodeLoading = false //unload
            this.$swal({
                type:'error',
                title:'خطا!',
                text:er.response.data.errors,
                confirmButtonText:'باشه'
              })
            })
        }
    },
}
</script>

<style lang='scss'>
.otp-page{
    flex-direction: column !important;
    .custom-otp{
        width: 90%;
    }
    @media only screen and (min-width: 960px) {
        .custom-otp{
            width: 500px !important;
        }
    }

    .custom-btn-otp{
        height: 60px !important;
        margin: auto;
        display: block !important;
        background: #5883FB !important;
    }

    .otp-field{
        direction: ltr !important;
    }
}

</style>

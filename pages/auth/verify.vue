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
            <v-btn text @click="sendCode">ارسال مجدد کد</v-btn>
        </div>
        <!-- btn -->
        <input class="custom-otp white--text mt-5 custom-btn-otp" value="تایید" type="submit" @click="submit">
    </section>
</template>
<script>
import alert from '../../components/partials/alert.vue'

export default {
    layout:'auth',
    components:{alert},
    middleware:['check-verify','verify'],
    data(){
        return{
            code:'',
        }
    },
    methods:{
        submit(){
            if(this.code){
                this.$store.dispatch('otp',{
                    code:this.code,
                    email:this.$cookies.get('email')
                })
            }
        },
        async sendCode(){
            const {success} = await this.$axios.$post('auth/sendEmailVerify',{'email':this.$cookies.get('email')})
            if(success){
                this.$store.state.success = success
                setTimeout(() => {
                    this.$store.state.success = null
                }, 10000);
            }
        }
    }
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
        height: 60px;
        margin: auto;
        display: block !important;
        background: #5883FB !important;
    }

    .otp-field{
        direction: ltr !important;
    }
}

</style>

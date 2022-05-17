<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" align="center">
            <!-- alert -->
            <div v-if="$store.getters.errors">
                <alert type="error" :message="$store.getters.errors"/>
            </div>
            <div v-if="$store.getters.success">
                <alert type="success" :message="$store.getters.success"/>
            </div>
            <!-- form -->
            <form action="" method="post" @submit.prevent="register">
                <div class="input-auth d-flex align-center multi-inputs my-4 py-2">
                    <input type="text" class="text-center w-50" placeholder="اسم" v-model="name" maxlength="20">
                    <v-divider vertical class="liner-vertical"></v-divider>
                    <input type="text" class="text-center w-50" placeholder="فامیل" v-model="last_name" maxlength="20">
                </div>

                <div class="input-auth d-flex align-center multi-inputs my-4 py-2">
                    <input type="email" class="text-center w-50" placeholder="ایمیل" v-model="email" maxlength="100">
                    <v-divider vertical class="liner-vertical"></v-divider>
                    <input type="text" class="text-center w-50" placeholder="شماره تلفن" v-model="phone" maxlength="11">
                </div>

                <div class="input-auth d-flex align-center multi-inputs my-4 py-2">
                    <input type="password" class="text-center w-50" placeholder="رمز عبور" v-model="password" maxlength="100">
                    <v-divider vertical class="liner-vertical"></v-divider>
                    <input type="password" class="text-center w-50" placeholder="تکرار رمز عبور" v-model="password_confirmation">
                </div>

                <div class="input-auth d-flex align-center my-4">
                    <input type="text" class="text-center w-100" placeholder="آدرس کامل" v-model="address" maxlength="200">
                </div>

                <div class="input-auth d-flex align-center multi-inputs  my-4 py-2">
                    <input type="text" class="text-center w-50" placeholder="پلاک" v-model="tag" maxlength="10">
                    <v-divider vertical class="liner-vertical"></v-divider>
                    <input type="text" class="text-center w-50" placeholder="کد پستی" v-model="zip_code" maxlength="10">
                </div>

                <div class="d-flex justify-start my-4 align-center">
                    <input type="checkbox" class="checkbox-agreement mx-2" @click="agreement = !agreement"/>
                    <span class="mx-2">شرایط <nuxt-link to="" class="text-decoration-none">توافقنامه</nuxt-link> را میپذیرم</span>
                </div>

                <div class="my-4">
                    <input type="submit" value="ثبت نام" class="auth-btn white--text">
                </div>
            </form>
        </v-col>
    </v-row>
</template>

<script>
import alert from '../../components/partials/alert.vue'

export default {
    layout:'auth',
    components:{alert},
    head(){
        return{
            title:'ثبت نام'
        }
    },
    data(){
        return{
            name:'',
            last_name:'',
            email:'',
            phone:'',
            password:'',
            password_confirmation:'',
            tag:'',
            address:'',
            zip_code:'',
            agreement:false,
        }
    },
    methods:{
        register(){
            this.$store.dispatch('register',{
                name:this.name,
                last_name:this.last_name,
                email:this.email,
                phone_number:this.phone,
                password:this.password,
                password_confirmation:this.password_confirmation,
                address:this.address,
                tag:this.tag,
                zip_code:this.zip_code,
                agreement:this.agreement
            })

            if(this.$store.getters.isVerifiedEmail){
                return 
            }
        }
    },
}
</script>


<style scoped>
    .checkbox-agreement{
        appearance: unset;
        width: 45px;
        height: 45px;
        border: 9px solid #5883FB;
        position: relative;
    }
    .checkbox-agreement:checked:after{
        content: " ";
        background-color: #5883FB;
        position: absolute;
        width: 20px;
        height: 20px;
        left: 4px;
        top: 4px;
    }
</style>
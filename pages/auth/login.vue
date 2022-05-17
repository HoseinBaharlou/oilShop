<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" align="center">
            <!-- alert -->
            <div v-if="$store.getters.errors">
                <alert type="error" :message="$store.getters.errors"/>
            </div>
            <div v-if="$store.getters.success">
                <alert :type="success" :message="$store.getters.success"/>
            </div>
            <!-- form -->
            <form action="" method="post" @submit.prevent="submit">
                <div class="input-auth d-flex align-center multi-inputs my-4 py-2">
                    <input type="email" class="text-center w-50" placeholder="ایمیل" v-model="email" maxlength="100">
                    <v-divider vertical class="liner-vertical"></v-divider>
                    <input type="password" class="text-center w-50" placeholder="رمز عبور" v-model="password" maxlength="100">
                </div>
                
                <div>
                    <input type="submit" value="ورود" class="auth-btn white--text">
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
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        submit(){
            this.$store.dispatch('login',{
                email:this.email,
                password:this.password
            })
        }
    }
}
</script>
<template>
    <v-container fluid>
        <v-row>
            <v-col cols="10" offset="1">
                <v-row>
                    <!-- start breadcrumbs -->
                    <v-col cols="12">
                        <v-breadcrumbs :items="items"></v-breadcrumbs>
                        <v-divider></v-divider>
                    </v-col>
                    <!-- end breadcrumbs -->
                    <!--start information -->
                    <v-col cols="10" class="mt-10" offset-sm="1">
                        <analyse/>
                    </v-col>
                    <!-- end information -->
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import analyse from '../components/partials/analyse/analyse.vue'
export default {
    setup() {

    },
    components:{analyse},
    data:()=>{
        return{
            items: [
                {
                    text: 'صفحه اصلی',
                    disabled: true,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'ارسال آنالیز',
                    disabled: true,
                    href: 'breadcrumbs_dashboard',
                },
            ],
        }
    },
  middleware({app,redirect}){
    if (!app.$auth.loggedIn){
      return redirect('/auth/login')
    }
  }
}
</script>

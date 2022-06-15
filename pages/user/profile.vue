<template>
  <v-container fluid>
    <v-row>
      <v-col cols="10" offset="1">
        <v-row class="justify-sm-center">
          <!-- start breadcrumbs -->
          <v-col cols="12">
            <v-breadcrumbs :items="items"></v-breadcrumbs>
            <v-divider></v-divider>
          </v-col>
          <!-- end breadcrumbs -->
          <!--start profile -->
          <v-col cols="12" md="6">
            <user_profile/>
          </v-col>
          <!-- end profile -->

<!--          start analyze table-->
          <v-col cols="12" md="6">
            <analyze/>
          </v-col>
<!--          end analyze table-->
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import user_profile from "@/components/partials/profile/user_profile";
import analyze from "@/components/partials/profile/analyze";
export default {
  name: "profile",
  components:{user_profile,analyze},
  data:()=>{
    return{
      items: [
        {
          text: 'صفحه اصلی',
          disabled: true,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'پروفایل',
          disabled: true,
          href: 'breadcrumbs_dashboard',
        },
      ]
    }
  },
  middleware({app,redirect}){
    if (!app.$auth.loggedIn){
      return redirect('/auth/login')
    }
  }

}
</script>


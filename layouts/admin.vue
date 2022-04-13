<template>
  <v-app class="admin">
    <v-main style="background:#EAF2FF !important">
      <!-- start notification and ........ -->
    <v-container class="hidden-md-and-down">
      <v-row>
        <v-col col="12" class="mt-14">
          <v-btn fab light elevation="0" class="mx-2">
            <v-icon class="custom-color-icon">mdi-account-outline</v-icon>
          </v-btn>
          <v-btn fab light elevation="0" class="mx-2">
            <v-icon class="custom-color-icon">mdi-bell-outline</v-icon>
          </v-btn>
          <v-btn fab light elevation="0" class="mx-2">
            <v-icon class="custom-color-icon">mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <!-- start notification and ........ -->
    <!-- start navbar -->

    <v-app-bar elevation="0" class="hidden-lg-and-up" color="dark" dark absolute>
      <v-btn small elevation="0" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <section class="my-5">
        <v-btn fab light elevation="0" class="mx-2" small>
            <v-icon class="custom-color-icon">mdi-account-outline</v-icon>
        </v-btn>
        <v-btn fab light elevation="0" class="mx-2" small>
          <v-icon class="custom-color-icon">mdi-bell-outline</v-icon>
        </v-btn>
        <v-btn fab light elevation="0" class="mx-2" small>
          <v-icon class="custom-color-icon">mdi-magnify</v-icon>
        </v-btn>
      </section>
    </v-app-bar>

    <v-container>
      <v-row>
      <!-- start navigation mobile -->
        <v-col md="3">
          <v-navigation-drawer v-model="drawer" :stateless="stateless" class="white border-radius-20 elevation-9" :app="app" right>
          <!-- start avatar item -->
          <v-list dense class="px-5">
            <v-list-item class="custom-avatar-panel white">
              <v-list-item-avatar>
                <v-img src="icons/Profile image.svg" />
              </v-list-item-avatar>

              <v-list-item-title>احسان مهدوی</v-list-item-title>

              <v-btn class="light-blue darken-1 white--text" small elevation="0">
                $ 52
              </v-btn>
            </v-list-item>
          </v-list>
          <!-- end avatar item -->
          <hr class="custom-line-avatar-panel">
          <!-- start items -->
          <Vlist class="pb-15"/>
          <!-- end items -->
          </v-navigation-drawer>
          <!-- end navigation mobile -->
        </v-col>
      <!-- end navigation -->

      <!-- start render page -->
        <v-col md="9">
          <Nuxt />
        </v-col>
      <!-- end render page -->
      </v-row>
    </v-container>
    <!-- end navbar -->
    </v-main>
  </v-app>
</template>
<style>
  
</style>
<script>
import Vlist from '../components/partials/vlist.vue';
export default{
  components:{Vlist},
  data:()=>{
    return {
      drawer:true,
      stateless:true,
      app:false
    }
  },
  created: function () {
    if(this.$vuetify.breakpoint.name == "sm" || this.$vuetify.breakpoint.name == "md" ){
      this.stateless = true
      this.app = true
    }
    if(this.$vuetify.breakpoint.name == "lg" || this.$vuetify.breakpoint.name == "xl"){
      this.stateless = true
      this.app = false
      this.drawer = true
    }
  }
}
</script>
<style>
.v-navigation-drawer{
  width: auto !important;
}

</style>
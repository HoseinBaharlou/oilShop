<template>
  <v-app class="admin">
    <v-main style="background:#EAF2FF !important">
    <!-- start notification and ........ -->
    <Notification />
    <!-- start notification and ........ -->
    <!-- start navbar -->
    <v-app-bar elevation="0" class="hidden-lg-and-up " color="dark" dark>
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
    <!-- end navbar -->

    <v-container>
      <v-row>
      <!-- start navigation mobile and desktop -->
        <v-col md="3" v-show="drawer">
          <v-navigation-drawer v-model="drawer" :stateless="stateless" class="white border-radius-20 elevation-9" :app="app" right>
          <!-- start avatar item -->
          <v-list dense class="px-5">
            <v-list-item class="custom-avatar-panel white">
              <v-list-item-avatar>
                <v-img src="../icons/Profile_image.svg" />
              </v-list-item-avatar>

              <v-list-item-title>احسان مهدوی</v-list-item-title>

              <v-btn class="light-blue darken-1 white--text" small elevation="0">
                $ 52
              </v-btn>
            </v-list-item>
          </v-list>
          <!-- end avatar item -->
          <v-divider class="mx-7"></v-divider>
          <!-- start items -->
          <v-list rounded>
            <v-list-item-group
              color="primary"
            >
              <v-list-item to="/dashboard/main">
                <!-- start icon -->
                <v-list-item-icon class="ml-2 my-3">
                  <v-icon class="custom-color-icon">mdi-view-dashboard-outline</v-icon>
                </v-list-item-icon>
                <!-- end icon -->

                <!-- start title -->
                <v-list-item-content>
                  <v-list-item-title>داشبرد</v-list-item-title>
                </v-list-item-content>
                <!-- end title -->
              </v-list-item>

              <v-list-item to="/dashboard/Tradeview">
              <!-- start icon -->
              <v-list-item-icon class="ml-2 my-3">
                <v-icon class="custom-color-icon">mdi-tune-vertical</v-icon>
              </v-list-item-icon>
              <!-- end icon -->

              <!-- start title -->
              <v-list-item-content>
                <v-list-item-title>نمای تجاری</v-list-item-title>
              </v-list-item-content>
              <!-- end title -->
              </v-list-item>

              <v-list-item to="/dashboard/fileManager">
                <!-- start icon -->
                <v-list-item-icon class="ml-2 my-3">
                  <v-icon class="custom-color-icon">mdi-file-outline</v-icon>
                </v-list-item-icon>
                <!-- end icon -->

                <!-- start title -->
                <v-list-item-content>
                  <v-list-item-title>مدیریت فایل</v-list-item-title>
                </v-list-item-content>
                <!-- end title -->
              </v-list-item>

              <v-list-item to="/dashboard/calendar">
                <!-- start icon -->
                <v-list-item-icon class="ml-2 my-3">
                  <v-icon class="custom-color-icon">mdi-calendar-range</v-icon>
                </v-list-item-icon>
                <!-- end icon -->

                <!-- start title -->
                <v-list-item-content>
                  <v-list-item-title>تقویم</v-list-item-title>
                </v-list-item-content>
                <!-- end title -->
              </v-list-item>

              <v-list-item to="/dashboard/Message">
                <!-- start icon -->
                <v-list-item-icon class="ml-2 my-3">
                  <v-icon class="custom-color-icon">mdi-message-processing</v-icon>
                </v-list-item-icon>
                <!-- end icon -->

                <!-- start title -->
                <v-list-item-content>
                  <v-list-item-title>پیام ها</v-list-item-title>
                </v-list-item-content>
                <!-- end title -->
              </v-list-item>
              
            </v-list-item-group>
          </v-list>
          <!-- end items -->
          </v-navigation-drawer>
        </v-col>
      <!-- end navigation mobile and desktop -->
      <!-- start render page -->
        <v-col md="9" cols="12">
          <transition name="test" mode="out-in">
            <Nuxt />
          </transition>
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
import Vlist from '../components/partials/dashboard/vlist.vue';
import Notification from '../components/partials/dashboard/notification.vue'
export default{
  components:{Vlist,Notification},
  transition: {
    name: 'test',
    mode: 'out-in'
  },
  data:()=>{
    return {
      drawer:false,
      stateless:true,
      app:false
    }
  },
  created: function () {
    if(process.client){
      if(window.innerWidth < 960){
        this.stateless = false
        this.app = true
      }else{
        this.stateless = true
        this.app = false
        this.drawer = true
      }
    }
    else{
      
    }
  }
}
</script>
<style>
.v-navigation-drawer{
  width: auto !important;
}

</style>
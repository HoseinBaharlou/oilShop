<template>
  <v-row>
    <!-- start contacts -->
    <v-col md="4">
      <v-navigation-drawer class="rounded-r-xl elevation-10" v-model="drawer">
        <div  class="px-5">
          <v-text-field label="پیدا کردن مخاطبین"><v-icon slot="append" color="grey" label="پیدا کردن مخاطبین">mdi-magnify</v-icon></v-text-field>
        </div>
        <v-list-item-group v-model="model">
          <contacts/>
        </v-list-item-group>
      </v-navigation-drawer>
    </v-col>
    <!-- end contacts -->
    <!-- start message -->
    <v-col md="8">
      <v-card class="rounded-l-xl pb-5" elevation="10">
        <v-card-actions class="d-block">
          <v-row class="px-5">
            <!-- start user text -->
            <v-col cols="12">
              <div>
                <v-avatar>
                  <v-img src="../icons/Oval.svg" lazy-src="../icons/Oval.svg"/>
                </v-avatar>
                <span class="mx-3">پشه</span>
                <small class="grey--text">12:10</small>
              </div>
              <div class="blue lighten-5 rounded-lg py-2 mt-2 w-80">
                <span class="pr-5">!بده بزنیم</span>
              </div>
            </v-col>
            <!-- end user text -->

            <!-- start admin text -->
            <v-col cols="12" class="d-flex justify-end">
              <section class="w-70">
                <div class="d-flex justify-end align-center">
                  <v-avatar class="order-3">
                    <v-img src="../icons/Profile_image.svg" lazy-src="../icons/Profile_image.svg"/>
                  </v-avatar>
                  <span class="px-3 order-2">آقای مجری</span>
                  <small class="grey--text order-1">12:10</small>
                </div>
                <div class="blue lighten-5 rounded-lg py-2 mt-2">
                  <span class="pr-5">!بده بزنیم</span>
                </div>
              </section>
            </v-col>
            <!-- end admin text -->

            <!-- start user text -->
            <v-col cols="12">
              <div>
                <v-avatar>
                  <v-img src="../icons/Oval.svg" lazy-src="../icons/Oval.svg"/>
                </v-avatar>
                <span class="mx-3">پشه</span>
                <small class="grey--text">12:10</small>
              </div>
              <div class="blue lighten-5 rounded-lg py-2 mt-2 w-80">
                <span class="pr-5">!بده بزنیم</span>
              </div>
            </v-col>
            <!-- end user text -->

            <!-- start admin text -->
            <v-col cols="12" class="d-flex justify-end">
              <section class="w-70">
                <div class="d-flex justify-end align-center">
                  <v-avatar class="order-3">
                    <v-img src="../icons/Profile_image.svg" lazy-src="../icons/Profile_image.svg"/>
                  </v-avatar>
                  <span class="px-3 order-2">آقای مجری</span>
                  <small class="grey--text order-1">12:10</small>
                </div>
                <div class="blue lighten-5 rounded-lg py-2 mt-2">
                  <span class="pr-5">!بده بزنیم</span>
                </div>
              </section>
            </v-col>
            <!-- end admin text -->

            <!--start not read line -->
            <v-col cols="12" class="d-flex align-center">
              <span>نخوانده</span>
              <v-divider></v-divider>
            </v-col>
            <!--start not read line -->

            <!-- start not read message -->
            <v-col cols="12">
              <div>
                <v-avatar>
                  <v-img src="../icons/Oval.svg" lazy-src="../icons/Oval.svg"/>
                </v-avatar>
                <span class="mx-3">پشه</span>
                <small class="grey--text">12:10</small>
              </div>
              <div class="mt-4">
                <span class="blue rounded-lg py-2 mt-5 px-7">!بده بزنیم</span>
              </div>
            </v-col>
            <!-- end not read message -->
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
    <!-- end message -->
  </v-row>
</template>

<script>
import Contacts from '../../components/partials/dashboard/Contacts.vue'
export default {
  setup() {
    
  },
  layout:'dashboard',
  data:()=>{
    return{
      drawer:true,
      model:true,
      mini:false
    }
  },
  components:{Contacts}
}
</script>

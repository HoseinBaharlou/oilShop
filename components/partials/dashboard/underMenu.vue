<template>
  <v-card class="rounded-l-xl px-10" elevation="5">
    <!-- start content -->
    <v-card-actions>
      <v-row>
        <v-col cols="12" class="mt-5">
          <!-- start alert -->
          <v-alert color="primary" dismissible class="py-1 custom-icon-color-alert px-10 white--text" close-icon="mdi-close">یک لینک طبق الگو وارد کنید با کلیک کردن بر روی ایکون لینک</v-alert>
          <!-- end alert -->
        </v-col>

        <!-- start under menu maker -->
        <v-col cols="12">
          <v-row>
            <!-- add/remove under menu -->
            <v-col md="10" sm="12">
               <v-sheet elevation="2">
                 <v-container>
                   <section v-for="(item,index) in shop" :key="index">
                      <div class="d-flex align-center">

                        <!-- start inputs -->
                        <div>
                          <v-text-field label="نام لینک" outlined v-model="name"></v-text-field>
                          <v-text-field label="لینک" outlined type="url" v-model="link"></v-text-field>
                        </div>
                        <!-- end inputs -->

                        <!-- start remove and add -->
                        <div class="d-flex mx-5">
                          <v-btn fab color="green" small class="mx-1" elevation="0" @click="addNestedMenu(index)"><v-icon color="white" >mdi-plus</v-icon></v-btn>
                          <v-btn fab color="red" small elevation="0"><v-icon color="white">mdi-close</v-icon></v-btn>
                        </div>
                        <!-- end remove and add -->
                        
                      </div>
                   </section>
                 </v-container>
               </v-sheet>
            </v-col>
            <!-- add/remove under menu -->
          </v-row>
        </v-col>
        <!-- end under menu maker -->
      </v-row>
    </v-card-actions>
    <!-- end content -->
  </v-card>
</template>
<script>

export default {
  setup() {
  },
  data:()=>{
    return {
      name:'',
      link:'',
      shop:[
        {name:'فروشگاه',link:''}
      ],
    }
  },
  methods:{
    addNestedMenu:()=>{
      
    }
  }
}
</script>

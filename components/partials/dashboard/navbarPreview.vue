<template>
  <v-card class="rounded-l-xl px-10" elevation="5">
    <!-- start title -->
    <v-card-title>
      <h2>ساخت منو سایت</h2>
    </v-card-title>
    <!-- end title -->

    <v-divider></v-divider>

    <v-card-actions>
      <v-row>
        <v-col cols="12">
          <!-- start alert -->
          <v-alert color="primary" dismissible v-model="alert" close-icon="mdi-close" class="py-1 white--text custom-icon-color-alert px-10 rounded-l-xl">انچه در سایت به نمایش در می اید را میبینید</v-alert>
          <!-- end alert -->

          <!-- start navbar preview -->
          <!-- <v-sheet rounded="xl" elevation="3">
            <v-app-bar color="white" rounded="xl">

            </v-app-bar>
          </v-sheet> -->
          <!-- end navbar preview -->
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  setup() {
    
  },
  data:()=>{
    return{
      alert:true
    }
  }
}
</script>

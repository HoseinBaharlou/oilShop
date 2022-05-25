<template>
  <v-card>
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
          <v-card-title>
            <h3>عکس درون هدر را انتخاب کنید</h3>
          </v-card-title>

          <v-divider></v-divider>

        <v-card-actions class="mt-2 d-block">
          <!-- start alert -->
          <div class="d-flex justify-space-between w-100 blue px-3 py-1 rounded-l-xl">
            <div>
              <button @click="alert = false">
                <v-icon color="white">mdi-close</v-icon>
              </button>
              <span class="font-size-15 white--text">
                کلمات کلیدی را مشخص کنید تعداد تکرار کلمات کلیدی باید بین 3 تا 6 بار باشد
              </span>
            </div>
          </div>
<!--          image header-->
          <image-header/>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import imageHeader from "@/components/partials/dashboard/header/imageHeader";
export default {
  name: "mainHeader",
  layout:'dashboard',
  data(){

  },
  components:{imageHeader},
}
</script>

<style scoped>

</style>

<template>
    <v-row>
      <!--image header-->
      <v-col cols="12" md="10" offset-md="1">
        <image-header class="rounded-l-xl pa-5" />
      </v-col>

      <!--slider header-->
      <v-col cols="12" md="10" offset-md="1">
        <SliderHeader class="rounded-l-xl pa-5" />
      </v-col>

<!--      title and subtitle-->
      <v-col cols="12" md="10" offset-md="1">
        <others/>
      </v-col>
    </v-row>
</template>

<script>
import imageHeader from "@/components/partials/dashboard/header/imageHeader";
import SliderHeader from "@/components/partials/dashboard/header/sliderHeader";
import others from "@/components/partials/dashboard/header/content";
export default {
  name: "mainHeader",
  layout:'dashboard',
  components:{others, imageHeader,SliderHeader},
}
</script>

<style scoped>

</style>

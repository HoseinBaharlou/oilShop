<template>
  <v-row class="justify-center align-center mt-16">
    <!-- start title and description and arrow for carousel-->
    <v-col md="3" cols="10" offset="1" offset-md="1">
      <custom-editor @event_contents="body = $event" :namePage="namePage" :typePage="typePage" :value="body" @PageManager="canPageManager = $event" v-show="canPageManager"/>
      <div v-html="body" v-if="body"></div>

      <!-- arrows -->
      <div class="d-flex justify-end mt-7">
        <v-btn fab class="purple darken-2 mx-2" elevation="0" @click="next"><v-icon color="white" x-large>mdi-arrow-right-thin</v-icon></v-btn>
        <v-btn fab class="purple darken-2 mx-2" elevation="0" @click="prev"><v-icon color="white" x-large>mdi-arrow-left-thin</v-icon></v-btn>
      </div>
      <!-- end arrows -->
    </v-col>
    <!-- end title and description and arrow for carousel-->

    <!-- start carousel -->
    <v-col md="8" cols="12">
      <VueSlickCarousel v-bind="settings" ref="carousel">
        <picture class="px-5">
          <v-img src="image/2.svg"/>
        </picture>
        <picture class="px-5">
          <v-img src="image/2.svg"/>
        </picture>
        <picture class="px-5">
          <v-img src="image/2.svg"/>
        </picture>
        <picture class="px-5">
          <v-img src="image/2.svg"/>
        </picture>
        <picture class="px-5">
          <v-img src="image/2.svg"/>
        </picture>
        <picture class="px-5">
          <v-img src="image/2.svg"/>
        </picture>
      </VueSlickCarousel>
    </v-col>
    <!-- end carousel -->
  </v-row>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import CustomEditor from "@/components/partials/customEditor";
export default {
  components:{CustomEditor, VueSlickCarousel},
  props:['namePage','typePage'],
  data:()=>{
    return {
      body:null,
      canPageManager:null,
      settings:{
          "dots": false,
          "infinite": true,
          "arrows":false,
          "speed": 500,
          "slidesToShow": 3,
          "slidesToScroll": 3,
          "initialSlide": 0,
          "responsive": [
              {
              "breakpoint": 1024,
              "settings": {
                  "slidesToShow": 3,
                  "slidesToScroll": 3,
                  "infinite": true,
                  "dots": true
              }
              },
              {
              "breakpoint": 600,
              "settings": {
                  "slidesToShow": 2,
                  "slidesToScroll": 2,
                  "initialSlide": 2
              }
              },
              {
              "breakpoint": 480,
              "settings": {
                  "slidesToShow": 1,
                  "slidesToScroll": 1
              }
              }
          ]
      }
    }
  },
  methods:{
      next(){
          this.$refs.carousel.next()
      },
      prev(){
          this.$refs.carousel.prev()
      }
  },
  created(){
    let namePage = this.namePage
    let typePage = this.typePage
    let content = ''
    this.$store.getters.contentPage.filter(function (elem){
      if (elem.name === namePage && elem.type === typePage){
        content = elem.body
      }
    })

    this.body = content
  }
}
</script>

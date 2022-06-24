<template>
  <v-container fluid>
    <!-- start title and descripion -->
    <v-container class="mb-10">
      <custom-editor @event_contents="body = $event" :namePage="namePage" :typePage="typePage" :value="body" @PageManager="canPageManager = $event" v-show="canPageManager"/>
      <div v-html="body" v-if="body"></div>
    </v-container>
    <!-- end title and descripion -->

    <!-- start carousel -->
    <consultantCarousel namePage="index" typePage="consultantCarouselText"/>
    <!-- end carousel -->
  </v-container>
</template>

<script>
import CustomEditor from "@/components/partials/customEditor";
import consultantCarousel from "@/components/partials/index/consultant/consultantCarousel";
export default {
  components: {CustomEditor,consultantCarousel},
  props:['namePage','typePage'],
  data(){
    return{
      body:null,
      canPageManager:null
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

<style scoped>

</style>

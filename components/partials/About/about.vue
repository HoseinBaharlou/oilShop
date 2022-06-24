<template>
    <v-row>
        <!-- start title and content -->
        <v-col cols="12" md="12">
          <custom-editor @event_contents="body = $event" :namePage="namePage" :typePage="typePage" :value="body" @PageManager="canPageManager = $event" v-show="canPageManager"/>
          <div v-html="body" v-if="body"></div>
        </v-col>

    </v-row>
</template>

<script>
import CustomEditor from "@/components/partials/customEditor";
export default {
  components: {CustomEditor},
  head(){
    return{
      title:'درباره ما'
    }
  },
  data(){
    return{
      body:null,
      canPageManager:null,
      namePage: 'index',
      typePage: 'about'
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

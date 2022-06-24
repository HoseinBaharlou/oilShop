<template>
    <v-row class="align-center">
        <!-- company information -->
        <v-col cols="12">
          <custom-editor @event_contents="body = $event" :namePage="namePage" :typePage="typePage" :value="body" @PageManager="canPageManager = $event" v-show="canPageManager"/>
          <div v-html="body" v-if="body"></div>
        </v-col>

        <!-- start map -->
        <v-col cols="12" class="mt-17">
            <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/wearable-gps/">wearable gps</a></iframe></div>
        </v-col>
    </v-row>
</template>

<script>
import CustomEditor from "@/components/partials/customEditor";
export default {
  components: {CustomEditor},
  head() {
    return {
      title: "تماس یا ما"
    };
  },
  data(){
    return{
      body:null,
      canPageManager:null,
      namePage: 'index',
      typePage: 'call'
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

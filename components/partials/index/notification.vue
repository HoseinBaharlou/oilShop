<template>
    <v-container class="notification">
        <!-- start title and content -->
        <custom-editor @event_contents="body = $event" :namePage="namePage" :typePage="typePage" :value="body" @PageManager="canPageManager = $event" v-show="canPageManager"/>
        <div v-html="body" v-if="body"></div>
        <!-- end title and content -->

        <!-- start form -->
        <v-row class="mt-8">
            <v-col cols="8" offset-md="4" md="4" offset="2">
                <v-form>
                    <v-text-field rounded filled label="ایمیل" outlined >
                        <v-btn slot="append" color="purple darken-2" fab elevation="0" small>
                            <v-icon color="white" large>mdi-arrow-left-thin</v-icon>
                        </v-btn>
                    </v-text-field>
                </v-form>
            </v-col>
        </v-row>
        <!-- end form -->
    </v-container>
</template>
<script>
import CustomEditor from "@/components/partials/customEditor";
export default {
  components: {CustomEditor},
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
<style lang='scss'>
.notification{
    .v-input__append-outer{
        margin-top: 8px !important;
    }
    .v-input__append-inner{
        margin-top: 8px !important;
    }
}
</style>

<template>
    <v-container>
        <!-- start title and description -->
        <custom-editor @event_contents="body = $event" :namePage="namePage" :typePage="typePage" :value="body" @PageManager="canPageManager = $event" v-show="canPageManager"/>

        <div v-html="body" v-if="body"></div>
        <!-- end title and description -->

        <!-- start advantage -->
        <div v-if="$store.getters['post/post_list']">
          <article class="mt-17" v-for="(item,index) in $store.getters['post/post_list']" :key="index" v-if="index <= 2">
            <v-row class="mt-17" v-if="post_list(index+1)">
              <!-- start title and description -->
              <v-col md="6" cols="12">
                <v-badge color="purple darken-2" left offset-y="18" class="mx-4" :content="index+1">
                  <span class="mx-4">{{item.title}}</span>
                </v-badge>

                <h2 class="mt-5">{{ item.title }}</h2>

                <p class="text-justify mt-4 font-size-12">
                  {{item.text}}
                </p>

                <div class="d-flex justify-end">
                  <nuxt-link :to="`/post/show/${item.id}`" color="purple darken-2" class="white--text px-15 rounded-xl font-size-14" large elevation="0">مقالات</nuxt-link>
                </div>
              </v-col>
              <!-- end title and description -->

              <!-- start image -->
              <v-col cols="6" class="d-none d-md-flex justify-center">
                <v-img :src="item.file" :lazy-src="item.file" max-height="294" max-width="294" />
              </v-col>
              <!-- end image -->
            </v-row>

            <v-row class="mt-17 align-center" v-else>
              <!-- start image -->
              <v-col cols="6" class="d-none d-md-flex justify-center">
                <v-img :src="item.file" :lazy-src="item.file" max-height="294" max-width="294" />
              </v-col>
              <!-- end image -->

              <!-- start title and description -->
              <v-col md="6" cols="12">
                <v-badge color="purple darken-2" left offset-y="18" class="mx-4" :content="index+1">
                  <span class="mx-4">{{item.title}}</span>
                </v-badge>

                <h2 class="mt-5">{{item.title}}</h2>

                <p class="text-justify mt-4 font-size-12">
                  {{item.text}}
                </p>

                <div class="d-flex justify-end">
                  <nuxt-link :to="`/post/show/${item.id}`" color="purple darken-2" class="white--text px-15 rounded-xl font-size-14" large elevation="0">مقالات</nuxt-link>
                </div>
              </v-col>
              <!-- end title and description -->
            </v-row>
          </article>
        </div>
        <!-- end advantage -->
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
  methods:{
    post_list(index){
      return index % 2;
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

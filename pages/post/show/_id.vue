<template>
    <v-container fluid>
        <v-row class="article">
            <v-col cols="10" offset="1">
                <v-row>
                    <!-- start writer -->
                    <v-col cols="12" md="2">
                        <Writer :writer="$store.getters['showPost/show_post'].writer" :updated_at="$store.getters['showPost/show_post'].updated_at"/>
                    </v-col>
                    <!-- end writer -->
                    <!-- start post -->
                    <v-col cols="12" md="10">
                        <Article :title="$store.getters['showPost/show_post'].title" :text="$store.getters['showPost/show_post'].text" :is_liked="$store.getters['showPost/show_post'].is_liked" :likes_count="$store.getters['showPost/show_post'].likes_count"/>
                    </v-col>
                    <!-- end post -->

                    <!-- start comment -->
                    <v-col cols="12" md="10" offset="2">
                        <v-tabs v-model="tab">
                            <v-tab>
                                نظرات کاربران
                            </v-tab>

                            <v-tab v-if="$auth.loggedIn">نوشتن نظر</v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab" class="mt-10">
                            <v-row>
                                <v-col cols="12" md="8">
                                    <!-- comments -->
                                    <v-tab-item>
                                      <v-alert v-if="!$store.getters['showPost/show_post'].comments[0]" class="white--text" color="info" v-model="alert">
                                        اولین شخصی باشید که برای این پست نظر خود را ثبت میکنید.
                                      </v-alert>

                                      <comment v-else class="my-5" v-for="item in $store.getters['showPost/show_post'].comments" :key="item.id" :data="item" />
                                    </v-tab-item>
                                </v-col>

                                <v-col cols="12" v-if="$auth.loggedIn">
                                    <!-- write comment -->
                                    <v-tab-item>
                                        <writeComment/>
                                    </v-tab-item>
                                </v-col>
                            </v-row>
                        </v-tabs-items>
                    </v-col>

                    <!-- end comment -->

                    <!-- start write comment -->

                    <!-- end write comment -->
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Article from '../../../components/partials/post/article.vue'
import Writer from '../../../components/partials/post/writer.vue'
import comment from '../../../components/partials/post/comment.vue'
import writeComment from '../../../components/partials/post/writeComment.vue'
export default {
  components:{Article,Writer,comment,writeComment},
  head() {
    return {
      title: this.$store.getters['showPost/show_post'].title
    };
  },
  data:()=>{
    return{
      tab:null,
      alert:true,
    }
  },
  async asyncData({store,$axios,route}){
    await $axios.get(`/posts/${route.params.id}`).then(res=>{
      store.dispatch('showPost/show_post',res.data.post)
    })
  },
}
</script>

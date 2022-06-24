<template>
    <v-container fluid>
        <v-row class="article">
            <v-col cols="10" offset="1">
                <v-row>
                    <!-- start breadcrumbs -->
                    <v-col cols="12">
                        <v-breadcrumbs :items="items"></v-breadcrumbs>
                        <v-divider></v-divider>
                    </v-col>
                    <!-- end breadcrumbs -->

                    <!-- start filter -->
                    <v-col cols="12" md="2">
                        <filterArticle class="mt-md-11"/>
                    </v-col>
                    <!-- end filter -->

                    <!-- start post -->
                    <v-col cols="12" md="10">
                      <v-row>
                        <v-col md="3" cols="12" class="my-11" v-for="item in $store.getters['showPost/post_list']" :key="item.id">
                          <Article :to="item.id" :like_count="item.likes_count" :file="item.file" :title="item.title" :writer="item.writer" :updated_at="item.updated_at.split(' ')[0]"/>
                        </v-col>
                      </v-row>
                    </v-col>
                    <!-- end post -->
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import filterArticle from '../../components/partials/post/filter.vue'
import Article from '../../components/partials/post/posts.vue'
export default {
  components:{filterArticle,Article},
  data:()=>{
      return{
          items: [
              {
                  text: 'صفحه اصلی',
                  disabled: true,
                  href: 'breadcrumbs_dashboard',
              },
              {
                  text: 'مقالات',
                  disabled: true,
                  href: 'breadcrumbs_dashboard',
              },
          ],
      }
  },
}
</script>

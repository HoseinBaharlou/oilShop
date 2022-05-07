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

                    <!-- start article -->
                    <v-col cols="12" md="10">
                        <Article/>
                    </v-col>
                    <!-- end article -->
                </v-row>    
            </v-col> 
        </v-row>
    </v-container>
</template>

<script>
import filterArticle from '../components/partials/article/filter.vue'
import Article from '../components/partials/article/article.vue'
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
    }
}
</script>

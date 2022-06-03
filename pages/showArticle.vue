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
                    <!-- start writer -->
                    <v-col cols="12" md="2">
                        <Writer/>
                    </v-col>
                    <!-- end writer -->
                    <!-- start post -->
                    <v-col cols="12" md="10">
                        <Article/>
                    </v-col>
                    <!-- end post -->

                    <!-- start comment -->
                    <v-col cols="12" md="10" offset="2">
                        <v-tabs v-model="tab">
                            <v-tab>
                                نظرات کاربران
                            </v-tab>

                            <v-tab>نوشتن نظر</v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab" class="mt-10">
                            <v-row>
                                <v-col cols="12" md="8">
                                    <!-- comments -->
                                    <v-tab-item>
                                        <comment/>
                                    </v-tab-item>
                                </v-col>

                                <v-col cols="12">
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
import Article from '../components/partials/post/article.vue'
import Writer from '../components/partials/post/writer.vue'
import comment from '../components/partials/post/comment.vue'
import writeComment from '../components/partials/post/writeComment.vue'
export default {
    components:{Article,Writer,comment,writeComment},
    data:()=>{
        return{
            tab:null,
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

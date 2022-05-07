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

                    <!--start information -->
                    <v-col cols="12" class="mt-7" > 
                        <about/>
                    </v-col>
                    <!-- end information -->

                    <!-- start gallery -->
                    <v-col cols="12" class="mt-24">
                        <gallery/>
                    </v-col>
                    <!-- end gallery -->
                </v-row>   
            </v-col> 
        </v-row>
    </v-container>
</template>

<script>
import about from '../components/partials/About/about.vue'
import gallery from '../components/partials/About/gallery.vue'
export default {
    setup() {
        
    },
    components:{about,gallery},
    data:()=>{
        return{
            items: [
                {
                    text: 'صفحه اصلی',
                    disabled: true,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'درباره ما',
                    disabled: true,
                    href: 'breadcrumbs_dashboard',
                },
            ],
        }
    }
}
</script>
<template>
    <v-container fluid>
        <v-row>
            <v-col cols="10" offset="1">
                <v-row>
                    <!-- start breadcrumbs -->
                    <v-col cols="12">
                        <v-breadcrumbs :items="items"></v-breadcrumbs>
                        <v-divider></v-divider>
                    </v-col>
                    <!-- end breadcrumbs -->
                    <!--start information -->
                    <v-col cols="10" class="mt-10" offset-sm="1">
                        <analyse/>
                    </v-col>
                    <!-- end information -->
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import analyse from '../components/partials/gallery/gallery.vue'
export default {
    setup() {

    },
    components:{analyse},
    head(){
      return{
        title:'گالری'
      }
    },
    data:()=>{
        return{
            items: [
                {
                    text: 'صفحه اصلی',
                    disabled: true,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'گالری تصاویر',
                    disabled: true,
                    href: 'breadcrumbs_dashboard',
                },
            ],
        }
    }
}
</script>

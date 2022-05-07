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
                    <v-col cols="10" class="mt-16" offset="1">
                        <TellMe/>
                    </v-col>
                    <!-- end information -->
                </v-row>   
            </v-col> 
        </v-row>
    </v-container>
</template>

<script>
import TellMe from '../components/partials/tellMe/tell_me.vue'
export default {
    setup() {
        
    },
    components:{TellMe},
    data:()=>{
        return{
            items: [
                {
                    text: 'صفحه اصلی',
                    disabled: true,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'خبرنامه',
                    disabled: true,
                    href: 'breadcrumbs_dashboard',
                },
            ],
        }
    }
}
</script>

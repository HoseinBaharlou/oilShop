<template>
    <VueSlickCarousel v-bind="settings" class="custom-carousel">
        <v-card elevation="0">
            <v-card-actions>
                <v-row>
                    <v-col cols="6" md="4">
                        <v-img src="image/247.png" lazy-src="image/247.png"/>
                    </v-col>

                    <v-col cols="6" md="4">
                        <v-img src="image/Rectangle 246.png" lazy-src="image/Rectangle 246.png"/>
                    </v-col>

                    <v-col cols="6" md="4">
                        <v-img src="image/Rectangle 247.png" lazy-src="image/Rectangle 247.png"/>
                    </v-col>

                    <v-col cols="6" md="4">
                        <v-img src="image/Rectangle 244.png" lazy-src="image/Rectangle 244.png"/>
                    </v-col>
                    <v-col cols="6" md="4">
                            <v-img src="image/247.png" lazy-src="image/247.png"/>
                    </v-col>

                    <v-col cols="6" md="4">
                        <v-img src="image/Rectangle 246.png" lazy-src="image/Rectangle 246.png"/>
                    </v-col>

                    <v-col cols="6" md="4">
                        <v-img src="image/Rectangle 247.png" lazy-src="image/Rectangle 247.png"/>
                    </v-col>

                    <v-col cols="6" md="4">
                        <v-img src="image/Rectangle 244.png" lazy-src="image/Rectangle 244.png"/>
                    </v-col>

                    <v-col cols="6" md="4">
                        <v-img src="image/Rectangle 247.png" lazy-src="image/Rectangle 247.png"/>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>

        <v-card elevation="0">
            <v-card-actions>
                <v-row>
                    <v-col cols="6" md="4">
                        <v-img src="image/247.png" lazy-src="image/247.png"/>
                    </v-col>

                    <v-col cols="6" md="4">
                        <v-img src="image/Rectangle 246.png" lazy-src="image/Rectangle 246.png"/>
                    </v-col>

                    <v-col cols="6" md="4">
                        <v-img src="image/Rectangle 247.png" lazy-src="image/Rectangle 247.png"/>
                    </v-col>

                    <v-col cols="6" md="4">
                        <v-img src="image/Rectangle 244.png" lazy-src="image/Rectangle 244.png"/>
                    </v-col>
                    <v-col cols="6" md="4">
                            <v-img src="image/247.png" lazy-src="image/247.png"/>
                    </v-col>

                    <v-col cols="6" md="4">
                        <v-img src="image/Rectangle 246.png" lazy-src="image/Rectangle 246.png"/>
                    </v-col>

                    <v-col cols="6" md="4">
                        <v-img src="image/Rectangle 247.png" lazy-src="image/Rectangle 247.png"/>
                    </v-col>

                    <v-col cols="6" md="4">
                        <v-img src="image/Rectangle 244.png" lazy-src="image/Rectangle 244.png"/>
                    </v-col>

                    <v-col cols="6" md="4">
                        <v-img src="image/Rectangle 247.png" lazy-src="image/Rectangle 247.png"/>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components:{VueSlickCarousel},
    data:()=>{
        return {
            settings:{
            "dots": true,
            "infinite": true,
            "arrows":false,
            "dotsClass": "slick-dots custom-dot-class",
            "edgeFriction": 0.35,
            "infinite": false,
            "speed": 500,
            "slidesToShow": 1,
            "slidesToScroll": 1
            }
        }
    }
}
</script>

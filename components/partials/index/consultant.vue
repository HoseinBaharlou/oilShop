<template>
    <div>
        <!-- start title and descripion -->
        <v-container class="mb-10"> 
            <h1 class="font-size-md-36 font-size-sm-30 text-center">مشاوره برای خرید</h1>
            <p class="grey-darken-4--text text-center mt-4">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
        </v-container>
        <!-- end title and descripion -->

        <!-- start carousel -->
        <v-row class="justify-center align-center mt-16">
            <!-- start title and description and arrow for carousel-->
            <v-col md="3" cols="10" offset="1" offset-md="1">
                <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</h2>
                <p class="mt-2 text-sm-justify">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>

                <!-- arrows -->
                <div class="d-flex justify-end mt-7">
                    <v-btn fab class="purple darken-2 mx-2" elevation="0" @click="next"><v-icon color="white" x-large>mdi-arrow-right-thin</v-icon></v-btn>
                    <v-btn fab class="purple darken-2 mx-2" elevation="0" @click="prev"><v-icon color="white" x-large>mdi-arrow-left-thin</v-icon></v-btn>
                </div>
                <!-- end arrows -->
            </v-col>
            <!-- end title and description and arrow for carousel-->

            <!-- start carousel -->
            <v-col md="8" cols="12">
                <VueSlickCarousel v-bind="settings" ref="carousel">
                    <picture class="px-5">
                        <v-img src="image/2.svg" lazy-src="image/2.svg" />
                    </picture>

                    <picture class="px-5">
                        <v-img src="image/2.svg" lazy-src="image/2.svg" />
                    </picture>

                    <picture class="px-5">
                        <v-img src="image/2.svg" lazy-src="image/2.svg" />
                    </picture>

                    <picture class="px-5">
                        <v-img src="image/2.svg" lazy-src="image/2.svg" />
                    </picture>

                    <picture class="px-5">
                        <v-img src="image/2.svg" lazy-src="image/2.svg" />
                    </picture>
                </VueSlickCarousel>
            </v-col>
            <!-- end carousel -->
        </v-row>
        <!-- end carousel -->
    </div>
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
                "centerMode": true,
                "centerPadding": "20px",
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "variableWidth": true
            }
        }
    },
    methods:{
        next(){
            this.$refs.carousel.next()
        },
        prev(){
            this.$refs.carousel.prev()
        }
    }
}
</script>
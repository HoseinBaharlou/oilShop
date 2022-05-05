<template>
    <div class="custom-tab-wrapper">
        <!-- start title and description -->
        <v-container>
            <h1 class="font-size-md-36 font-size-sm-25 text-center">محصولات ما</h1>

            <p class="mt-5 text-center grey-darken-4--text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
        </v-container>
        <!-- end title and description -->

        <!-- start tabs and carousel -->

        <!-- start tab -->
        <v-tabs class="custom-tabs mt-8" centered v-model="tab" show-arrows>
            <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
            <v-tab class="black--text px-10" active-class="active-tab" href="#tab-1">نوع روغن</v-tab>
            <v-tab class="black--text px-10" active-class="active-tab" href="#tab-2">نوع روغن</v-tab>
            <v-tab class="black--text px-10" active-class="active-tab" href="#tab-3">نوع روغن</v-tab>
            <v-tab class="black--text px-10" active-class="active-tab" href="#tab-4">نوع روغن</v-tab>
            <v-tab class="black--text px-10" active-class="active-tab" href="#tab-5">نوع روغن</v-tab>
            <v-tab class="black--text px-10" active-class="active-tab" href="#tab-6">نوع روغن</v-tab>
        </v-tabs>
        <!-- end tab -->

        <!-- start items -->
        <v-tabs-items v-model="tab" class="mt-16 mb-16">
            <v-tab-item value="tab-1">
                <v-container fluid>
                    <v-row>
                        <v-col md="10" offset-md="1" cols="12">
                            <carousel>
                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/1.svg" lazy-src="image/1.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/1.svg" lazy-src="image/1.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>
                            </carousel>
                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item>

            <v-tab-item value="tab-2">
                <v-container fluid>
                    <v-row>
                        <v-col md="10" offset-md="1" cols="12">
                            <carousel>
                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/1.svg" lazy-src="image/1.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/1.svg" lazy-src="image/1.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>
                            </carousel>
                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item>

            <v-tab-item value="tab-3">
                <v-container fluid>
                    <v-row>
                        <v-col md="10" offset-md="1" cols="12">
                            <carousel>
                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/1.svg" lazy-src="image/1.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/1.svg" lazy-src="image/1.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>
                            </carousel>
                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item>

            <v-tab-item value="tab-4">
                <v-container fluid>
                    <v-row>
                        <v-col md="10" offset-md="1" cols="12">
                            <carousel>
                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/1.svg" lazy-src="image/1.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/1.svg" lazy-src="image/1.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>
                            </carousel>
                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item>

            <v-tab-item value="tab-5">
                <v-container fluid>
                    <v-row>
                        <v-col md="10" offset-md="1" cols="12">
                            <carousel>
                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/1.svg" lazy-src="image/1.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/1.svg" lazy-src="image/1.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>
                            </carousel>
                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item>

            <v-tab-item value="tab-6">
                <v-container fluid>
                    <v-row>
                        <v-col md="10" offset-md="1" cols="12">
                            <carousel>
                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/1.svg" lazy-src="image/1.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/1.svg" lazy-src="image/1.svg" />
                                </picture>

                                <picture class="px-5">
                                    <v-img src="image/2.svg" lazy-src="image/2.svg" />
                                </picture>
                            </carousel>
                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item>
        </v-tabs-items>
        <!-- end items -->

        <!-- end tabs and carousel -->
    </div>
</template>
<script>
import carousel from './slick_carousel.vue'
export default {
    data:()=>{
        return{
            tab:null
        }
    },
    components:{carousel}
}
</script>

<style lang='scss'>
.custom-tab-wrapper{
    .v-tabs-slider-wrapper{ 
        width: 0 !important;
        height: 0 !important;
    }
    .active-tab{
        color: #ffff !important;
        background: #752585 !important;
        border-radius: 24px !important;
        border: none !important;
    }
}
</style>
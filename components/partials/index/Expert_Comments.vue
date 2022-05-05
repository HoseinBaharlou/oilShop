<template>
    <v-container fluid class="bg-Expert-Comments">
        <!-- start title and icon -->
        <v-row>
            <v-col md="4" offset-md="2" class="d-none d-md-block"> 
                <v-img src="image/Shape.svg" lazy-src="image/Shape.svg" max-height="100" max-width="150"/>
            </v-col>
            <v-col md="6" cols="12">
                <h1 class="font-size-md-37 font-size-sm-30 text-center text-md-right">نظرات کارشناسان</h1>
            </v-col>
        </v-row>
        <!-- end title and icon -->

        <!-- start content -->
        <v-row class="">
            <!-- start avatar and content -->
            <v-col md="4" cols="12" class="justify-center d-flex" offset-md="2">
                <v-card elevation="0">
                    <v-card-title>
                        <v-avatar size="101">
                            <v-img src="icons/Oval2.svg"/>
                        </v-avatar>
                        <p class="mx-8">احسان مهدوی</p>
                    </v-card-title>
                    <v-card-text class="mt-6 font-size-16 black--text">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </v-card-text>
                </v-card>
            </v-col>
            <!-- end avatar and content -->

            <!-- start title and text -->
            <v-col md="6" cols="12" class="justify-end d-flex px-sm-6">
                <div class="ml-md-16 mt-8 custom-card">
                    <h2 class="text-right">لورم ایپسوم</h2>
                    <p class="text-justify mt-2 font-size-16">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                    <div class="d-flex justify-end mt-22 mb-110">
                        <v-btn fab class="purple darken-2 mx-2" elevation="0"><v-icon color="white" x-large>mdi-arrow-left-thin</v-icon></v-btn>
                    </div>
                </div>
            </v-col>
            <!-- end title and text -->
        </v-row>
        <!-- end content -->
    </v-container>
</template>

<style scoped>
.bg-Expert-Comments{
    background-image: url('assets/image/Rectangle 3.svg');
}

.custom-card{
    width: 479px;
}

@media only screen and (max-width: 960px){
    .bg-Expert-Comments{
        background: none !important;
    }
    .custom-card{
        width: auto !important;
    }
}
</style>
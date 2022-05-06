<template>
    <v-container class="notification">
        <!-- start title and content -->
        <h1 class="font-size-md-36 font-size-sm-30 text-center">درباره محصولات و اخبار اعلان دریافت کنید</h1>
        <p class="text-center mt-10">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد..
        </p>
        <!-- end title and content -->

        <!-- start form -->
        <v-row class="mt-8">
            <v-col cols="8" offset-md="4" md="4" offset="2">
                <v-form>
                    <v-text-field rounded filled label="ایمیل" outlined >
                        <v-btn slot="append" color="purple darken-2" fab elevation="0" small>
                            <v-icon color="white" large>mdi-arrow-left-thin</v-icon>
                        </v-btn>
                    </v-text-field>
                </v-form>
            </v-col>
        </v-row> 
        <!-- end form -->
    </v-container>
</template>

<style lang='scss'>
.notification{
    .v-input__append-outer{
        margin-top: 8px !important;
    }
    .v-input__append-inner{
        margin-top: 8px !important;
    }
}
</style>
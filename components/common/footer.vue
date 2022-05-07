<template>
    <v-footer class="d-none d-md-block" color="white">
        <v-row class="align-end overflow-hidden">
            <v-col cols="6" class="pa-0">
                <v-img src="image/Group 23.svg" lazy-src="image/Group 23.svg" height="883" width="689"/>
            </v-col>

            <v-col cols="6" class="pa-0 custom-footer">
                <v-img src="image/Group 8.svg" lazy-src="image/Group 8.svg" class="custom-image-footer" height="434" width="530"/>
            </v-col>
        </v-row>
    </v-footer>
</template>
<style scoped lang='scss'>
.custom-footer{
    position: relative !important;
    .custom-image-footer{
        position: absolute;
        left: -124px;
        bottom: -82px;
    }
}
</style>
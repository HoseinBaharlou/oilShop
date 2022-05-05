<template>
    <VueSlickCarousel v-bind="settings" class="custom-carousel-index">
        <slot></slot>
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
                "speed": 500,
                "slidesToShow": 4,
                "slidesToScroll": 4,
                "initialSlide": 0,
                "responsive": [
                    {
                    "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 3,
                        "infinite": true,
                        "dots": true
                    }
                    },
                    {
                    "breakpoint": 600,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "initialSlide": 2
                    }
                    },
                    {
                    "breakpoint": 480,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1
                    }
                    }
                ]
            }
        }
    }
}
</script>

<style lang='scss'>
.custom-carousel-index{
    .slick-dots{
        margin-top: 40px !important;
        position: unset !important;
        
        li{
            width: 21px !important;
            height: 21px !important;
            border: 1px solid #752585 !important;
            border-radius: 50px !important;
            button::before{
                font-size: 0 !important;
            }
        }
        .slick-active{
            background: #752585 !important;
        }
    }
}
</style>
<template>
    <v-card elevation="0" class="show-article">
        <!-- title -->
        <v-card-title class="justify-space-between elevation-3">
            <h4>{{title}}</h4>
            <h4>{{updated_at}}</h4>
        </v-card-title>
        <!-- text -->
        <v-card-text class="elevation-3 mt-5 pa-4">
            <article class="text-justify article px-3">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </article>

            <v-divider class="mt-8"></v-divider>
            <!-- like and share -->
            <v-card-actions class="justify-space-between mt-3">
                <div>
                    <span>تعداد کلمات:</span>
                    <span>{{text.length}}</span>
                </div>

                <div>
                    <v-dialog max-width="200" class="white">
                      <template v-slot:activator="{attr,on}">
                        <button class="mx-5" v-bind="attr" v-on="on">
                          <v-icon color="blue">mdi-share-variant-outline</v-icon>
                        </button>
                      </template>

                      <v-card>
                        <v-card-text class="d-flex justify-space-around pt-3">
                          <social_sahring network="telegram" :title="title" :text="text" :url="url">
                            <v-icon color="blue">mdi-navigation-variant-outline</v-icon>
                          </social_sahring>

                          <social_sahring network="whatsapp" :title="title" :text="text" :url="url">
                            <v-icon color="green">mdi-whatsapp</v-icon>
                          </social_sahring>
                        </v-card-text>
                      </v-card>
                    </v-dialog>
                    <v-badge overlap left color="white" :content="likesCount ? likesCount : '0'">
                        <v-icon :color="isLiked ? 'red' : 'grey'" @click="likePost">mdi-thumb-up-outline</v-icon>
                    </v-badge>
                </div>
            </v-card-actions>
        </v-card-text>
    </v-card>
</template>
<script>
import social_sahring from "@/components/partials/post/social_sahring";
export default {
  props:['title','text','updated_at','likes_count','is_liked'],
  components:{social_sahring},
  data(){
    return{
      isLiked:false,
      likesCount:0,
      url:null
    }
  },
  methods:{
    likePost(){
      this.isLiked = !this.isLiked

      let reqType = this.isLiked ? 'post' : 'delete';
      this.$axios[reqType](`likes/${this.$route.params.id}`).then(()=>
        this.isLiked ? this.likesCount++ : this.likesCount--
      )
    },
  },
  created() {
    this.isLiked = this.is_liked
    this.likesCount = this.likes_count
    if (process.client){
      this.url = window.location.href
    }
  }
}
</script>
<style lang='scss'>
.show-article{
    .v-badge__badge{
        color: #000000 !important;
    }
    .article{
        border-left: 3px dashed #752585;
        border-right: 3px dashed #752585;
    }
}

</style>

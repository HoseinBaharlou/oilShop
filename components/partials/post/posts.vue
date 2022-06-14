<template>
  <nuxt-link :to="`/post/show/${to}`" class="article text-decoration-none">
    <article class="px-0 mx-0">
      <!-- start img post -->
      <v-img :src="file">
        <section class="content">
          <!-- start title -->
          <div class="custom-title enable_blur">
            <div class="d-flex py-5 px-3">
              <h3 class="white--text">{{title}}</h3>
              <v-spacer></v-spacer>
              <v-badge color="white" class="custom-dot-badge" :content="like_count ? like_count : '0'" overlap left offset-y="18">
                <v-icon color="red" large>mdi-cards-heart</v-icon>
              </v-badge>
            </div>
          </div>
          <!-- end title -->
          <!-- start date and writer -->
          <div class="d-flex custom-info py-2">
            <div class="font-size-13 d-flex align-center">
              <v-icon color="white">mdi-square-edit-outline</v-icon>
              <span class="white--text">{{writer}}</span>
            </div>
            <v-spacer></v-spacer>
            <div class="font-size-13 d-flex align-center">
              <v-icon color="white">mdi-calendar-range</v-icon>
              <span class="white--text">{{updated_at}}</span>
            </div>
          </div>
          <!-- end date and writer -->
        </section>
      </v-img>
      <!-- end img post -->
    </article>
  </nuxt-link>
</template>
<script>
export default {
  name:'post',
  props:['title','writer','updated_at','file','like_count','to']
}
</script>
<style scoped lang='scss'>
    .article{
        .custom-info{
            // margin-right: 3% !important;
            width: 100%;
            background: #752585 0% 0% no-repeat padding-box;
            opacity: 0.7;
        }
        .custom-title{
            background: rgba( 255, 255, 255, 0.1 );
            backdrop-filter: blur( 4.5px );
            -webkit-backdrop-filter: blur( 4.5px );
            width: 100%;
        }
        .content{
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
            height: 100%;
        }
    }
</style>

<style lang='scss'>
    .custom-dot-badge{
        .v-badge__badge{
            color: #000 !important;
        }
    }
</style>

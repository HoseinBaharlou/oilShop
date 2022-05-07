<template>
    <section>
      <!-- start app bar -->
      <v-app-bar height="86" absolute elevation="0">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-block d-md-none"></v-app-bar-nav-icon>
          <!-- start links -->
          <div class="d-none d-md-block">
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4 custom-nuxt-link">صفحه اصلی</nuxt-link>
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4 custom-nuxt-link">محصولات</nuxt-link>
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4 custom-nuxt-link">مقالات</nuxt-link>
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4 custom-nuxt-link">خبرنامه</nuxt-link>
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4 custom-nuxt-link">تماس با ما</nuxt-link>
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4 custom-nuxt-link">درباره ما</nuxt-link>
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4 custom-nuxt-link">ارسال آنالیز</nuxt-link>
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4 custom-nuxt-link">گالری تصاویر</nuxt-link>
          </div>
          <v-spacer></v-spacer>
          <div class="orange rounded-xl d-flex align-center custom-search-box justify-end">
              <input type="search" name="search" class="rounded-r-xl" placeholder="جستجو...">
              <v-icon color="purple" class="mx-2 search-icon" large>mdi-magnify</v-icon>
          </div>
      </v-app-bar>
      <!-- end app bar -->
      
      <!-- start navbar mobile -->
        <v-navigation-drawer
    v-model="drawer"
    :app='app'
    :absolute='absolute'
    right
    
  >
    <v-list
      nav
      width="250"
      dense
    >
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-title>صفحه اصلی</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>محصولات</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>مقالات</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>خبرنامه</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>تماس با ما</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>درباره ما</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>ارسال آنالیز</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>گالری تصاویر</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
        </v-navigation-drawer>
    </section>
</template>
<script>
export default {
  setup() {
      
  },
  data:()=>{
      return{
          drawer:false,
          group:'null',
          app:false,
          absolute:null
      }
  },
  created: function () {
    if(process.client){
      if(window.innerWidth < 960){
        this.absolute = false
        this.app = true
      }else{
        this.absolute = true
        this.app = false
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.custom-search-box{
    width: 50px;
    height: 50px;
    transition: 0.5s ease;
    input{
        display: none;
        width: 100%;
        padding-right: 20px;
        &:focus{
            border:none !important;
            outline: none !important;
        }
    }
    .search-icon{
        cursor: pointer;
    }
    &:hover{
        width:30%;
        justify-content: end !important;
        input{
            display: block;
        }
    }
    @media only screen and (max-width:960px) {
      &:hover{
        width: 80% !important;
      }
    }
}
.custom-nuxt-link{
  position: relative;
  &::after{
    transition:all 0.5s ease;
    content: " ";
    width: 0%;
    height: 2px;
    background: #752585;
    position: absolute;
    bottom: 0px;
    margin: auto;
    left: 0;
    right: 0;
  }
  &:hover{
    &::after{
      width: 100%;
    }
  }
}


</style>
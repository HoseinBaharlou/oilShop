<template>
    <section>
      <!-- start app bar -->
      <v-app-bar height="86" absolute elevation="0">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-block d-md-none"></v-app-bar-nav-icon>
          <!-- start links -->
          <div class="d-none d-md-block">
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4">صفحه اصلی</nuxt-link>
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4">محصولات</nuxt-link>
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4">مقالات</nuxt-link>
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4">خبرنامه</nuxt-link>
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4">تماس با ما</nuxt-link>
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4">درباره ما</nuxt-link>
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4">ارسال آنالیز</nuxt-link>
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4">گالری تصاویر</nuxt-link>
          </div>
          <v-spacer></v-spacer>
          <div class="orange rounded-xl d-flex align-center custom-search-box justify-end">
              <input type="search" name="search" class="rounded-r-xl" placeholder="جستجو...">
              <v-icon color="purple" class="mx-2 search-icon" large>mdi-magnify</v-icon>
          </div>
      </v-app-bar>
      <!-- end app bar -->
      
      <!-- start navbar mobile -->
      <!-- <v-navigation-drawer
    v-model="drawer"
    class="navigation-drawer"
    right
    absolute
    width="250"
  >
    <v-list>
      <v-list-item-group
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
      </v-navigation-drawer> -->
      <!-- end navbar mobile -->
    </section>
</template>
<script>
export default {
    setup() {
        
    },
    data:()=>{
        return{
            drawer:false
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
.navigation-drawer{
    width: 240px !important;
}

</style>
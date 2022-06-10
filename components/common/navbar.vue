<template>
    <section>
      <!-- start app bar -->
      <v-app-bar height="86" absolute elevation="0">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-block d-md-none"></v-app-bar-nav-icon>
          <!-- start links -->
          <div class="d-none d-md-block">
              <nuxt-link to="/" class="black--text text-decoration-none font-size-15 mx-4 custom-nuxt-link">صفحه اصلی</nuxt-link>
              <div v-for="item in $store.getters.category" :key="item.id" class="d-inline">
                <nuxt-link :to="`${item.type}/${item.id}`" class="black--text text-decoration-none font-size-15 mx-4 custom-nuxt-link">{{item.label}}</nuxt-link>
              </div>
              <nuxt-link to="/tell_me" class="black--text text-decoration-none font-size-15 mx-4 custom-nuxt-link">تماس با ما</nuxt-link>
              <nuxt-link to="/about" class="black--text text-decoration-none font-size-15 mx-4 custom-nuxt-link">درباره ما</nuxt-link>
              <nuxt-link to="/analyze" class="black--text text-decoration-none font-size-15 mx-4 custom-nuxt-link">ارسال آنالیز</nuxt-link>
              <nuxt-link to="/gallery" class="black--text text-decoration-none font-size-15 mx-4 custom-nuxt-link">گالری تصاویر</nuxt-link>
          </div>
          <v-spacer></v-spacer>
          <!-- card -->
          <div class="mx-5">
            <v-icon large>mdi-basket</v-icon>
          </div>
          <!-- logout and dashboard -->
          <div>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs"
                v-on="on" x-large>mdi-account-circle</v-icon>
              </template>
              <v-list v-if="$auth.loggedIn">

                <v-list-item @click="logout">
                  <v-list-item-title>خروج از پنل</v-list-item-title>
                </v-list-item>

                <v-list-item to="/dashboard/main" v-if="canShowLinks(['show_admin_panel'])">
                  <v-list-item-title>
                    مشاهده پنل مدیریت
                  </v-list-item-title>
                </v-list-item>

                <v-list-item to="/user/profile">
                  <v-list-item-title>
                    پروفایل کاربری
                  </v-list-item-title>
                </v-list-item>
              </v-list>
              <!-- login and register -->
              <v-list v-if="!$auth.loggedIn">

                <v-list-item to="/auth/login">
                  <v-list-item-title>ورود</v-list-item-title>
                </v-list-item>

                <v-list-item to="/auth/register">
                  <v-list-item-title>ثبت نام</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <!-- search box -->
          <div>
            <v-dialog
              transition="dialog-top-transition"
              max-width="600"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-icon color="purple darken-2" class="mx-2 search-icon" large v-bind="attrs"
                  v-on="on">mdi-magnify</v-icon>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar
                    color="primary"
                    dark
                  >جستجو در سایت</v-toolbar>
                  <v-card-actions class="mt-5">
                    <v-text-field label="جستجو" outlined rounded></v-text-field>
                  </v-card-actions>
                  <v-card-actions class="justify-end">
                    <v-btn
                      text
                      @click="dialog.value = false"
                    >بستن</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
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
        <div v-for="item in $store.getters.category" :key="item.id">
          <v-list-item  :to="`${item.type}/${item.id}`">
            <v-list-item-title>{{item.label}}</v-list-item-title>
          </v-list-item>
        </div>
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
          absolute:null,
          category:[]
      }
  },
  created: function () {
    // navbar responsive
    if(process.client){
      if(window.innerWidth < 960){
        this.absolute = false
        this.app = true
      }else{
        this.absolute = true
        this.app = false
      }
    }
  },
  // logout
  methods:{
    async logout(){
      await this.$auth.logout()
    },
    canShowLinks(permissions){
      return permissions.some(permissions=>this.$auth.user.permission.includes(permissions))
    },
  },
  computed:{
    isAuthenticated(){
      return this.$store.getters.isAuthenticated;
    },
  },
  mounted() {
    this.category = this.$store.getters.category
  }
}
</script>

<style scoped lang='scss'>
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
.vertical-liner{
  border: 1px solid #606060;
  height: 25px;
}

</style>

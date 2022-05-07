<template>
  <v-app>
    <v-main>
        <!-- start navbar -->
        <NavBar/>
        <!-- end navbar -->
        <!-- start header -->
        <Header class="mt-21"/>
        <!-- end header -->

        <!--start render page -->
        <nuxt/>
        <!-- end render page -->

        <!-- start footer -->
        <Footer/>
        <!-- end footer -->
    </v-main>
  </v-app>
</template>

<script>
import Header from '../components/partials/index/header.vue'
import NavBar from '../components/common/navbar.vue'
import Footer from '../components/common/footer.vue'

// import Footer from '../components/common/footer.vue'
export default {
  setup() {
    
  },
  components:{Header,NavBar,Footer}
}
</script>

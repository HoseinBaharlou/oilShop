<template>
  <v-app>
    <v-main>
        <!-- start navbar -->
        <NavBar/>
        <!-- end navbar -->

        <!--start render page -->
        <nuxt class="mt-21"/>
        <!-- end render page -->

        <!-- start footer -->
        <Footer class="mt-180"/>
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

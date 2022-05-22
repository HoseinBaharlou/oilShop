<template>
    <v-app>
        <nav-bar/>
        <v-main>
            <v-container class="fill-height">
                <nuxt/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import NavBar from '../components/common/navbar.vue'
export default {
  setup() {

  },
  components:{NavBar},
  beforeCreate() {
    if (this.$store.getters.isAuthenticated){
      this.$router.push('/dashboard/main');
    }
  }
}
</script>

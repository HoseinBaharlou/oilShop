<template>
  <v-row>
    <!-- start preview component -->
    <v-col cols="12">
      <navbar-preview/>
    </v-col>
    <!-- end preview menu component -->

    <!-- start under menu creator -->
    <v-col cols="12">
      <under-menu/>
    </v-col>
    <!-- end under menu creator -->
  </v-row>
</template>

<script>
import navbarPreview from '../../components/partials/dashboard/navbarPreview.vue';
import underMenu from '../../components/partials/dashboard/underMenu.vue'
export default {
  setup() {

  },
  components:{navbarPreview,underMenu},
  layout:'dashboard'
}
</script>

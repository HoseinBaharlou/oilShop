<template>
  <section class="mt-10">
    <!-- start advantage -->
    <v-container>
      <advantage/>
    </v-container>
    <!-- end advantage -->

    <!-- start product -->
    <product class="mt-24"/>
    <!-- end product -->
  </section>
</template>

<script>
import advantage from '../components/partials/index/advantage.vue'
import product from '../components/partials/index/product.vue'
export default{
  setup() {
    
  },
  components:{advantage,product}
}
</script>

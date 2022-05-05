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

    <!-- start consultant -->
    <consultant/>
    <!-- end consultant -->

    <!-- start Expert Comments -->
    <expert-comments class="mt-160"/>
    <!-- end Expert Comments -->
  </section>
</template>

<script>
import advantage from '../components/partials/index/advantage.vue'
import product from '../components/partials/index/product.vue'
import consultant from '../components/partials/index/consultant.vue'
import ExpertComments from '../components/partials/index/Expert_Comments.vue'
export default{
  setup() {
    
  },
  components:{advantage,product,consultant,ExpertComments}
}
</script>

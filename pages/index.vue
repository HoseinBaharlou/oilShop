<template>
  <section class="mt-10">
    <!-- start advantage -->
    <v-container>
      <advantage namePage="index" typePage="advantage"/>
    </v-container>
    <!-- end advantage -->

    <!-- start product -->
    <product class="mt-24" namePage="index" typePage="product"/>
    <!-- end product -->

    <!-- start consultant -->
    <consultant namePage="index" typePage="consultant"/>
    <!-- end consultant -->

    <!-- start Expert Comments -->
    <expert-comments class="mt-160"/>
    <!-- end Expert Comments -->

    <!-- start tell me -->
    <tell-me class="mt-16" namePage="index" typePage="call_me"/>
    <!-- end tell me -->

    <!-- start notification -->
    <notification class="mt-24" namePage="index" typePage="notification"/>
    <!-- end notification -->
  </section>
</template>

<script>
import advantage from '../components/partials/index/advantage.vue'
import product from '../components/partials/index/product.vue'
import consultant from '../components/partials/index/consultant/constultant'
import ExpertComments from '../components/partials/index/Expert_Comments.vue'
import TellMe from '../components/partials/index/call_me.vue'
import notification from '../components/partials/index/notification.vue'
export default{
  setup() {

  },
  head(){
    return{
      title:'صفحه اصلی'
    }
  },
  layout:'home',
  components:{advantage,product,consultant,ExpertComments,TellMe,notification}
}
</script>

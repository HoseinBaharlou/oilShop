<template>
  <!-- start header with parallax -->
  <header>
    <section v-if="!$store.getters['common/checkSlider'] && $store.getters['common/image_header'].url">
      <Parallax/>
    </section>

    <section v-else>
      <Carousel/>
    </section>
  </header>
  <!-- end header with parallax -->
</template>
<script>
import Parallax from "@/components/partials/index/parallax";
import Carousel from "@/components/partials/index/carousel";
export default {
  components:{Parallax,Carousel}
}
</script>

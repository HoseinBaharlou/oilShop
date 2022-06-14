<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in $store.getters['common/header_slider'].url"
      :key="i"
      :src="item"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "carousel"
}
</script>

<style scoped>

</style>

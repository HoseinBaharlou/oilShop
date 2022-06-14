<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" v-for="item in $store.getters.contents">
        <shop :data="item"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import shop from "@/components/partials/shop/shop";
export default {
  name: "_slug",
  async asyncData({store,$axios,route}){
    await $axios.get(`/categories/shop/${encodeURIComponent(route.params.slug)}`).then((res)=>{
      store.dispatch('contents',res.data.product[0][0])
    })
  },
  components:{shop}
}
</script>

<style scoped>

</style>

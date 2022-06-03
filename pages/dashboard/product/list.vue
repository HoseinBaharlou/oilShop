<template>
<!--    product table-->
    <product-list/>
<!--    pagination-->
</template>

<script>
import ProductList from "@/components/partials/dashboard/product/productList";
export default {
  name: "index.vue",
  components: {ProductList},
  layout:'dashboard',
  asyncData({store,$axios}){
    $axios.get('/product').then((res)=>{
      store.dispatch('Product/product_list',res.data.product)
    })
  },
}
</script>

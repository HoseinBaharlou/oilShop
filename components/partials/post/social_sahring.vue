<template>
  <share-network :network="network" :url="url" :title="title" :description="text.slice(0,200)+'...'">
    <slot>
    </slot>
  </share-network>
</template>

<script>
export default {
  name: "social_sahring",
  props:['text','network','url','title']
}
</script>

<style scoped>

</style>

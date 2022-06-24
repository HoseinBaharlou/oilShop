<template>
  <v-img :src="$store.getters['common/image_header'].url" :lazy-src="$store.getters['common/image_header'].url" :height="$store.getters['common/image_header'].height">
    <v-row class="mt-16">
      <v-col cols="11" offset="1">
        <!-- start title -->
        <div>
          <h1 class="purple-text font-size-md-41 font-size-sm-25 custom-border-bottom d-inline">{{$store.getters["common/contentHeader"].title}}</h1>
        </div>
        <!-- end title -->
        <!-- start item -->
        <div class="purple-text font-size-md-25 font-size-sm-20 items mr-3 mt-7">
          <v-badge color="purple" left  offset-y="23" class="my-4" v-for="(item,index) in $store.getters['common/contentHeader'].subtitle" :key="index">
            <span class="mx-5">{{item}}</span>
          </v-badge>
        </div>
        <!-- end item -->
      </v-col>
    </v-row>
  </v-img>
</template>

<script>
export default {
  name: "parallax",
}
</script>

<style scoped>
.purple-text{
  color: #752585;
}

.items{
  display: flex;
  flex-direction: column;
}

.custom-border-bottom{
  padding-bottom: 11px;
  border-bottom: 6px solid #752585;
  border-radius: 6px;
}
</style>


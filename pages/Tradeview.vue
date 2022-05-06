<template>
  <v-row>
    <!-- start oil balance -->
    <v-col md="4" cols="12">
      <oilBalance/>
    </v-col>

    <v-col md="4" cols="12">
      <oilBalance/>
    </v-col>

    <v-col md="4" cols="12">
      <oilBalance/>
    </v-col>
    <!-- end oil balance -->

    <!-- start candlestick -->
    <v-col cols="12">
      <v-card class="rounded-xl">
        <v-card-title class="justify-space-between">
          <span>نمای تجاری</span>
          <v-icon>mdi-information-outline</v-icon>
        </v-card-title>
        <v-card-actions>
          <candlestick/>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import oilBalance from '../components/partials/dashboard/oilBalance.vue'
import candlestick from '../components/partials/dashboard/candlestick.vue'
export default {
  setup() {
    
  },
  components:{oilBalance,candlestick},
  layout:'dashboard'
}
</script>

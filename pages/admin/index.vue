<template>
  <v-row>
    <!-- start chart -->
    <v-col md="8" cols="12">
      <v-card class="rounded-xl">
        <v-card-title class="d-flex  justify-space-between ">
          <span>آمار فروش</span>
          <v-icon>mdi-information-outline</v-icon>
        </v-card-title>
        <hr class="custom-line-avatar-panel">
        <v-card-actions>
          <!-- start chart -->
          <linerChart/>
          <!-- end chart -->
        </v-card-actions>
      </v-card>
    </v-col>
    <!-- end chart -->

    <!-- start date -->
    <v-col md="4" cols="12">
      <v-card class="rounded-xl">

        <v-card-title class="justify-space-between">
          <span>تقویم</span>
          <v-icon>mdi-information-outline</v-icon>
        </v-card-title>
        <hr class="custom-line-avatar-panel">
        <v-card-actions class="pb-3">
          <!-- start picker -->
          <v-date-picker locale="fa-IR" v-model="picker" full-width class="custom-picker"></v-date-picker>
          <!-- end picker -->
        </v-card-actions>
      </v-card>
    </v-col>
    <!-- end date -->
    
    <!-- start trafic -->
    <v-col>
      <v-row>
        <v-col md="4" cols="12"><Trafic/></v-col>

        <v-col md="4" cols="12"><Trafic/></v-col>

        <v-col md="4" cols="12"><Trafic/></v-col>
      </v-row>
    </v-col>
    <!-- end trafic -->
  </v-row>
</template>
<script>
import linerChart from '../../components/partials/linerChart.vue'
import Trafic from '../../components/partials/dashboard/Trafic.vue'
export default {
  setup() {
    
  },
  data:()=>{
    return{
      picker: new Date().toISOString().substr(0, 10),
    }
  },
  components:{linerChart,Trafic},
  layout:'admin'
}
</script>
<style>
.custom-picker .v-picker__title{
  display: none;
}
.custom-picker .v-btn--active{
  border-radius: 8px !important;
  background: #508ff4 !important;
}
.custom-picker .v-btn{
  border-radius: 8px !important;
}
</style>
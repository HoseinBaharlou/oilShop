<template>
  <v-row>
    <!-- start chart -->
    <v-col md="8" cols="12">
      <v-card class="rounded-xl">
        <v-card-title class="d-flex  justify-space-between pb-2">
          <span>آمار فروش</span>
          <v-icon>mdi-information-outline</v-icon>
        </v-card-title>

        <v-divider class="mx-5"></v-divider>

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
        <!-- start title -->
        <v-card-title class="justify-space-between pb-2">
          <span>تقویم</span>
          <v-icon>mdi-information-outline</v-icon>
        </v-card-title>
        <!-- end title -->
        <v-divider class="mx-4"></v-divider>

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
import linerChart from '../../components/partials/dashboard/linerChart.vue'
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
  layout:'dashboard'
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
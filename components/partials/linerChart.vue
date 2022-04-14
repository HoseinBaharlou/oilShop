<template>
  <v-row>
    <v-col cols="12">
      <v-btn-toggle
        v-model="text"
        tile
        color="grey darken-4"
        group
        class="custom-toggle"
      >
        <v-btn value="left" small rounded>
          مجموع
        </v-btn>

        <v-btn value="center" small>
          امروز
        </v-btn>

        <v-btn value="right" small>
          این هفته
        </v-btn>

        <v-btn value="justify" small>
          امسال
        </v-btn>
      </v-btn-toggle>

    </v-col>
    <v-col cols="12">
      <apexchart type="line" height="220" :options="chartOptions" :series="series" class="m-auto"></apexchart>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data () {
  return {
    text: 'center',
    items: [
      'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    series: [
    {
    name: 'Sales',
    data: [100, 200, 150, 200, 500, 250]
    },
    {
    name: 'test',
    data: [100, 110, 300, 250, 400, 200,100, 110, 300, 250, 400, 200]
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: 'line',
      toolbar:{
        show:false
      },
      zoom: {
        enabled: false
      }
    },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    legend:{
      show:false
    },
    xaxis: {
      labels:{
      show:false
      },
      tooltip:{
      enabled: false,
      },
      lines: {
        show: false
      },
      crosshairs:{
        show:false
      }
    },
    yaxis: {
      min:100,
      max:600,
      range:100
    },
    markers:{
      strokeWidth:5,
    },
    },
  }
},
methods:{
  Test(event){
    console.log(event)
  }
}
}
</script>

<style>
.custom-toggle .v-btn--active::before{
  background-color: #52575d !important;
  opacity: 1 !important;
  border-radius: 8px !important;
}
.custom-toggle .v-btn--active .v-btn__content{
  color: #fff !important;
}
</style>

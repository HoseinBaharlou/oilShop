<template>
  <article>
    <v-img :src="data.file" :alt="data.title">
      <v-row class="align-content-space-between pa-0 ma-0" style="height: 100%">
        <v-col cols="12" class="white--text d-flex justify-center flex-column align-center title">
          <div>
            {{data.title}}
          </div>

          <div>
            <span class="mx-1">{{data.volume}}</span><span>{{data.unit}}</span>
          </div>
        </v-col>

        <v-col cols="12" class="white--text d-flex justify-center flex-column align-center buy">
          <v-btn text block class="white--text" @click="about">ادامه فرایند خرید</v-btn>
        </v-col>
      </v-row>
    </v-img>
  </article>
</template>

<script>
export default {
  name: "shop",
  props:['data'],
  methods:{
    about(){
      this.$swal({
        type:'info',
        text:'به علت نوسان قیمت لطفا برای سفارش محصول با شرکت تماس حاصل نمایید.'
      })
    }
  }
}
</script>

<style scoped>
.title{
  background: transparent linear-gradient(180deg, #75258587 0%, #752585AA 0%, #752585 100%) 0% 0% no-repeat padding-box !important;
}
.buy{
  background: #FF5757 0% 0% no-repeat padding-box !important;
}
</style>

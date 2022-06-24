<template>
  <v-card>
    <v-card-text>
      <v-row>
        <!--      title-->
        <v-col cols="12">
          <v-text-field label="عنوان" filled outlined v-model="title"></v-text-field>
        </v-col>
        <!--      subtitle-->
        <v-col cols="10" v-for="(item,index) in subtitle" :key="index">
          <input @change="Subtitle($event,index)" :value="item" class="rounded-lg w-100 py-3 px-3 custom-input"/>
        </v-col>

        <v-btn @click="add_Subtitle" color="blue" outlined>افزون عنوان فرعی</v-btn>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn block color="green" class="white--text" :loading="loading" @click="save">ذخیره تغییرات</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      title:'',
      subtitle:[],
      loading:false
    }
  },
  methods:{
    add_Subtitle(){
      this.subtitle.push(this.subtitle.length)
    },

    Subtitle(event,index){
      this.subtitle[index] = event.target.value
    },

    save(){
      this.loading = true //load btn
      this.$axios.post('content-header',{'title':this.title,'subtitle':this.subtitle}).then(res=>{
        console.log(res)
        this.loading = false //load btn
        this.$swal({
          type:'success',
          title:'موفق',
          text:res.data.success,
          confirmButtonText:'باشه'
        })
      }).catch(er=>{
        this.loading = false //load btn
        this.$swal({
          type:'error',
          title:'خطا!',
          text:er.response.data.errors,
          confirmButtonText:'باشه'
        })
      })
    }
  },
  created() {
    this.title = this.$store.getters["common/contentHeader"].title

    this.subtitle = this.$store.getters["common/contentHeader"].subtitle
  }
}
</script>

<style scoped>
.custom-input{
  border: 1px solid #a0a0a0 !important;
}
</style>

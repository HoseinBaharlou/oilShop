<template>
<v-card>

<!--  title-->
  <v-card-title>
    <h4>افزودن نقش</h4>
  </v-card-title>
<!--  inputs-->
  <v-card-text>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field filled outlined label="نام نقش" v-model="name"></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field filled outlined label="نام نقش به فارسی" v-model="persian_name"></v-text-field>
      </v-col>
    </v-row>
  </v-card-text>

  <v-card-actions>
    <v-btn color="blue" class="white--text" @click="create_role" :loading="loading">افزودن</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  name: "createRole",
  data(){
    return{
      name:'',
      persian_name:'',
      loading:false
    }
  },
  methods:{
    //create new role
    create_role(){
      this.loading = true
      this.$axios.post('/roles',{name:this.name,persian_name:this.persian_name}).then((res)=>{
        this.loading = false
        this.$swal({
          type:'success',
          title:'موفق',
          text:res.data.success,
          confirmButtonText:'باشه'
        })
      }).catch((er)=>{
        this.loading = false
        this.$swal({
          type:'error',
          title:'خطا!',
          text:er.response.data.errors,
          confirmButtonText:'باشه'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>

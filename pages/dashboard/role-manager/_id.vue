<template>
  <v-row>
    {{GET_Roles}}
    <v-col cols="10" offset="1" md="8" offset-md="2">
      <v-card>
        <v-card-title>
          <h4>ویرایش نقش</h4>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="mt-5">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field filled outlined label="نام نقش" v-model="name"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field filled outlined label="نام نقش به فارسی" v-model="persian_name"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-title>
          <h4>افزودن دسترسی به نقش</h4>
        </v-card-title>

        <v-card-text>
          <v-card-text>
            <v-row>
              <v-col md="4" cols="6" v-for="(item,index) in $store.getters['usersManager/update_roles'].listPermissions">
                <v-checkbox v-model="permissions" :value="item.name" :label="item.persian_name"></v-checkbox>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="update($route.params.id)" :loading="loading">ذخیره تغییرات</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "_id.vue",
  layout:'edit',
  data(){
    return{
      name:'',
      persian_name:'',
      loading:false,
      permissions:[],
      permissionList:[]
    }
  },
  methods:{
    update(id){
      this.$axios.post('roles/'+id+'/update',{name:this.name,persian_name:this.persian_name,permissions:this.permissions}).then((res)=>{
        this.loading = false
        this.$swal({
          type:'success',
          title:'موفق',
          text:res.data.success,
          confirmButtonText:'باشه'
        })
      }).catch((er)=> {
        this.loading = false
        this.$swal({
          type: 'error',
          title: 'خطا!',
          text: er.response.data.errors,
          confirmButtonText: 'باشه'
        })
      })
    }
  },
  async asyncData({$axios,route,store}){
    await $axios.get('roles/'+route.params.id).then((res)=>{
      store.dispatch('usersManager/update_Roles',res.data)
    })
  },
  computed:{
    GET_Roles(){
      this.name = this.$store.getters["usersManager/update_roles"].name
      this.persian_name = this.$store.getters["usersManager/update_roles"].persian_name
      this.permissions = this.$store.getters["usersManager/update_roles"].permissions
    }
  }
}
</script>

<style scoped>

</style>

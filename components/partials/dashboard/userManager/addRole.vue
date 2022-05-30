<template>
<div>
  <v-dialog v-model="dialog" max-width="600">
    {{roleUser}}
    <template v-slot:activator="{attr,on}">
      <v-btn text v-bind="attr" v-on="on" class="my-2" x-small>
        <v-icon>mdi-plus-box-outline</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h4>افزودن نقش به کاربر</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col md="4" cols="6"  v-for="(item,index) in this.$store.getters['usersManager/rolesList']">
            <v-checkbox v-model="roles" :value="item.name" :label="item.persian_name"></v-checkbox>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-title>
        <h4>افزودن دسترسی به کاربر</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col md="4" cols="6" v-for="(item,index) in this.$store.getters['usersManager/permissionList']">
            <v-checkbox v-model="permissions" :value="item.name" :label="item.persian_name"></v-checkbox>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn text @click="dialog = !dialog">بستن</v-btn>

        <v-btn text @click="save(id)">ذخیره تغییرات</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
export default {
  name: "addRole",
  props:['id','index','permission_user','role_user'],
  data(){
    return{
      roles:[],
      permissions:[],
      dialog:false
    }
  },
  methods:{
    save(id){
      this.$axios.post('users/'+id+'/update-role',{roles:this.roles,permissions:this.permissions}).then((res)=>{
        this.$swal({
          type:'success',
          title:'موفق',
          text:res.data.success,
          confirmButtonText:'باشه'
        })
      }).catch((er)=>{
        this.$swal({
          type:'error',
          title:'خطا!',
          text:er.response.data.errors,
          confirmButtonText:'باشه'
        })
      })
    }
  },
  watch:{
    roles(){
      console.log(this.roles)
    }
  },

 computed: {
    roleUser(){
      this.roles = this.role_user
      this.permissions = this.permission_user
    }
 }
}
</script>

<style scoped>

</style>

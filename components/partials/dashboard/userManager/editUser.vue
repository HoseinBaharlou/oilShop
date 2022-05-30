<template>
  <v-dialog v-model="dialog">
    {{changeForm(index)}}
    <template v-slot:activator="{attr,on}">
      <v-btn color="yellow accent-2" fab x-small v-bind="attr" v-on="on">
        <v-icon color="white">mdi-circle-edit-outline</v-icon>
      </v-btn>
    </template>
<!--    form-->
    <v-card>
      <!--    title-->
      <v-card-title>
        ویرایش اطلاعات کاربر
      </v-card-title>
      <!--  start form-->
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="form.name" label="نام" filled outlined></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="form.last_name" label="نام و نام خانوادگی" filled outlined></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field v-model="form.email" label="ایمیل" filled outlined></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="form.phone_number" label="شماره موبایل" filled outlined></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="password" label="پسورد" filled outlined></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="form.address" label="آدرس" filled outlined></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field v-model="form.tag" label="پلاک" filled outlined></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="form.zip_code" label="کدپستی" filled outlined></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <!--    actions-->
      <v-card-actions>
        <v-btn color="green" @click="save(index,id)" :loading="loading" class="white--text">ذخیره تغییرات</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<script>
export default {
  name: "editUser",
  data(){
    var propsData={
      user_data:this.$store.getters['usersManager/usersList'][this.index],
      user_id:this.id,
    }
    return{
      dialog:false,
      loading:false,
      propsData,
      password:'',
      form:{
        name:null,
        last_name:null,
        email:null,
        phone_number:null,
        tag:null,
        zip_code: null,
        address:null,
      }
    }
  },
  props:['id','index'],
  methods:{
    save(index,id){
      this.loading = true
      this.form.password = this.password
      this.$axios.post('update-user/'+id,this.form).then((res)=>{
        this.loading = false
        this.$swal({
          type:'success',
          title:'موفق',
          text:res.data.success,
          confirmButtonText:'باشه'
        }).then(()=>{
            // close dialog
          this.dialog = false
        })
      }).catch((er)=>{
        this.loading = false
        this.$swal({
          type:'error',
          title:'خطا!',
          text:er.response.data.errors,
          confirmButtonText:'باشه'
        }).then(()=>{
          this.dialog = false // close dialog
        })
      });
    },
    changeForm(index){
      this.form = this.$store.getters["usersManager/usersList"][index]
    }
  },
}
</script>

<style scoped>

</style>

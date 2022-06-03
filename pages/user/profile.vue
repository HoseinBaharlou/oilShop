<template>
  <v-container fluid>
    <v-row>
      <v-col cols="10" offset="1">
        <v-row>
          <!-- start breadcrumbs -->
          <v-col cols="12">
            <v-breadcrumbs :items="items"></v-breadcrumbs>
            <v-divider></v-divider>
          </v-col>
          <!-- end breadcrumbs -->
          <!--start profile -->
          <v-col cols="10" md="6" offset-md="3" offset="1">
            <v-card>
              <!--              title-->
              <v-card-title>پروفایل کاربری</v-card-title>
              <v-divider></v-divider>
              <!--              content-->
              <v-card-text>
                <v-row>
<!--                  name,address and other-->
                  <v-col cols="12" md="6">
                    <v-text-field v-model="form.name" label="نام"></v-text-field>
                    <v-text-field v-model="form.last_name" label="نام خانوادگی"></v-text-field>
                    <v-text-field v-model="form.phone_number" label="شماره موبایل"></v-text-field>
                    <v-text-field v-model="form.email" label="پست الکترونیکی" disabled></v-text-field>
                    <v-textarea v-model="form.address" label="آدرس"></v-textarea>

                    <v-btn color="blue" rounded outlined @click="update_profile">ذخیره تغییرات</v-btn>
                  </v-col>
<!--                  profile image-->
                  <v-col cols="12" md="6" class="">
<!--                    profile-->
                    <div class="d-flex justify-center">
                      <v-avatar size="70" v-if="$auth.user.profile_src" @click="$refs.profile.click()">
                        <v-img :src="$auth.user.profile_src"></v-img>
                      </v-avatar>

                      <div v-else-if="!$auth.user.profile">
                        <v-icon x-large @click="$refs.profile.click()">mdi-account</v-icon>
                      </div>
                    </div>
                    <!--                    remove image-->
                    <div class="d-flex justify-center mt-2" v-if="$auth.user.profile_src">
                      <v-btn color="red" class="white--text" @click="delete_profile()">حذف تصویر</v-btn>
                    </div>
<!--                    input change profile-->
                    <input type="file" ref="profile" class="d-none" @change="uploadProfile($event)">
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <!-- end profile -->
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "profile",
  data:()=>{
    return{
      items: [
        {
          text: 'صفحه اصلی',
          disabled: true,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'پروفایل',
          disabled: true,
          href: 'breadcrumbs_dashboard',
        },
      ],
      form:{
        name:null,
        last_name:null,
        email:null,
        phone_number:null,
        address:null,
        profile:null,
        profile_name:null
      }
    }
  },
  methods:{
    uploadProfile(event){
      const file = event.target.files[0]
      this.form.profile_name = event.target.files[0].name
      const reader = new FileReader()

      reader.onload = (image)=>{
        this.$auth.user.profile_src = image.target.result
        this.form.profile = image.target.result
      }
      reader.readAsDataURL(file)
    },
    //update profile
    update_profile(){
      this.$axios.$post('profile',this.form).then((res)=>{
        this.$swal({
          type:'success',
          title:'موفق',
          text:res.success,
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
    },
    //  delete profile
    delete_profile(){
      this.$axios.delete('profile?file_name='+this.$auth.user.profile).then(res=>this.$auth.user.profile_src = null)
    }
  },
  created() {
    this.form.name = this.$auth.user.name
    this.form.last_name = this.$auth.user.last_name
    this.form.email = this.$auth.user.email
    this.form.phone_number = this.$auth.user.phone_number
    this.form.address = this.$auth.user.address
  }
}
</script>


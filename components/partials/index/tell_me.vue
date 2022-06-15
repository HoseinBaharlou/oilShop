<template>
    <v-container>
        <!-- start title and content -->
        <h1 class="font-size-md-36 font-size-sm-30 text-center">تماس با ما</h1>
        <p class="mt-4 text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
        <!-- end title and content -->

        <!-- start form -->
        <v-row class="align-center mt-11">
            <v-col cols="1" class="d-none d-md-flex justify-center">
                <v-img src="image/socials.svg" max-height="190" max-width="24"/>
            </v-col>
            <!-- start form -->
            <v-col md="10" cols="12">
                <v-form>
                    <!--start field -->
                    <div>
                        <v-text-field filled label="نام و نام خوانوادگی" outlined v-model="form.fullName"></v-text-field>
                        <v-text-field filled label="ایمیل" outlined v-model="form.email"></v-text-field>
                        <v-text-field filled label="شماره تلفن" outlined v-model="form.phoneNumber"></v-text-field>
                        <v-textarea filled outlined label="پیام شما..." v-model="form.content"></v-textarea>
                    </div>
                    <!-- end field -->

                    <!-- start submit -->
                    <div class="d-flex justify-center">
                        <v-btn color="purple darken-2 white--text rounded-xl px-13" x-large :loading="loading" @click="send">ارسال</v-btn>
                    </div>
                    <!-- end submit -->
                </v-form>
            </v-col>
            <!-- end form -->
            <v-col cols="1" class="d-none d-md-flex justify-center">
                <v-img src="image/socials.svg" max-height="190" max-width="24"/>
            </v-col>
        </v-row>
        <!-- end form -->
    </v-container>
</template>

<script>
export default {
  data(){
    return{
      loading:false,
      form:{
        fullName:'',
        email:'',
        phoneNumber:'',
        content:''
      }
    }
  },
  methods:{
    send(){
      this.loading = true //loading btn
      this.$axios.post('/tellMe',this.form).then(res=>{
        this.loading = false //loading btn
        this.$swal({
          type:'success',
          title:'موفق',
          text:res.data.success,
          confirmButtonText:'باشه'
        })
      }).catch(er=>{
        this.loading = false //loading btn
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

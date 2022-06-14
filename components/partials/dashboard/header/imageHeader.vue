<template>
  <v-card>
<!--    title-->
    <v-card-title>
      <h3>عکس درون هدر را انتخاب کنید</h3>
    </v-card-title>

    <v-divider></v-divider>
<!-- actions-->
    <v-card-actions class="mt-2 d-block">
      <!-- start alert -->
      <div class="d-flex justify-space-between w-100 blue px-3 py-1 rounded-l-xl" v-show="alert">
        <div>
          <button @click="alert = !alert">
            <v-icon color="white">mdi-close</v-icon>
          </button>
          <span class="font-size-15 white--text">
                کلمات کلیدی را مشخص کنید تعداد تکرار کلمات کلیدی باید بین 3 تا 6 بار باشد
          </span>
        </div>
      </div>
<!--      image info and upload file-->
      <v-row class="mt-10">
        <!--     image and image information-->
        <v-col cols="12" md="6">
          <v-simple-table>
            <template v-slot:default>
              <tbody v-if="$store.getters['common/image_header']">
              <tr>
                <td>نام:{{$store.getters['common/image_header'].name}}</td>
                <td>طول:{{$store.getters['common/image_header'].height}}</td>
              </tr>
              <tr>
                <td>فرمت:{{$store.getters['common/image_header'].format}}</td>
                <td>عرض:{{$store.getters['common/image_header'].width}}</td>
              </tr>
              <tr>
                <td>سایز:{{$store.getters['common/image_header'].size}}</td>
                <td>تاریخ ایجاد:{{$store.getters['common/image_header'].created_at}}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>

        <v-col cols="12" md="6" v-if="$store.getters['common/image_header']">
          <v-img :src="$store.getters['common/image_header'].url"/>
        </v-col>
        <!--            upload image-->
        <v-col cols="12" md="8" offset-md="2">
<!--          images size-->
          <div class="d-flex justify-space-around">
            <v-text-field label="عرض تصاویر" v-model="width" filled outlined class="mx-3"></v-text-field>

            <v-text-field label="ارتفاع تصاویر" v-model="height" filled outlined class="mx-3"></v-text-field>
          </div>
<!--          upload-->
          <!--        image-->
          <v-col cols="10">
            <v-file-input @change="changeUploader($event)" accept="image/png, image/jpeg, image/bmp"></v-file-input>
          </v-col>
        </v-col>
        <!--    btn updated at and created at-->
        <v-col cols="12" class="mt-5">
          <v-row>
            <v-col cols="12" md="9">
              <v-btn block color="green" height="69" class="white--text" @click="SaveSingleFile" :loading="loading">ذخیره تغییرات</v-btn>
            </v-col>
            <v-col cols="12" md="3">
              <v-tooltip bottom color="primary">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="blue" block height="69" class="white--text" v-on="on" v-bind="attrs">تاریخ اخرین اپدیت</v-btn>
                </template>
                <span>{{$store.getters["common/image_header"].updated_at}}</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "imageHeader",
  data(){
    return{
      width:'',
      height:'',
      file:null,
      loading:false,
      alert:false
    }
  },
  methods:{
    SaveSingleFile(){
      this.loading = true //load btn
      const Fd = new FormData()
      Fd.append('file',this.file)
      Fd.append('width',this.width)
      Fd.append('height',this.height)
      this.$axios.post('/image-header',Fd).then((res)=>{
        this.loading = false //load btn
        this.$swal({
          type:'success',
          title:'موفق',
          text:res.data.success,
          confirmButtonText:'باشه'
        })
      }).catch((er)=>{
        this.loading = false //load btn
        this.$swal({
          type:'error',
          title:'خطا!',
          text:er.response.data.errors,
          confirmButtonText:'باشه'
        })
      })
    },
    changeUploader(event){
      this.file = event
    }
  },
  created() {
    if (this.$store.state["common"].singleFile){
      this.width = this.$store.state["common"].width
      this.height = this.$store.state["common"].height
      this.Slider = this.$store.state["common"].slider
    }
  }
}
</script>

<style scoped>

</style>

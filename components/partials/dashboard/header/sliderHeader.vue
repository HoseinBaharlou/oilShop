<template>
  <v-card>
    <v-card-actions class="d-block">
      <v-radio-group v-model="Slider" mandatory>
        <v-radio label="غیر فعال کردن حالت اسلایدر عکس انتخاب شده هدر را غیر فعال میکند" color="red" value="0"></v-radio>
        <v-radio label="فعال کردن حالت اسلایدر عکس انتخاب شده هدر را غیر فعال میکند" color="green" value="1"></v-radio>
      </v-radio-group>
<!--      image uploaded-->
      <div class="overflow-auto" v-if="$store.getters['common/header_slider']">
        <v-row class="flex-nowrap">
          <v-col cols="4" v-for="(item,index) in $store.getters['common/header_slider'].url">
            <v-img :src="item" />
          </v-col>
        </v-row>

        <v-row class="flex-nowrap">
          <v-col cols="4" v-for="(item,index) in $store.getters['common/header_slider'].name">
            <v-btn @click="remove_File(item,index)" text block>حذف فایل</v-btn>
          </v-col>
        </v-row>
      </div>
      <!--          images size-->
      <div class="d-flex justify-space-around my-5">
        <v-text-field label="عرض تصاویر" v-model="width" filled outlined class="mx-3"></v-text-field>

        <v-text-field label="ارتفاع تصاویر" v-model="height" filled outlined class="mx-3"></v-text-field>
      </div>
<!--      image uploader-->
      <div>
        <v-file-input ref="uploadFiles" accept="image/png, image/jpeg, image/bmp" id="uploadFiles" multiple></v-file-input>
      </div>
      <!--    btn updated at and created at-->
      <v-row>
        <v-col cols="12" class="mt-5">
          <v-row>
            <v-col cols="12" md="9">
              <v-btn block color="green" height="69" class="white--text" @click="saveSlider">ذخیره تغییرات</v-btn>
            </v-col>
            <v-col cols="12" md="3">
              <v-tooltip bottom color="primary">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="blue" block height="69" class="white--text" v-on="on" v-bind="attrs">تاریخ اخرین اپدیت</v-btn>
                </template>
                <span>{{$store.getters["common/header_slider"].updated_at}}</span>
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
  name: "sliderHeader",
  data(){
    return {
      Slider:0,
      width:'',
      height:'',
      file:[],
    }
  },
  methods:{
    saveSlider(){
      const Fd = new FormData()
      const files = this.$refs.uploadFiles.$refs.input.files;
      const total_files = this.$refs.uploadFiles.$refs.input.files.length;
      for(let i = 0;i<total_files;i++){
        Fd.append('file[]',files[i])
      }
      Fd.append('width',this.width)
      Fd.append('height',this.height)
      Fd.append('slider',this.Slider)
      console.log(Fd)
      this.$axios.post('/slider-header',Fd, {headers: {
        'Content-Type': 'multipart/form-data'
      }}).then((res)=>{
        console.log(res)
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
    },
    remove_File(name,index){
      this.$store.state["common"].multiImageHeader.url.splice(index,1);
      this.$store.state["common"].multiImageHeader.name.splice(index,1);
      this.$axios.post('/delete-file',{'name':name,'type':'image','isPrivate':false}).then(res=>console.log(res)).catch(er=>console.log(er.response.data));
    },
    changeUploader(event){
      for(let i = 0;i<event.length;i++){
        this.file.push(event[i])
      }
    }
  },
  created() {
    if (!this.$store.state["common"].singleFile){
      this.width = this.$store.state["common"].width
      this.height = this.$store.state["common"].height
      this.Slider = this.$store.state["common"].slider
      console.log(this.$store.state["common"].width)
    }
  }
}
</script>

<style scoped>

</style>

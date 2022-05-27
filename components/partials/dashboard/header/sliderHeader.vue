<template>
  <v-card>
    <v-card-actions class="d-block">
      <v-radio-group v-model="Slider" mandatory>
        <v-radio label="غیر فعال کردن حالت اسلایدر عکس انتخاب شده هدر را غیر فعال میکند" color="red" value="0"></v-radio>
        <v-radio label="فعال کردن حالت اسلایدر عکس انتخاب شده هدر را غیر فعال میکند" color="green" value="1"></v-radio>
      </v-radio-group>
<!--      image uploaded-->
<!--      <div class="overflow-auto" v-if="$store.getters['common/header_slider']">-->
<!--        <v-row class="flex-nowrap">-->
<!--          <v-col cols="4" v-for="(item,index) in $store.getters['common/header_slider'].url">-->
<!--            <v-img :src="item" />-->
<!--          </v-col>-->
<!--        </v-row>-->

<!--        <v-row class="flex-nowrap">-->
<!--          <v-col cols="4" v-for="(item,index) in $store.getters['common/header_slider'].name">-->
<!--            <v-btn @click="remove_File(item,index)" text block>حذف فایل</v-btn>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </div>-->
      <!--          images size-->
      <div class="d-flex justify-space-around my-5">
        <v-text-field label="عرض تصاویر" v-model="width" filled outlined class="mx-3"></v-text-field>

        <v-text-field label="ارتفاع تصاویر" v-model="height" filled outlined class="mx-3"></v-text-field>
      </div>
<!--      image uploader-->
      <div>
        <vue2-dropzone id="dropzone" :options="dropZoneOptions" :useCustomSlot="true" @vdropzone-success="UploadFiles" ref="dropzone_header" v-on:vdropzone-sending="sendingFormData">
          <v-row>
            <v-col cols="12" class="">
              <p>عکس انتخاب شده را اینجاد بکشید و رها کنید یا روی ایکون کلیک کنید</p>

              <div class="d-flex justify-center">
                <v-img src="../image/icons8-upload-to-cloud-64.png" max-width="64" max-height="64"></v-img>
              </div>
            </v-col>
          </v-row>
        </vue2-dropzone>
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
      name:'',
      dropZoneOptions:{
        url:this.$store.state.BackendUrl+'/slider-header',
        maxFiles: 100,
        autoProcessQueue:false,
        addRemoveLinks:true,
        autoDiscover:false,
        uploadMultiple: true,
        parallelUploads: 100,
      }
    }
  },
  methods:{
    UploadFiles:function (file,response){
      this.$store.dispatch("common/header_slider",response)
    },
    sendingFormData:function (file,xhr,FormData){
      FormData.append('width',this.width);
      FormData.append('height',this.height);
      FormData.append('slider',this.Slider);
    },
    saveSlider(){
      this.$refs.dropzone_header.processQueue();
    },
    remove_File(name,index){
      this.$store.state["common"].multiImageHeader.url.splice(index,1);
      this.$store.state["common"].multiImageHeader.name.splice(index,1);
      this.$axios.post('/delete-file',{'name':name,'type':'image','isPrivate':false}).then(res=>console.log(res)).catch(er=>console.log(er.response.data));
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

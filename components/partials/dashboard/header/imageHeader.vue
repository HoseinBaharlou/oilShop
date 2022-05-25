<template>
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
      <vue2-dropzone :options="dropzoneOptions" id="dropzone" :useCustomSlot="true" @vdropzone-success="uploadSingleFile" ref="dropzone_header">
        <v-row>
          <v-col cols="12" class="d-flex align-center justify-space-around">
            <p>عکس انتخاب شده را اینجاد بکشید و رها کنید یا روی ایکون کلیک کنید</p>

            <v-img src="../image/icons8-upload-to-cloud-64.png" max-width="64" max-height="64"></v-img>
          </v-col>
        </v-row>
      </vue2-dropzone>
    </v-col>
<!--    btn updated at and created at-->
    <v-col cols="12" class="mt-5">
      <v-row>
        <v-col cols="12" md="9">
          <v-btn block color="green" height="69" class="white--text" @click="SaveSingleFile">ذخیره تغییرات</v-btn>
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
</template>

<script>
export default {
  name: "imageHeader",
  data(){
    return{
      dropzoneOptions:{
        url:this.$store.state.BackendUrl+'/image-header',
        maxFiles: 1,
        autoProcessQueue:false,
        addRemoveLinks:true,
        autoDiscover:false
      },
    }
  },
  methods:{
    SaveSingleFile(){
      this.$refs.dropzone_header.processQueue();
    },
    uploadSingleFile(file,response){
      this.$store.dispatch('common/header_image',response)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <v-card>
<!--    title-->
    <v-card-title class="d-block">
      <h4>ایجاد محصول</h4>

      <v-divider></v-divider>
    </v-card-title>
<!--    input title and other-->
    <v-card-text>
      <v-row class="justify-center">
        <v-col cols="12" md="5">
          <v-text-field label="نام محصول" filled outlined v-model="form.title"></v-text-field>
        </v-col>
        <v-col cols="12" md="5">
          <v-select v-model="selected" :options="$store.getters.category" dir="ltr" ref="category"></v-select>
        </v-col>
<!--        content-->
        <v-col cols="12" md="6" class="d-flex">
          <v-row>
            <v-col cols="4">
              <v-select v-model="unit" :options="unit_list"></v-select>
            </v-col>
            <v-col cols="8">
              <v-text-field filled outlined label="حجم درخواستی" v-model="form.volume"></v-text-field>
            </v-col>
          </v-row>
        </v-col>
<!--        body-->
        <v-col cols="10" class="mt-5">
          <v-textarea filled outlined v-model="form.body"></v-textarea>
        </v-col>
<!--        image-->
        <v-col cols="10">
          <v-file-input @change="changeUploader($event)" accept="image/png, image/jpeg, image/bmp"></v-file-input>
        </v-col>
<!--        save product-->
        <v-col cols="10" md="8">
          <v-btn block color="green" class="white--text" large @click="create">اضافه کردن محصول</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: "create_product",
  head:{
    title:'ایجاد محصول'
  },
  layout:'dashboard',
  data(){
    return{
      selected:null,
      unit_list:[
        {
          id:'ton',
          label:'ton'
        },
        {
          id:'kg',
          label:'kg'
        },
        {
          id:'gr',
          label:'gr'
        },
      ],
      unit:{
        id:'kg',
        label:'kg'
      },
      form:{
        title:null,
        volume:null,
        body:null,
        unit:null,
        file:null,
        category_id: null,
        width:555,
        height:600
      }
    }
  },
  methods:{
    create(){
      if (this.selected == null){
        alert('دسته بندی ها باید انتخاب شوند')
        return
      }
      const Fd = new FormData()
      this.form.category_id = this.selected.id
      Fd.append('file',this.form.file,this.form.file.name)
      Fd.append('title',this.form.title)
      Fd.append('volume',this.form.volume)
      Fd.append('unit',this.unit.id);
      Fd.append('body',this.form.body)
      Fd.append('category_id',this.form.category_id)
      Fd.append('width',this.form.width)
      Fd.append('height',this.form.height)
      this.$axios.post('product',Fd).then((res)=>{
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
    changeUploader(event){
      this.form.file = event
    }
  }
}
</script>

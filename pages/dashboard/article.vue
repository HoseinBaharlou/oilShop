<template>
  <v-card>
<!--    title-->
    <v-card-title>ایجاد مقاله</v-card-title>
    <v-divider class="custom-line"></v-divider>
<!--   input and other -->
    <v-card-actions class="mt-16">
      <v-row>
        <v-col cols="12" md="10" offset-md="1">
<!--          category and title-->
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field outlined v-model="title" label="عنوان مقاله..." @keyup="CharacterTitle"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-select v-model="selected" :options="$store.state.options" dir="ltr"></v-select>
            </v-col>
          </v-row>
<!--          text box-->
          <v-textarea outlined v-model="text" @keyup="characterText" class="mt-5"></v-textarea>
<!--          writer-->

          <div class="d-flex flex-wrap">
            <v-text-field outlined class="mx-3" v-model="writer">
              <span slot="prepend">نویسنده:</span>
            </v-text-field>
<!--date-->
            <v-dialog max-width="500">
              <template v-slot:activator="{on,attrs}">
                <v-text-field outlined class="mx-3" v-model="picker" v-bind="attrs" v-on="on">
                  <span slot="prepend">تاریخ:</span>
                </v-text-field>
              </template>
              <v-date-picker locale="fa-IR" v-model="picker" class="custom-picker" full-width></v-date-picker>
            </v-dialog>
          </div>
          <!-- start alert -->
          <div class="d-flex justify-space-between w-100 blue px-3 py-1 rounded-l-xl">
            <div >
              <button @click="alert = false">
                <v-icon color="white">mdi-close</v-icon>
              </button>
              <span class="font-size-15 white--text">
                کلمات کلیدی را مشخص کنید تعداد تکرار کلمات کلیدی باید بین 3 تا 6 بار باشد
              </span>
            </div>
          </div>
<!--          keyword-->
          <v-sheet class="keyword pa-5 mt-5">
            <section class="d-flex flex-wrap">
              <div class="d-flex flex-wrap" v-for="(item,index) in keyword" :key="index">
                <div class="box-keyword mx-10 my-3">
                  <input type="text" class="key_input" :value="item" @change="key_name(index,$event)" />
                  <button class="remove-keyword red rounded-circle mx-2" @click="remove_keyword(index)">
                    <v-icon color="white">mdi-close</v-icon>
                  </button>
                </div>
              </div>
              <v-btn outlined color="white" class="px-16 mx-10 my-3" height="42" @click="add_keyword" width="178"><v-icon>mdi-plus</v-icon></v-btn>
            </section>
          </v-sheet>
<!--          length text and title and other-->
          <div class="mt-10 d-flex justify-space-around flex-wrap">
            <p>تعداد کاراکتر متن:{{textChar}}</p>
            <p>تعداد کاراکتر عنوان:{{TitleChar}}</p>
            <p>تعداد کلمات کلیدی:{{lengthKey}}</p>
          </div>
<!--          save-->
          <div class="d-flex justify-md-end justify-center my-10">
            <v-btn @click="save_article" color="green" class="white--text" :loading="loaded" width="213">
              <span>ذخیره تغییرات</span>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "article",
  layout:'dashboard',
  data(){
    return{
      text:'',
      textChar:'',
      title:'',
      TitleChar:'',
      keyword:[],
      lengthKey:'',
      writer: '',
      picker:'',
      selected:'',
      loaded:false
    }
  },
  methods:{
    //length character text
    characterText(){
      this.textChar = this.text.trim().length
    },
    //length character title
    CharacterTitle(){
      this.TitleChar = this.title.trim().length
    },
    //remove keyword
    remove_keyword(index){
      this.keyword.splice(index,1)
      this.lengthKey = this.keyword.length

    },
    //add keyword
    add_keyword(){
      this.keyword.push(this.keyword.length)
      this.lengthKey = this.keyword.length
    },
    //change keyword name
    key_name(index,event){
      console.log(event.target.value)
      this.keyword[index] = event.target.value
    },
    //send post to backend
    async save_article(){
      //true loaded
      this.loaded = true
      //input data for send backend
      const article = {
        'title':this.title,
        'text':this.text,
        'writer':this.writer,
        'keyword':this.keyword,
        'category':this.selected.id,
        'date':this.picker
      }
      //send request
      this.$axios.post('/article',article).then((res)=>{
        this.loaded = false
        this.$swal({
          type:'success',
          title: 'موفق',
          text: res.data.success,
          confirmButtonText:'باشه'
        })
      }).catch((er)=>{
        this.loaded = false
        this.$swal({
          type:'error',
          title: 'خطا!',
          text:er.response.data.errors,
          confirmButtonText:'باشه'
        })
      })
    }
  },
}
</script>

<style scoped lang="scss">
  .custom-line{
    background: #EBF2F7 0% 0% no-repeat padding-box;
    height: 6px;
  }
  .keyword{
    background: #5C6BC0;
  }
  .remove-keyword{
    border: 5px solid #fff;
  }
  .box-keyword{
    height: 33px;
    width: 178px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ffffff;
    padding: 20px 0;
    flex-wrap: nowrap;
    button{
      height: 26px;
      width: 26px;
      border: 1px solid #fff;
    }
  }

  .key_input{
    width: 125px;
    color: #ffffff;
    &:focus{
      border: none;
      outline: none;
    }
  }
</style>

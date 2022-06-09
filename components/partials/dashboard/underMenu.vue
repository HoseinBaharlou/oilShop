<template>
  <v-card class="rounded-l-xl px-10" elevation="5">
    <!-- start content -->
    <v-card-actions>
      <v-row>
        <v-col cols="12" class="mt-5">
          <!-- start alert -->
          <v-alert color="primary" dismissible class="py-1 custom-icon-color-alert px-10 white--text" close-icon="mdi-close">یک لینک طبق الگو وارد کنید با کلیک کردن بر روی ایکون لینک</v-alert>
          <!-- end alert -->
        </v-col>
      </v-row>
    </v-card-actions>
    <v-card-actions class="d-block">
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <!-- alert -->
          <div v-if="$store.getters.errors">
            <alert type="error" :message="$store.getters.errors"/>
          </div>
          <div v-if="$store.getters.success">
            <alert type="success" :message="$store.getters.success"/>
          </div>
<!--          category-->
          <v-select v-model="selected" :options="$store.state.options" dir="ltr"></v-select>
          <!-- category type-->
          <v-select v-model="selected_type" :options="categoryType" dir="ltr" class="mt-3"></v-select>
<!--          input-->
          <v-text-field filled outlined label="عنوان" class="mt-5" v-model="title"></v-text-field>
          <v-btn color="light-green" class="white--text" @click="save">ثبت</v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
    <!-- end content -->
  </v-card>
</template>

<script>
import alert from '../alert'
export default {
  components:{alert},
  data(){
    return{
      categoryType:[
        {
          id:'shop',
          label: 'فروشگاه',
        },
        {
          id:'post',
          label: 'پست'
        }
      ],
      selected_type:{
        id:0,
        label: 'نوع دسته بندی را انتخاب کنید'
      },
      category: [],
      selected:{
        'label':'گروه اصلی',
        'id':0
      },
      title:'',
    }
  },
  methods:{
    save() {
      //save category
      this.category={
        'title':this.title,
        'parent_id':this.selected.id,
        'type':this.selected_type.id
      }
      this.$store.dispatch('category',this.category)
    }
  }
}
</script>

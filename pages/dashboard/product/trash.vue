<template>
  <v-simple-table>
    <template>
      <thead>
      <tr>
        <th>ای دی</th>
        <th>نام محصول</th>
        <th>تصویر محصول</th>
        <th>توضیحات</th>
        <th>عملیات</th>
        <th>زمان آخرین بروز رسانی</th>
        <th>تاریخ ایجاد</th>
      </tr>
      </thead>

      <tbody v-if="$store.getters['Product/trash']">
      <tr v-for="(item,index) in $store.getters['Product/trash']">
        <td>{{item.id}}</td>
        <td>{{item.title}}</td>
        <td class="pa-2">
          <v-img :src="item.file" max-width="100"/>
        </td>
        <td>
          {{item.body.slice(0,50)}}...
        </td>
        <td>
          <div class="d-flex justify-space-between align-center">
            <div>
              <v-btn color="green" fab x-small @click="restore(item.id,index)">
                <v-icon color="white">mdi-restore</v-icon>
              </v-btn>
            </div>
            <div>
              <v-btn color="red" fab x-small @click="destroy(item.id,index)">
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>
            </div>
          </div>
        </td>
        <td>
          {{item.updated_at}}
        </td>
        <td>
          {{item.created_at}}
        </td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "index.vue",
  layout:'dashboard',
  async asyncData({store,$axios}){
    await $axios.get('/product/trash').then((res)=>{
      store.dispatch('Product/trash',res.data.trash)
    })
  },
  methods:{
    //restore product
    restore(id,index){
      this.$axios.get(`/product/${id}/restore`).then((res)=>{
        this.$store.getters["Product/trash"].splice(index,1)
        this.$swal({
          type:'success',
          title:'موفق',
          text:res.data.success,
          confirmButtonText: 'باشه'
        })
      })
    },
    //destroy product
    destroy(id,index){
      this.$axios.get(`/product/${id}/destroy`).then((res)=>{
        //remove of store
        this.$store.getters["Product/trash"].splice(index,1)
        //res
        this.$swal({
          type:'success',
          title:'موفق',
          text:res.data.success,
          confirmButtonText: 'باشه'
        })
      })
    }
  }
}
</script>

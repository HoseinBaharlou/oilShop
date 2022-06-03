<template>
  <section>
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

        <tbody v-if="$store.getters['Product/product_list']">
        <tr v-for="(item,index) in $store.getters['Product/product_list'].slice(result_page,limit*page)">
          <td>{{item.id}}</td>
          <td>{{item.title}}</td>
          <td class="pa-2">
            <v-img :src="item.file" max-width="100"/>
          </td>
          <td>
            {{item.body.slice(0,60)}}...
          </td>
          <td>
            <div class="d-flex justify-space-between">
              <div>
                <nuxt-link :to="`/dashboard/product/${item.id}`">
                  <v-btn x-small fab color="yellow darken-2">
                    <v-icon color="white">mdi-text-box-edit-outline</v-icon>
                  </v-btn>
                </nuxt-link>
              </div>
              <div>
                <v-btn color="red" fab x-small @click="destroy(item.id,index+result_page)">
                  <v-icon color="white">mdi-close</v-icon>
                </v-btn>
              </div>
              <div>
                <v-btn color="green" fab x-small @click="softDelete(item.id,index+result_page)">
                  <v-icon color="white">mdi-delete-outline</v-icon>
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
    <!--    pagination-->
    <v-pagination
      v-model="page"
      class="my-4"
      :length="total_page"
      @input="changePage"
    ></v-pagination>
  </section>
</template>

<script>
export default {
  name: "productList",
  data(){
    return{
      users_list:[],
      total_page:1,
      limit:10,
      result_page:0,
      page:1
    }
  },
  methods: {
    changePage() {
      this.result_page = (this.page - 1) * this.limit
    },
    //soft delete product
    softDelete(id,index){
      this.$axios.get(`/product/${id}/softDelete`).then((res)=>{
        //remove of store
        this.$store.getters["Product/product_list"].splice(index,1)
        //res
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
        this.$store.getters["Product/product_list"].splice(index,1)
        //res
        this.$swal({
          type:'success',
          title:'موفق',
          text:res.data.success,
          confirmButtonText: 'باشه'
        })
      })
    }
  },
  mounted() {
    if (this.$store.getters['Product/product_list']){
      this.total_page = Math.round(this.$store.getters['Product/product_list'].length/this.limit)
    }
  },
}
</script>

<style scoped>

</style>

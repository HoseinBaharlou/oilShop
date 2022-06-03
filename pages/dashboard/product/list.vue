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

      <tbody>
        <tr v-for="(item,index) in $store.getters['Product/product_list']">
          <td>{{item.id}}</td>
          <td>{{item.title}}</td>
          <td class="pa-2">
            <v-img :src="item.file" max-width="100"/>
          </td>
          <td class="d-flex justify-space-between align-center">
            <div>
              <nuxt-link :to="`/dashboard/product/${item.id}`">
                <v-btn x-small fab color="yellow darken-2">
                  <v-icon color="white">mdi-text-box-edit-outline</v-icon>
                </v-btn>
              </nuxt-link>
            </div>
            <div>
              <v-btn color="red" fab x-small>
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>
            </div>
            <div>
              <v-btn color="green" fab x-small>
                <v-icon color="white">mdi-delete-outline</v-icon>
              </v-btn>
            </div>
          </td>
          <td>
            {{item.body.slice(0,100)}}...
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
  asyncData({store,$axios}){
    $axios.get('/product').then((res)=>{
      console.log(res.data.product)
      store.dispatch('Product/product_list',res.data.product)
    })
  }
}
</script>

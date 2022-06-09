<template>
  <section>
    <v-simple-table>
      <template>
        <thead>
          <tr>
            <th>ای دی</th>
            <th>نام پست</th>
            <th>تصویر</th>
            <th>توضیحات</th>
            <th>عملیات</th>
            <th>آخرین اپدیت</th>
            <th>تاریخ ایجاد</th>
          </tr>
        </thead>

        <tbody v-if="$store.getters['post/post_list']">
          <tr v-for="(item,index) in $store.getters['post/post_list']">
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
            <td>
              <v-img :src="item.file" max-height="150" max-width="100" class="ma-2"/>
            </td>
            <td>{{item.text.slice(0,60)}}...</td>
            <td>
              <div class="d-flex justify-space-between">
                <div>
                  <nuxt-link :to="`/dashboard/post/${item.id}`">
                    <v-btn x-small fab color="yellow darken-2">
                      <v-icon color="white">mdi-text-box-edit-outline</v-icon>
                    </v-btn>
                  </nuxt-link>
                </div>
                <div>
                  <v-btn color="red" fab x-small @click="destroy(item.id,index)">
                    <v-icon color="white">mdi-close</v-icon>
                  </v-btn>
                </div>
                <div>
                  <v-btn color="green" fab x-small @click="softDelete(item.id,index)">
                    <v-icon color="white">mdi-delete-outline</v-icon>
                  </v-btn>
                </div>
              </div>
            </td>
            <td>{{item.updated_at}}</td>
            <td>{{item.created_at}}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </section>
</template>

<script>
export default {
  name: "list",
  layout:'dashboard',
  data(){

  },
  asyncData({store,$axios}){
    $axios.get('/post').then(res=>store.dispatch('post/post_list',res.data.post))
  },
  methods:{
    //soft delete product
    softDelete(id,index){
      this.$axios.get(`/post/${id}/softDelete`).then((res)=>{
        //remove of store
        this.$store.getters["post/post_list"].splice(index,1)
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
      this.$axios.get(`/post/${id}/destroy`).then((res)=>{
        //remove of store
        this.$store.getters["post/post_list"].splice(index,1)
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

<style scoped>

</style>

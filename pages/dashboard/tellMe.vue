<template>
  <v-simple-table>
    <template>
<!--      title table-->
      <thead>
      <tr>
        <th>نام و نام خانوادگی</th>
        <th>شماره تماس</th>
        <th>زمان درخواست</th>
        <th>عملیات</th>
      </tr>
      </thead>
<!--      body table-->
      <tbody>
      <tr v-for="item in $store.getters['TellMe']">
        <td>{{item.fullName}}</td>
        <td>{{item.phoneNumber}}</td>
        <td>{{$moment(item.created_at).fromNow()}}</td>
        <td>
          <TEll_ME :data="item"/>
        </td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import TEll_ME from "~/components/partials/dashboard/tellMe/tellMe";
export default {
  name: "tellMe",
  layout:'dashboard',
  components:{TEll_ME},
  async asyncData({$axios,store}){
    await $axios.get('/tellMe').then(res=>{
      store.dispatch('TellMe',res.data.tellMe)
    })
  }
}
</script>

<style scoped>

</style>

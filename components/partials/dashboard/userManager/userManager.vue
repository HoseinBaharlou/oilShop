<template>
  <div v-if="$store.getters['usersManager/usersList']">
    <v-simple-table>
      <template v-slot:default>
        <!-- start table header -->
        <thead>
        <tr>
          <th class="grey lighten-3 rounded-r-lg text-center">نام کاربری</th>
          <th class="grey lighten-3 text-center">ای پی آدرس</th>
          <th class="grey lighten-3 text-center">سطح دسترسی</th>
          <th class="grey lighten-3 text-center">شماره موبایل</th>
          <th class="grey lighten-3 text-center">تعداد بازدید</th>
          <th class="grey lighten-3 text-center rounded-l-lg">عملیات</th>
        </tr>
        </thead>
        <!-- end table header -->
        <!-- start table content -->
        <tbody class="white">

        <tr class="text-center" v-for="(item,index) in $store.getters['usersManager/usersList'].slice(result_page,limit*page)">
          <td class="rounded-r-lg">
            <div class="d-flex align-center">
              <v-avatar>
                <v-img v-if="item.profile" :src="item.profile"/>
                <v-icon v-else x-large>mdi-account</v-icon>
              </v-avatar>
              <span>{{item.name}}</span>
            </div>
          </td>
          <td class="text-center">
            <div class="d-flex align-center">
              <span v-if="item.ip_addresses">{{item.ip_addresses.ip_address}}</span>
            </div>
          </td>
          <td class="pa-2">
            <v-chip v-for="(roles,index) in item.roles" :key="index">{{roles.persian_name}}</v-chip>
            <add-role :role_user="roles_user(item.roles)" :permission_user="permission_user(item.permissions)" :id="item.id" :index="index+result_page" />
          </td>
          <td>
            <span>{{item.phone_number}}</span>
          </td>

          <td>
            <span>{{item.count_visit}}</span>
          </td>

          <td class="py-3">
            <div class="d-flex justify-space-around align-center">
              <edit-user :id="item.id" :index="index+result_page"/>

              <v-btn color="red" fab x-small>
                <v-icon color="white">
                  mdi-close
                </v-icon>
              </v-btn>

              <v-btn color="green" fab x-small @click="test(index+result_page)">
                <v-icon color="white">mdi-trash-can-outline</v-icon>
              </v-btn>
            </div>
          </td>
        </tr>
        </tbody>
        <!-- end table content -->
      </template>
    </v-simple-table>

<!--    pagination-->
    <v-pagination
      v-model="page"
      class="my-4"
      :length="total_page"
      @input="changePage"
    ></v-pagination>
  </div>
</template>

<script>
import editUser from "@/components/partials/dashboard/userManager/editUser";
import pages from "@/pages";
import addRole from "@/components/partials/dashboard/userManager/addRole";
export default {
  name: "userManager.vue",
  data(){
    return{
      users_list:[],
      total_page:1,
      limit:10,
      result_page:0,
      page:1
    }
  },
  methods:{
    changePage(){
      this.result_page = (this.page-1) * this.limit
    },
    //get all roles user for addRole components
    roles_user(roles){
      let roles_user = []
      roles.forEach(function (elem){
        roles_user.push(elem.name)
      })
      return roles_user
    },

    //get all permissions user for addRole components
    permission_user(permissions){
      let permission_user = []
      permissions.forEach(function (elem){
        permission_user.push(elem.name)
      })
      return permission_user
    }
  },
  mounted() {
    if (this.$store.getters["usersManager/usersList"]){
      this.total_page = Math.round(this.$store.getters["usersManager/usersList"].length/this.limit)
    }
  },
  components:{editUser,addRole}
}
</script>

<style scoped>

</style>

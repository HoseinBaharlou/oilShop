<template>
  <v-card>
    <v-card-title class="">
      <h3>مدیریت کاربران</h3>
    </v-card-title>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="d-block">
      <UserManager/>
    </v-card-actions>
  </v-card>
</template>

<script>
import UserManager from "@/components/partials/dashboard/userManager/userManager";
import editUser from "@/components/partials/dashboard/userManager/editUser";
export default {
  name: "user-manager.vue",
  layout:'dashboard',
  components:{UserManager,editUser},
  async asyncData({$axios,store}){
    await $axios.get('/users-list').then(function (res) {
      store.dispatch("usersManager/users_list", res.data.users)
    })
    //get all permission and role for show to user
    await $axios.get('/roles').then(function (res) {
      store.dispatch("usersManager/roles_list", res.data.roles)
      store.dispatch("usersManager/permission_list", res.data.permissions)

    })
  }
}
</script>

<style scoped>

</style>

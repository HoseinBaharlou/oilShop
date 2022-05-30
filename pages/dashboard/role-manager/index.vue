<template>
  <div>
<!--    create new role-->
    <create-role/>
<!--    role list-->
    <role-list class="my-5"/>
  </div>
</template>

<script>
import createRole from "@/components/partials/dashboard/roleManager/createRole";
import roleList from "@/components/partials/dashboard/roleManager/roleList";
export default {
  name: "role-manager",
  layout:'dashboard',
  components:{createRole,roleList},
  async asyncData({$axios,store}){
    if(store.getters["usersManager/rolesList"] && store.getters['usersManager/permissionList']){
      await $axios.get('/roles').then(function (res) {
        store.dispatch("usersManager/roles_list", res.data.roles)
        store.dispatch("usersManager/permission_list", res.data.permissions)
      })
    }
  }
}
</script>

<style scoped>

</style>

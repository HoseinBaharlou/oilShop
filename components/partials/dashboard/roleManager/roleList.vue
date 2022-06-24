<template>
  <v-card>
    <v-card-title>
      نمایش لیست نقش ها
    </v-card-title>
    <v-divider></v-divider>

    <v-card-text>
      <v-simple-table>
        <template>
          <thead>
          <tr>
            <th>نام نقش</th>
            <th>نام فارسی نقش</th>
            <th>عملیات</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="item in $store.getters['usersManager/rolesList']">
            <td><span>{{item.name}}</span></td>
            <td><span>{{item.persian_name}}</span></td>
            <td>
              <nuxt-link :to="`/dashboard/role-manager/${item.id}`">ویرایش</nuxt-link>
            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "roleList",
}
</script>

<style scoped>

</style>

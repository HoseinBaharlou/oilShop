<template>
<v-simple-table>
  <template>
    <thead>
    <tr>
      <th>نام</th>
      <th>تاریخ</th>
      <th>نوع</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="item in $auth.user.analyze">
      <td>{{item.file}}</td>
      <td>{{$moment(item.created_at).fromNow()}}</td>
      <td>{{item.type}}</td>
    </tr>
    </tbody>
  </template>
</v-simple-table>
</template>

<script>
export default {
  name: "analyze",
}
</script>

<style scoped>

</style>

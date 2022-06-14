<template>
  <v-list>
    <v-list-group
      :value="true"
      prepend-icon="mdi-account-circle"
    >
      <template v-slot:activator>
        <v-list-item-title>Users</v-list-item-title>
      </template>

      <v-list-group
        no-action
        sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Actions</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="([title, icon], i) in cruds"
          :key="i"
          link
        >
          <v-list-item-title v-text="title"></v-list-item-title>

        </v-list-item>
      </v-list-group>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  props:['data']
}
</script>

<style></style>

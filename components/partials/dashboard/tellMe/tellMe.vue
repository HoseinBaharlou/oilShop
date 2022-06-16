<template>
    <v-dialog max-width="500" v-model="dialog">
      <template v-slot:activator="{attr,on}">
        <v-btn color="blue" class="white--text" v-bind="attr" v-on="on">مشاهده کامل</v-btn>
      </template>

      <v-card>
        <v-card-title>
          <v-toolbar color="blue">
            <h1 class="title white--text">اطلاعات تماس مخاطب</h1>
          </v-toolbar>
        </v-card-title>

        <v-card-text>
          <p>
            <span class="subtitle">نام و نام خانوادگی:</span><span>{{data.fullName}}</span>
          </p>

          <p>
            <span class="subtitle">آدرس الکترونیکی:</span><span>{{data.email}}</span>
          </p>

          <p>
            <span class="subtitle">شماره تماس:</span><span>{{data.phoneNumber}}</span>
          </p>

          <p>
            <span class="subtitle">محتوا:</span><span>{{data.content}}</span>
          </p>
        </v-card-text>

        <v-card-actions>
          <v-btn color="red" @click="dialog = false" class="white--text">بستن</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: "tellMe",
  props:['data'],
  data(){
    return{
      dialog:false
    }
  }
}
</script>

<style scoped>

</style>

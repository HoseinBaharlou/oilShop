<template>
  <v-row>
    <!-- start contacts -->
    <v-col md="4">
      <Contacts/>
    </v-col>
    <!-- end contacts -->
    <!-- start message -->
    <v-col md="8">
      <Message/>
    </v-col>
    <!-- end message -->
  </v-row>
</template>

<script>
import Contacts from '../components/partials/dashboard/contacts.vue'
import Message from '../components/partials/dashboard/Message.vue'
export default {
  setup() {
    
  },
  components:{Contacts,Message},
  layout:'dashboard',
  data:()=>{
    return{
      drawer:true,
      model:true,
      mini:false
    }
  },
}
</script>


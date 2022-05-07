<template>
<v-card class="rounded-xl px-5 fileManager">
  <!-- start cards -->
  <v-card-title>
    <v-icon color="grey" small>mdi-information-outline</v-icon>
    <h2 class="mx-4">مدیریت فایل</h2>
  </v-card-title>
  <!-- end cards -->

  <v-divider></v-divider>

  <v-card-actions>
    <v-row class="overflow-x-auto mt-1">
      <v-col cols="12">
        <!-- start table -->
        <Table/>
        <!-- end table -->

        <!-- start pagination -->
        <v-pagination :length="6" v-model="page" class="text-center mt-10 mb-5"></v-pagination>
        <!-- end pagination -->
      </v-col>
    </v-row>
  </v-card-actions>
</v-card>

</template>
<script>
import Table from '../../components/partials/dashboard/table_file.vue'
export default {
  setup() {
    
  },
  components:{Table},
  data:()=>{
    return{
        page:1
      }
    },
  layout:'dashboard',
}
</script>
<style lang="scss">
// style to table
.fileManager tbody {
     tr:hover {
        background-color: transparent !important;
     }
     tr:hover td{
        background-color: rgba(234, 242, 255,0.5) !important;
     }
     tr:hover #no-background-hover{
       background-color: rgba(234, 242, 255,0.5) !important;
     }
     td{
       border: none !important;
       padding-top: 150px;
     }
     td .icon-dropdown:hover{
       color: #508ff4 !important;
     }
  }
// end style table

// start default hover btn menu
#no-background-hover::before {
   background-color: transparent !important;
}
// end default hover btn 
.custom-vSheet{
  height: 42px;
  width: 42px;
  margin: auto;
  position: absolute;
  top: -3px;
  left: 20%;
  right: 20%;
  transform: rotate(134deg);
  box-shadow: 0px 3px 9px rgba(196, 200, 208, 0.29) !important;
}
.v-menu__content{
  contain: none !important;
  overflow: unset !important;
}
// start custom list item title
.custom-list-item-title{
  transition: 0.2s ease-in;
}
.custom-list-item-title:hover{
  color: #508ff4 !important;
  text-decoration: underline !important;
  cursor: pointer;
}
</style>
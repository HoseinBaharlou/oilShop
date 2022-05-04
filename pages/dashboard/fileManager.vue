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
        <v-simple-table>
          <template v-slot:default>
            <!-- start table header -->
            <thead>
              <tr>
                <th class="grey lighten-3 rounded-r-lg text-center">ای دی</th>
                <th class="grey lighten-3 text-center">اولویت</th>
                <th class="grey lighten-3 text-center">نام مشتری</th>
                <th class="grey lighten-3 text-center">ای دی مشتری</th>
                <th class="grey lighten-3 text-center">مبلغ خرید</th>
                <th class="grey lighten-3 text-center">قیمت واحد</th>
                <th class="grey lighten-3 text-center">تخفیف</th>
                <th class="grey lighten-3 text-center">گونه</th>
                <th class="grey lighten-3 rounded-l-lg text-center pr-11">اقدام</th>
              </tr>
            </thead>
            <!-- end table header -->

            <!-- start table content -->
            <tbody class="white">
              <tr class="text-center">
                <td class="rounded-r-lg">
                  <div class="d-flex align-center">
                    <input type="checkbox" name="" class="custom-checkbox ml-5">
                    <span>1234567</span>
                  </div>
                </td>
                <td class="text-center">
                  <div class="d-flex align-center">
                    <span>High</span>
                    <v-badge dot color="red" offset-x="-5"></v-badge>
                  </div>
                </td>
                <td>
                  <span>Francesca Metts</span>
                </td>
                <td>
                  <span>35440</span>
                </td>
                <td>
                  <span>0</span>
                </td>
                <td>
                  <span>52.6</span>
                </td>
                <td>
                  <span>0.10</span>
                </td>
                <td>
                  <v-img src="../icons/Component 5 – 1.svg" max-width="21" max-height="24" class="m-auto"/>
                </td>
                <td class="rounded-l-lg">
                  <v-menu rounded="25" min-width="122" offset-y>
                    <template v-slot:activator="{attrs,on}">
                      <v-btn
                      class="pr-11"
                      color="white"
                      v-bind="attrs"
                      v-on="on"
                      elevation="0"
                      :ripple="false"
                      id="no-background-hover"
                      >
                        <v-icon class="icon-dropdown" large color="grey">mdi-dots-horizontal</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-sheet width="42" height="42" color="white" class="custom-vSheet"></v-sheet>
                      <v-list-item to="">
                        <v-list-item-title class="text-center custom-list-item-title">دانلود</v-list-item-title>
                      </v-list-item>

                      <v-list-item to="">
                        <v-list-item-title class="text-center custom-list-item-title">دانلود</v-list-item-title>
                      </v-list-item>

                      <v-list-item to="">
                        <v-list-item-title class="text-center custom-list-item-title">دانلود</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </td>
              </tr>

              <tr class="text-center">
                <td class="rounded-r-lg">
                  <div class="d-flex align-center">
                    <input type="checkbox" name="" class="custom-checkbox ml-5">
                    <span>1234567</span>
                  </div>
                </td>
                <td class="text-center">
                  <div class="d-flex align-center">
                    <span>High</span>
                    <v-badge dot color="red" offset-x="-5"></v-badge>
                  </div>
                </td>
                <td>
                  <span>Francesca Metts</span>
                </td>
                <td>
                  <span>35440</span>
                </td>
                <td>
                  <span>0</span>
                </td>
                <td>
                  <span>52.6</span>
                </td>
                <td>
                  <span>0.10</span>
                </td>
                <td>
                  <v-img src="../icons/Component 5 – 1.svg" max-width="21" max-height="24" class="m-auto"/>
                </td>
                <td class="rounded-l-lg">
                  <v-menu rounded="25" min-width="122" offset-y>
                    <template v-slot:activator="{attrs,on}">
                      <v-btn
                      class="pr-11"
                      color="white"
                      v-bind="attrs"
                      v-on="on"
                      elevation="0"
                      :ripple="false"
                      id="no-background-hover"
                      >
                        <v-icon class="icon-dropdown" large color="grey">mdi-dots-horizontal</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-sheet width="42" height="42" color="white" class="custom-vSheet"></v-sheet>
                      <v-list-item to="">
                        <v-list-item-title class="text-center custom-list-item-title">دانلود</v-list-item-title>
                      </v-list-item>

                      <v-list-item to="">
                        <v-list-item-title class="text-center custom-list-item-title">دانلود</v-list-item-title>
                      </v-list-item>

                      <v-list-item to="">
                        <v-list-item-title class="text-center custom-list-item-title">دانلود</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </td>
              </tr>

              <tr class="text-center">
                <td class="rounded-r-lg">
                  <div class="d-flex align-center">
                    <input type="checkbox" name="" class="custom-checkbox ml-5">
                    <span>1234567</span>
                  </div>
                </td>
                <td class="text-center">
                  <div class="d-flex align-center">
                    <span>High</span>
                    <v-badge dot color="red" offset-x="-5"></v-badge>
                  </div>
                </td>
                <td>
                  <span>Francesca Metts</span>
                </td>
                <td>
                  <span>35440</span>
                </td>
                <td>
                  <span>0</span>
                </td>
                <td>
                  <span>52.6</span>
                </td>
                <td>
                  <span>0.10</span>
                </td>
                <td>
                  <v-img src="../icons/Component 5 – 1.svg" max-width="21" max-height="24" class="m-auto"/>
                </td>
                <td class="rounded-l-lg">
                  <v-menu rounded="25" min-width="122" offset-y>
                    <template v-slot:activator="{attrs,on}">
                      <v-btn
                      class="pr-11"
                      color="white"
                      v-bind="attrs"
                      v-on="on"
                      elevation="0"
                      :ripple="false"
                      id="no-background-hover"
                      >
                        <v-icon class="icon-dropdown" large color="grey">mdi-dots-horizontal</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-sheet width="42" height="42" color="white" class="custom-vSheet"></v-sheet>
                      <v-list-item to="">
                        <v-list-item-title class="text-center custom-list-item-title">دانلود</v-list-item-title>
                      </v-list-item>

                      <v-list-item to="">
                        <v-list-item-title class="text-center custom-list-item-title">دانلود</v-list-item-title>
                      </v-list-item>

                      <v-list-item to="">
                        <v-list-item-title class="text-center custom-list-item-title">دانلود</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </td>
              </tr>

              <tr class="text-center">
                <td class="rounded-r-lg">
                  <div class="d-flex align-center">
                    <input type="checkbox" name="" class="custom-checkbox ml-5">
                    <span>1234567</span>
                  </div>
                </td>
                <td class="text-center">
                  <div class="d-flex align-center">
                    <span>High</span>
                    <v-badge dot color="red" offset-x="-5"></v-badge>
                  </div>
                </td>
                <td>
                  <span>Francesca Metts</span>
                </td>
                <td>
                  <span>35440</span>
                </td>
                <td>
                  <span>0</span>
                </td>
                <td>
                  <span>52.6</span>
                </td>
                <td>
                  <span>0.10</span>
                </td>
                <td>
                  <v-img src="../icons/Component 5 – 1.svg" max-width="21" max-height="24" class="m-auto"/>
                </td>
                <td class="rounded-l-lg">
                  <v-menu rounded="25" min-width="122" offset-y>
                    <template v-slot:activator="{attrs,on}">
                      <v-btn
                      class="pr-11"
                      color="white"
                      v-bind="attrs"
                      v-on="on"
                      elevation="0"
                      :ripple="false"
                      id="no-background-hover"
                      >
                        <v-icon class="icon-dropdown" large color="grey">mdi-dots-horizontal</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-sheet width="42" height="42" color="white" class="custom-vSheet"></v-sheet>
                      <v-list-item to="">
                        <v-list-item-title class="text-center custom-list-item-title">دانلود</v-list-item-title>
                      </v-list-item>

                      <v-list-item to="">
                        <v-list-item-title class="text-center custom-list-item-title">دانلود</v-list-item-title>
                      </v-list-item>

                      <v-list-item to="">
                        <v-list-item-title class="text-center custom-list-item-title">دانلود</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </td>
              </tr>
            </tbody>
            <!-- end table content -->
          </template>
        </v-simple-table>
        <!-- start pagination -->
        <v-pagination :length="6" v-model="page" class="text-center mt-10 mb-5"></v-pagination>
        <!-- end pagination -->
      </v-col>
    </v-row>
  </v-card-actions>
</v-card>

</template>
<script>
export default {
  setup() {
    
  },
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
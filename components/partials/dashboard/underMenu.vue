<template>
  <v-card class="rounded-l-xl px-10" elevation="5">
    <!-- start content -->
    <v-card-actions>
      <v-row>
        <v-col cols="12" class="mt-5">
          <!-- start alert -->
          <v-alert color="primary" dismissible class="py-1 custom-icon-color-alert px-10 white--text" close-icon="mdi-close">یک لینک طبق الگو وارد کنید با کلیک کردن بر روی ایکون لینک</v-alert>
          <!-- end alert -->
        </v-col>
        <!-- start under menu maker -->
        <v-col cols="12">
          <v-row>
            <!-- add/remove under menu -->
            <v-col md="10" sm="12">
                <!-- shop -->
               <v-sheet elevation="2" class="px-2 pb-2 my-8">
                 <Container group-name='menu' @drag-start="handledragStartShop('shop',$event)" @drop="handledropShop('shop',$event)"  :get-child-payload="getChildPayload" class="overflow:auto">
                    <Draggable v-for="(item,index) in menu.shop" :key="index" class="overflow:auto">
                      <div class="d-flex align-center mt-5" :style="{'margin-right':item.margin_left+'px'}">
                        <!-- start inputs -->
                        <div class="inputs">
                          <input type="text" class="input-field" placeholder="نام به فارسی"  @change="save_name($event,index,'shop')" v-model="item.persion">
                          <v-divider></v-divider>
                          <input type="text" class="input-field" placeholder="نام به انگلیسی" @change="save_english($event,index,'shop')" v-model="item.english" name="" id="">
                        </div>
                        <!-- end inputs --> 

                        <!-- start remove and add -->
                        <div class="d-flex mx-5">
                          <v-btn fab color="green" small class="mx-4 add-menu" elevation="0" @click="addMenu(index,item.parent_id+1,'shop')" ><v-icon color="white" large>mdi-plus</v-icon></v-btn>
                          <v-btn fab color="red" class="remove-menu" small elevation="0" @click="removeMenu(index,'shop')" :disabled="index == 0 ? true : false"><v-icon color="white" large>mdi-close</v-icon></v-btn>
                        </div>
                        <!-- end remove and add -->
                      </div>
                    </Draggable>
                 </Container>
               </v-sheet>

            </v-col>
            <!-- add/remove under menu -->
          </v-row>
        </v-col>
        <!-- end under menu maker -->
      </v-row>
    </v-card-actions>
    <!-- end content -->
  </v-card>
</template>
<script>
import { Container, Draggable } from "vue-smooth-dnd";
export default {
  setup() {
  },
  components:{Container,Draggable},
  data:()=>{
    return {
      name:null,
      link:null,
      menu:{
        shop:[
          {
            'persion':'فروشگاه','english':'shop','parent_id':0,'margin_left':null
          },
        ],
        news:[
          {
            'persion':'اخبار','english':'news','parent_id':0,'margin_left':null
          },
        ],
        article:[
          {
            'persion':'مقالات','english':'articles','parent_id':0,'margin_left':null
          },
        ]
      },
      dragingmenu:{},
    }
  },
  methods:{
    getChildPayload(index){
        return{
            index,
        }
    },
    // start drag drop categories
    // shop
    handledragStartShop(menu_name,handleResult){
      const{isSource,payload} = handleResult;
      if(isSource){
        this.handledragStart(menu_name,payload.index)
      }
    },
    handledropShop(menu_name,handleResult){
      const{removedIndex,addedIndex} = handleResult;

      this.handledrop(menu_name,addedIndex,removedIndex)
    },
    handledragStart(menu_name,handleResult){
      console.log(menu_name)
      let parent_id = this.menu[menu_name][handleResult].parent_id;
      let new_menu = this.menu[menu_name].slice(handleResult,this.menu[menu_name].length)
      let repetition_index=[];
      let data =[];
      // get repetition index
      new_menu.filter(function(elem,index){
        if(elem.parent_id == parent_id){
          repetition_index.push(index)
        }
      })
      // check repitition index and remove index of array
      if(repetition_index.length == 1){
        if(new_menu.length > 1){
          for(let i=0;i<new_menu.length;i++){
            data.push(new_menu[i])
          }
        }else{
          data.push(new_menu[0])
        }
      }else{
        for(let i=0;i<repetition_index[1];i++){
          data.push(new_menu[i])
        }
      }

      this.dragingmenu = data
    },

    handledrop(menu_name,addedIndex,removedIndex){
      let get_name=[]
      get_name.push(menu_name,addedIndex)
      get_name.filter(function(elem){
        if(elem.addedIndex != null){
          menu_name = elem.menu_name
          return
        }
      })
      let old_parent_id = this.dragingmenu[0].parent_id
      let new_parent_id = this.menu[menu_name][addedIndex].parent_id
      let data=[[]]
      let index=0; //
      let parent_menu=[];//push menu data of elem variable
      let index_array=0

      // check parent id old and new and change parent id new menu
      if(old_parent_id == new_parent_id){
        data [0]=this.dragingmenu
      }
      else{
        this.dragingmenu.forEach(elem => {
          if(old_parent_id == elem.parent_id){
            parent_menu.push(elem)
          }else{
            old_parent_id = elem.parent_id
            parent_menu = []
            parent_menu.push(elem)
            index++;
            data[index]=[]
            index_array=0
          }
          data[index][index_array] = parent_menu[index_array]
          index_array++;
        })
      }
      // remove menu 
      if(removedIndex !== null){
        this.removeMenu(removedIndex,menu_name)
      }
      // add new menu
      if(addedIndex !== null){
        let add = addedIndex;
        for(let i=0;i<data.length;i++){
          for(let j=0;j<data[i].length;j++){  
            this.menu[menu_name].splice(add,0,{
              persion:data[i][j].persion,
              english:data[i][j].english,
              parent_id:new_parent_id,
              margin_left:new_parent_id*50
            })
            add++;
            new_parent_id++;
          }
        }

        console.log(JSON.stringify(this.menu[menu_name]))
      }

    },
    // save persion name input to array
    save_name(event,index,menu_name){
      this.menu[menu_name][index].persion = event.target.value
    },
    // save english name input to array
    save_english(event,index,menu_name){
      this.menu[menu_name][index].english = event.target.value

      // console.log(JSON.stringify(this.shop))
    },
    // add menu
    addMenu(index,parent_id,menu_name){
      this.menu[menu_name].splice(index+1,0,{
        persion:null,
        english:null,
        parent_id:parent_id,
        margin_left:parent_id*50
      })

    },
    // remove menu of array
    removeMenu(index,menu_name){
      let parent_id = this.menu[menu_name][index].parent_id;
      let new_menu = this.menu[menu_name].slice(index,this.menu[menu_name].length)
      let repetition_index=[];
      if(index != 0){
        // get repetition index
        new_menu.filter(function(elem,index){
          if(elem.parent_id == parent_id){
            repetition_index.push(index)
          }
        })
        // check repitition index and remove index of array
        if(repetition_index.length == 1){
          if(new_menu.length > 1){
            this.menu[menu_name].splice(index,new_menu.length)
          }else{
            this.menu[menu_name].splice(index,1)
          }
        }else{
          this.menu[menu_name].splice(index,repetition_index[1])
        }
      }
    },
    // create submenu
    submenu(index){
      this.menu[menu_name].push({
        name:null,
        english:null,
        parent_id:index
      })
      console.log(index)
      console.log(JSON.stringify(this.menu.shop))
    }
  },
}
</script>
<style scoped lang='scss'>
.input-field::placeholder{
  color: #ffffff !important;
  opacity: 1 !important;
}
.inputs{
  display: flex;
  flex-direction: column;
  .input-field{
    background: #5C6BC0 0% 0% no-repeat padding-box;
    height: 35px;
    text-align: center;
    color: #ffffff;
    // border-top: 1px solid white;
    &:focus{
      outline: none !important;
    }
  }
}
// style to button remove and add
.add-menu{
  transition: 0.5s ease;
}
.add-menu:hover{
  box-shadow: 0px -1px 11px 0px #4caf50 !important;
}
.remove-menu{
  transition: 0.5s ease;
}
.remove-menu:hover{
  box-shadow: 1px 1px 10px 0px #f44336 !important;
}
</style>
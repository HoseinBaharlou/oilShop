<template>
    <div class="d-flex align-center mt-5" :style="{'margin-right':item.margin_left+'px'}">
        <!-- start inputs -->
        <div>
        <v-text-field label="نام به فارسی" outlined @change="save_name($event,index)" v-model="item.name"></v-text-field>
        <v-text-field label="نام به انگلیسی" outlined type="url" @change="save_english($event,index)" v-model="item.english"></v-text-field>
        </div>
        <!-- end inputs --> 

        <!-- start remove and add -->
        <div class="d-flex mx-5">
        <v-btn fab color="green" small class="mx-1" elevation="0" @click="addMenu(index,item.parent_id+1)"><v-icon color="white" >mdi-plus</v-icon></v-btn>
        <v-btn fab color="red" small elevation="0"><v-icon color="white">mdi-close</v-icon></v-btn>
        </div>
        <!-- end remove and add -->
    </div>
</template>
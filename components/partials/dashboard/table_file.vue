<template>
    <v-simple-table>
        <template v-slot:default>
        <!-- start table header -->
        <thead>
            <tr>
                <th class="grey lighten-3 rounded-r-lg text-center">ای دی</th>
                <th class="grey lighten-3 text-center">اولویت</th>
                <th class="grey lighten-3 text-center">نام مشتری</th>
                <th class="grey lighten-3 text-center">ای دی مشتری</th>
<!--                <th class="grey lighten-3 text-center">مبلغ خرید</th>-->
<!--                <th class="grey lighten-3 text-center">قیمت واحد</th>-->
<!--                <th class="grey lighten-3 text-center">تخفیف</th>-->
                <th class="grey lighten-3 text-center">گونه</th>
                <th class="grey lighten-3 rounded-l-lg text-center pr-11">اقدام</th>
            </tr>
        </thead>
        <!-- end table header -->

        <!-- start table content -->
        <tbody class="white">
            <tr class="text-center" v-for="(item,index) in $store.getters['analyze_list']" :key="index">
                <td class="rounded-r-lg">
                    <div class="d-flex align-center justify-center">
<!--                    <input type="checkbox" name="" class="custom-checkbox ml-5">-->
                    <span>{{item.id}}</span>
                    </div>
                </td>
                <td class="text-center">
                    <div class="d-flex align-center justify-center">
                    <span>High</span>
                    <v-badge dot color="red" offset-x="-5"></v-badge>
                    </div>
                </td>
                <td>
                    <span>{{item.user_name}}</span>
                </td>
                <td>
                    <span>{{ item.user_id }}</span>
                </td>
<!--                <td>-->
<!--                    <span>0</span>-->
<!--                </td>-->
<!--                <td>-->
<!--                    <span>52.6</span>-->
<!--                </td>-->
<!--                <td>-->
<!--                    <span>0.10</span>-->
<!--                </td>-->
                <td>
                    {{item.type}}
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
                        <v-list-item>
                        <v-list-item-title class="text-center custom-list-item-title" @click="Download(item.id)">دانلود</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                        <v-list-item-title class="text-center custom-list-item-title" @click="Delete(item.id,index)">حذف</v-list-item-title>
                        </v-list-item>
                    </v-list>
                    </v-menu>
                </td>
                </tr>
        </tbody>
        <!-- end table content -->
        </template>
    </v-simple-table>
</template>

<script>

export default {
  methods:{
    Download(index){
      this.$axios.get(`analyze/${index}`,{responseType: 'arraybuffer'}).then((res)=>{
        console.log(res)
        let FILE = window.URL.createObjectURL(new Blob([res.data]));

        let docUrl = document.createElement('x');
        docUrl.href = FILE;
        docUrl.setAttribute('download',this.$store.getters['analyze_list'].file);
        document.body.appendChild(docUrl);
        docUrl.click();
      })
    },
    Delete(index,index_array){
      this.$axios.delete(`analyze/${index}`).then(res=>{
        this.$store.getters['analyze_list'].splice(index_array,1)
        this.$swal({
          type:'success',
          title:'موفق',
          text:res.data.success,
          confirmButtonText:'باشه'
        })
      })
    }
  }
}
</script>

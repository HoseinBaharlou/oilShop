<template>
  <section>
    <v-list rounded>
    <v-list-item-group
      color="primary"
      v-for="(item,index) in navbar"
    >
      <v-list shaped v-if="item.submenu">
        <v-list-group
          no-action
          :prepend-icon="item.icon"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item link v-for="(submenu,index) in item.submenu" :key="index" :to="submenu.link" v-if="canShowLinks(submenu.permissions)">
            <v-list-item-title>{{submenu.title}}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>

      <div v-if="!item.submenu">
        <v-list-item :to="item.link" v-if="canShowLinks(item.permissions)">
          <!-- start icon -->
          <v-list-item-icon class="ml-2 my-3">
            <v-icon class="custom-color-icon">{{item.icon}}</v-icon>
          </v-list-item-icon>
          <!-- end icon -->

          <!-- start title -->
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
          <!-- end title -->
        </v-list-item>
      </div>
    </v-list-item-group>
  </v-list>

  <v-list shaped>
      <v-list-group
        no-action
        prepend-icon="mdi-home-outline"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>تنظیمات صفحه اصلی</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item link v-for="(item,index) in home" :key="index" :to="item.link">
            <v-list-item-icon>
              <v-icon large>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </section>
</template>
<script>

export default {
  setup() {

  },
  data:()=>{
    return {
      home:[
        {'icon':'mdi-application-outline','title':'منو بالایی','link':'SettingMenu'},
        {'icon':'mdi-alpha-h','title':'تیتر سایت و تصویر','link':'mainHeader'},
        {'icon':'mdi-store','title':'فروشگاه','link':'article'},
        {'icon':'mdi-newspaper-variant-outline','title':'خبرنامه','link':'underMenu'},
        {'icon':'mdi-square-edit-outline','title':'مقالات','link':'article'},
        {'icon':'mdi-information-outline','title':'درباره ما','link':'underMenu'},
        {'icon':'mdi-page-layout-footer','title':'فوتر','link':'underMenu'},
      ],
      navbar:[
        {'icon':'mdi-view-dashboard-outline','title':'داشبرد','link':'/dashboard/main','permissions':['show_admin_panel']},
        {'icon':'mdi-tune-vertical','title':'نمای تجاری','link':'/dashboard/Tradeview','permissions':['show_admin_panel']},
        {'icon':'mdi-file-outline','title':'مدیریت فایل','link':'/dashboard/fileManager','permissions':['file_manager']},
        {'icon':'mdi-account-multiple-outline','title':'مدیریت کاربران','submenu':[{'title':'لیست کاربران','link':'user-manager','permissions':['users_list']}, {'title':'مدیریت نقش های کاربر','link':'role-manager','permissions':['role_list']}],'permissions':['users_list']},
        {'icon':'mdi-store-outline','title':'مدیریت محصولات','submenu':[{'title':'لیست محصولات','link':'/dashboard/product/list','permissions':['product_list']},{'title':'ایجاد محصول','link':'/dashboard/product/create','permissions':['product_create']}, {'title':'سطل زباله','link':'trash','permissions':['product_trash_manager']}],'permissions':['product_list']},
        {'icon':'mdi-calendar-range','title':'تقویم','link':'/dashboard/calendar','permissions':['show_panel']},
        {'icon':'mdi-message-processing','title':'پیام ها','link':'/dashboard/Message','permissions':['ticket_manager']},
      ],
    }
  },
  methods:{
    canShowLinks(permissions){
      return permissions.some(permissions=>this.$auth.user.permission.includes(permissions))
    }
  }
}
</script>

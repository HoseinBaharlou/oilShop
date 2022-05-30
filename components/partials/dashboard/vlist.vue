<template>
  <section>
    <v-list rounded>
    <v-list-item-group
      color="primary"
    >
      <v-list-item to="/dashboard/main">
        <!-- start icon -->
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-view-dashboard-outline</v-icon>
        </v-list-item-icon>
        <!-- end icon -->

        <!-- start title -->
        <v-list-item-content>
          <v-list-item-title>داشبرد</v-list-item-title>
        </v-list-item-content>
        <!-- end title -->
      </v-list-item>

      <v-list-item to="/dashboard/Tradeview">
      <!-- start icon -->
      <v-list-item-icon class="ml-2 my-3">
        <v-icon class="custom-color-icon">mdi-tune-vertical</v-icon>
      </v-list-item-icon>
      <!-- end icon -->

      <!-- start title -->
      <v-list-item-content>
        <v-list-item-title>نمای تجاری</v-list-item-title>
      </v-list-item-content>
      <!-- end title -->
      </v-list-item>

      <v-list-item to="/dashboard/fileManager">
        <!-- start icon -->
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-file-outline</v-icon>
        </v-list-item-icon>
        <!-- end icon -->

        <!-- start title -->
        <v-list-item-content>
          <v-list-item-title>مدیریت فایل</v-list-item-title>
        </v-list-item-content>
        <!-- end title -->
      </v-list-item>

      <v-list shaped>
        <v-list-group
          no-action
          prepend-icon="mdi-account-multiple-outline"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>مدیریت کاربران</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item link v-for="(item,index) in user_manager" :key="index" :to="item.link">
            <v-list-item-icon>
              <v-icon large>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>

      <v-list-item to="/dashboard/calendar">
        <!-- start icon -->
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-calendar-range</v-icon>
        </v-list-item-icon>
        <!-- end icon -->

        <!-- start title -->
        <v-list-item-content>
          <v-list-item-title>تقویم</v-list-item-title>
        </v-list-item-content>
        <!-- end title -->
      </v-list-item>

      <v-list-item to="/dashboard/Message">
        <!-- start icon -->
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-message-processing</v-icon>
        </v-list-item-icon>
        <!-- end icon -->

        <!-- start title -->
        <v-list-item-content>
          <v-list-item-title>پیام ها</v-list-item-title>
        </v-list-item-content>
        <!-- end title -->
      </v-list-item>

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
      user_manager:[
        {'title':'لیست کاربران','link':'user-manager'},
        {'title':'مدیریت نقش های کاربر','link':'role-manager'}
      ]
    }
  }
}
</script>

<template>
  <v-list class="mt-4 mx-5 py-0">
    <v-list-item-group active-class="custom-list-item-active" class="custom-list-item">
      <nuxt-link to="/dashboard">
        <v-list-item>
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
      </nuxt-link>

      <nuxt-link to="/dashboard/Tradeview">
        <v-list-item>
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
      </nuxt-link>

      <nuxt-link to="/dashboard/fileManager">
        <v-list-item>
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
      </nuxt-link>

    </v-list-item-group>
  </v-list>
  <!-- <v-list-item to="/dashboard" ripple="false">
        
        <v-list-item-content>
          داشبرد
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/dashboard/Tradeview">
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-tune-vertical</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          نمای تجاری
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-file-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          مدیریت فایل
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-poll</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          انالیز ترافیک
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          مدیریت کاربران
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-calendar-range</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          تقویم
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-forum</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          پیام ها
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-credit-card</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-badge color="grey darken-3" content="6"
          offset-x="20"
          offset-y="18">
            مبالغ دریافتی
          </v-badge>
        </v-list-item-content>
      </v-list-item> -->
</template>
<style>
.custom-list-item-active{
  background: #eaf2ff !important;
  border-radius: 30px !important;
  opacity: 1 !important;
}
.v-ripple__container{
  background: transparent !important;
  display: none !important;
}
.custom-list-item .v-list-item--link::before{
  background: white !important;
  text-decoration: none !important;
}
.custom-item-exit{
  position: absolute;
  bottom: 0px;
  width: 90%;
}
</style>
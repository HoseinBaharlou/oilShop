<template>
  <v-list class="mt-4 mx-5 py-0">
    <section class="mb-md-180">
      <v-list-item class="white custom-list-item" to="/" ripple="">
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-view-dashboard-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          داشبرد
        </v-list-item-content>
      </v-list-item>

      <v-list-item class="white custom-list-item">
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-tune-vertical</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          نمای تجاری
        </v-list-item-content>
      </v-list-item>

      <v-list-item class="white custom-list-item">
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-file-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          مدیریت فایل
        </v-list-item-content>
      </v-list-item>

      <v-list-item class="white custom-list-item">
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-poll</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          انالیز ترافیک
        </v-list-item-content>
      </v-list-item>

      <v-list-item class="white custom-list-item">
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          مدیریت کاربران
        </v-list-item-content>
      </v-list-item>

      <v-list-item class="white custom-list-item">
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-calendar-range</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          تقویم
        </v-list-item-content>
      </v-list-item>

      <v-list-item class="white custom-list-item">
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-forum</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          پیام ها
        </v-list-item-content>
      </v-list-item>

      <v-list-item class="white custom-list-item">
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-credit-card</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-badge color="grey darken-3" content="6"
          offset-x="80"
          offset-y="18">
            مبالغ دریافتی
          </v-badge>
        </v-list-item-content>
      </v-list-item>
    </section>

    <section class="custom-item-exit">
      <hr class="custom-line-avatar-panel">
      <v-list-item class="white">
        <v-list-item-icon class="ml-2 my-3">
          <v-icon class="custom-color-icon">mdi-exit-to-app</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>خروج</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </section>
  </v-list>
</template>
<style scoped>
.custom-list-item:hover .v-icon{
  color: #508ff4 !important;
}
.custom-list-item:focus ,.custom-list-item:hover{
  border-radius: 30px !important;
  background-color: #eaf2ff !important;
  color: #508ff4 !important;
}
.custom-item-exit{
  position: absolute;
  bottom: 0px;
  width: 90%;
}
</style>
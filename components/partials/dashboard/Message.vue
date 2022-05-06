<template>
    <v-card class="rounded-l-xl pb-5" elevation="10">
        <v-card-actions class="d-block">
          <v-row class="px-5">
            <!-- start user text -->
            <v-col cols="12">
              <div>
                <v-avatar>
                  <v-img src="../icons/Oval.svg" lazy-src="../icons/Oval.svg"/>
                </v-avatar>
                <span class="mx-3">پشه</span>
                <small class="grey--text">12:10</small>
              </div>
              <div class="blue lighten-5 rounded-lg py-2 mt-2 w-80">
                <span class="pr-5">!بده بزنیم</span>
              </div>
            </v-col>
            <!-- end user text -->

            <!-- start admin text -->
            <v-col cols="12" class="d-flex justify-end">
              <section class="w-70">
                <div class="d-flex justify-end align-center">
                  <v-avatar class="order-3">
                    <v-img src="../icons/Profile_image.svg" lazy-src="../icons/Profile_image.svg"/>
                  </v-avatar>
                  <span class="px-3 order-2">آقای مجری</span>
                  <small class="grey--text order-1">12:10</small>
                </div>
                <div class="blue lighten-5 rounded-lg py-2 mt-2">
                  <span class="pr-5">!بده بزنیم</span>
                </div>
              </section>
            </v-col>
            <!-- end admin text -->

            <!-- start user text -->
            <v-col cols="12">
              <div>
                <v-avatar>
                  <v-img src="../icons/Oval.svg" lazy-src="../icons/Oval.svg"/>
                </v-avatar>
                <span class="mx-3">پشه</span>
                <small class="grey--text">12:10</small>
              </div>
              <div class="blue lighten-5 rounded-lg py-2 mt-2 w-80">
                <span class="pr-5">!بده بزنیم</span>
              </div>
            </v-col>
            <!-- end user text -->

            <!-- start admin text -->
            <v-col cols="12" class="d-flex justify-end">
              <section class="w-70">
                <div class="d-flex justify-end align-center">
                  <v-avatar class="order-3">
                    <v-img src="../icons/Profile_image.svg" lazy-src="../icons/Profile_image.svg"/>
                  </v-avatar>
                  <span class="px-3 order-2">آقای مجری</span>
                  <small class="grey--text order-1">12:10</small>
                </div>
                <div class="blue lighten-5 rounded-lg py-2 mt-2">
                  <span class="pr-5">!بده بزنیم</span>
                </div>
              </section>
            </v-col>
            <!-- end admin text -->

            <!--start not read line -->
            <v-col cols="12" class="d-flex align-center">
              <span>نخوانده</span>
              <v-divider></v-divider>
            </v-col>
            <!--start not read line -->

            <!-- start not read message -->
            <v-col cols="12">
              <div>
                <v-avatar>
                  <v-img src="../icons/Oval.svg" lazy-src="../icons/Oval.svg"/>
                </v-avatar>
                <span class="mx-3">پشه</span>
                <small class="grey--text">12:10</small>
              </div>
              <div class="mt-4">
                <span class="blue rounded-lg py-2 mt-5 px-7">!بده بزنیم</span>
              </div>
            </v-col>
            <!-- end not read message -->
            <v-col cols="12" class="custom-input-send-message">
              <v-row>
                <v-col cols="10" class="d-flex justify-end px-0">
                  <v-text-field outlined filled placeholder="اینجا تایپ کن..." class="rounded-xl-l"></v-text-field>
                </v-col>
                <v-col cols="2" class="d-flex justify-start px-0">
                  <v-btn class="blue white--text rounded-l-xl" x-large height="56" elevation="0">
                  ارسال
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-actions>
    </v-card>
</template>

<style lang='scss'>
.custom-input-send-message{
  .v-btn{
    border-top-right-radius: unset !important;
    border-bottom-right-radius:unset !important ;
  }
  .v-input__control{
    border-top-left-radius: unset !important;
    border-bottom-left-radius:unset !important ;
  }
}
</style>
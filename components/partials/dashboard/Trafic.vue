<template>
  <v-card class="rounded-xl">
    <v-card-title class="justify-space-between pb-0">
      <span>ترافیک</span>
      <v-icon>mdi-information-outline</v-icon>
    </v-card-title>
    <hr class="custom-line-avatar-panel">
    <!-- start liner progress -->
    <v-card-actions class="px-5 pb-6">
      <v-row>
        <v-col cols="12" class="justify-space-between d-flex">
          <span class="grey--text">بازدید محصولات<b class="mx-1 black--text">169</b></span>
          <span>68%</span>
        </v-col>
        <v-col cols="12">
          <v-progress-linear
            color="light-blue darken-4"
            rounded
            value="60"
          ></v-progress-linear>
        </v-col>

        <v-col cols="12" class="justify-space-between d-flex pb-0">
          <span class="grey--text">بازدید محصولات<b class="mx-1 black--text">169</b></span>
          <span>68%</span>
        </v-col>
        <v-col cols="12">
          <v-progress-linear
            color="light-blue darken-4"
            rounded
            value="75"
          ></v-progress-linear>
        </v-col>

        <v-col cols="12" class="justify-space-between d-flex pb-0">
          <span class="grey--text">بازدید محصولات<b class="mx-1 black--text">169</b></span>
          <span>68%</span>
        </v-col>
        <v-col cols="12">
          <v-progress-linear
            color="red lighten-1"
            rounded
            value="60"
          ></v-progress-linear>
        </v-col>

        <v-col cols="12" class="justify-space-between d-flex pb-0">
          <span class="grey--text">بازدید محصولات<b class="mx-1 black--text">169</b></span>
          <span>68%</span>
        </v-col>
        <v-col cols="12">
          <v-progress-linear
            color="light-blue darken-4"
            rounded
            value="75"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
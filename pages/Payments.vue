<template>
  <v-row>
    <!-- start pardakht items -->
    <v-col cols="12">
      <v-card elevation="10" class="rounded-xl px-5">
        <!-- start title -->
        <v-card-title>
          <h2>تاریخچه پرداخت</h2>
        </v-card-title>
        <!-- end title -->

        <v-divider></v-divider>
        <!-- start content -->
        <v-card-actions class="mt-5">
          <v-row class="overflow-x-auto">
            <v-col cols="12">
              <section class="rounded-lg grey lighten-3 w-100">
                <v-row class="py-2 px-8 justify-center">
                  <!-- start title -->
                  <v-col cols="12">
                    <nuxt-link to="" class="transparent">درگاه های پرداخت</nuxt-link>
                  </v-col>
                  <!-- end title -->

                  <!-- start pardakht item -->
                  <v-col md="3" class="white rounded-lg d-flex mx-2 my-2 elevation-1">
                    <v-badge dot style="z-index: 9999;">
                    </v-badge>
                      <v-img src="../icons/BehPardakht-Mellat-Mela-Medium-way2pay-banner-93-06-24.svg"/>
                  </v-col>

                  <v-col md="3" class="white rounded-lg d-flex mx-2 my-2 elevation-1">
                    <v-badge dot style="z-index: 9999;">
                    </v-badge>
                      <v-img src="../icons/BehPardakht-Mellat-Mela-Medium-way2pay-banner-93-06-24.svg"/>
                  </v-col>

                  <v-col md="3" class="white rounded-lg d-flex mx-2 my-2 elevation-1">
                    <v-badge dot style="z-index: 9999;">
                    </v-badge>
                      <v-img src="../icons/BehPardakht-Mellat-Mela-Medium-way2pay-banner-93-06-24.svg"/>
                  </v-col>

                  <v-col md="3" class="white rounded-lg d-flex mx-2 my-2 elevation-1">
                    <v-badge dot style="z-index: 9999;">
                    </v-badge>
                      <v-img src="../icons/BehPardakht-Mellat-Mela-Medium-way2pay-banner-93-06-24.svg"/>
                  </v-col>
                  <!-- end pardakht item -->
                </v-row>
              </section>
            </v-col>
            <!-- start table Payments -->
            <v-col cols="12" class="mt-5">
              <v-simple-table>
                <template v-slot:default>
                  <!-- start table header -->
                  <thead>
                    <tr>
                      <th class="grey lighten-3 rounded-r-lg text-center">وضعیت</th>
                      <th class="grey lighten-3 text-center">مقدار</th>
                      <th class="grey lighten-3 text-center">ریال</th>
                      <th class="grey lighten-3 text-center">تاریخ</th>
                      <th class="grey lighten-3 rounded-l-lg text-center">توضیحات</th>
                    </tr>
                  </thead>
                  <!-- end table header -->
                  <tbody class="white">
                    <tr class="text-center">
                      <td class="rounded-r-lg">
                        <div>
                          <v-badge dot color="red" offset-y="-2" offset-x="20">
                          </v-badge>
                          <span>لغو شد</span>
                        </div>
                      </td>
                      <td class="text-center">
                        <span>$ 35440</span>
                      </td>
                      <td>
                        <span>35440</span>
                      </td>
                      <td>
                        <span>5 فروردین 1401</span>
                      </td>
                      <td class="rounded-l-lg">
                        <div class="d-flex justify-space-between align-center">
                        <span>پرداخت با به پرداخت ملت پرداخت با به پرداخت ملت</span>
                        <v-btn outlined color="primary" class="custom-btn-outline rounded-lg">جزییات</v-btn>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-center">
                      <td class="rounded-r-lg">
                        <div>
                          <v-badge dot color="red" offset-y="-2" offset-x="20">
                          </v-badge>
                          <span>لغو شد</span>
                        </div>
                      </td>
                      <td class="text-center">
                        <span>$ 35440</span>
                      </td>
                      <td>
                        <span>35440</span>
                      </td>
                      <td>
                        <span>5 فروردین 1401</span>
                      </td>
                      <td class="rounded-l-lg">
                        <div class="d-flex justify-space-between align-center">
                        <span>پرداخت با به پرداخت ملت پرداخت با به پرداخت ملت</span>
                        <v-btn outlined color="primary" class="custom-btn-outline rounded-lg">جزییات</v-btn>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-center">
                      <td class="rounded-r-lg">
                        <div>
                          <v-badge dot color="red" offset-y="-2" offset-x="20">
                          </v-badge>
                          <span>لغو شد</span>
                        </div>
                      </td>
                      <td class="text-center">
                        <span>$ 35440</span>
                      </td>
                      <td>
                        <span>35440</span>
                      </td>
                      <td>
                        <span>5 فروردین 1401</span>
                      </td>
                      <td class="rounded-l-lg">
                        <div class="d-flex justify-space-between align-center">
                        <span>پرداخت با به پرداخت ملت پرداخت با به پرداخت ملت</span>
                        <v-btn outlined color="primary" class="custom-btn-outline rounded-lg">جزییات</v-btn>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-center">
                      <td class="rounded-r-lg">
                        <div>
                          <v-badge dot color="red" offset-y="-2" offset-x="20">
                          </v-badge>
                          <span>لغو شد</span>
                        </div>
                      </td>
                      <td class="text-center">
                        <span>$ 35440</span>
                      </td>
                      <td>
                        <span>35440</span>
                      </td>
                      <td>
                        <span>5 فروردین 1401</span>
                      </td>
                      <td class="rounded-l-lg">
                        <div class="d-flex justify-space-between align-center">
                        <span>پرداخت با به پرداخت ملت پرداخت با به پرداخت ملت</span>
                        <v-btn outlined color="primary" class="custom-btn-outline rounded-lg">جزییات</v-btn>
                        </div>
                      </td>
                    </tr>

                    <tr class="text-center">
                      <td class="rounded-r-lg">
                        <div>
                          <v-badge dot color="red" offset-y="-2" offset-x="20">
                          </v-badge>
                          <span>لغو شد</span>
                        </div>
                      </td>
                      <td class="text-center">
                        <span>$ 35440</span>
                      </td>
                      <td>
                        <span>35440</span>
                      </td>
                      <td>
                        <span>5 فروردین 1401</span>
                      </td>
                      <td class="rounded-l-lg">
                        <div class="d-flex justify-space-between align-center">
                        <span>پرداخت با به پرداخت ملت پرداخت با به پرداخت ملت</span>
                        <v-btn outlined color="primary" class="custom-btn-outline rounded-lg">جزییات</v-btn>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
            <!-- end tablr payments -->
          </v-row>
        </v-card-actions>
        <!-- end content -->
      </v-card>
    </v-col>
    <!-- end pardakht items -->
  </v-row>
</template>
<script>

export default {
  setup() {
    
  },
  layout:'dashboard'
}
</script>
<style lang="scss" scoped>  
  tbody {
     tr:hover {
        background-color: transparent !important;
     }
     tr:hover td{
        background-color: rgba(234, 242, 255,0.5) !important;
     }
     td{
       border: none !important;
       padding-top: 150px;
     }
  }
  .custom-btn-outline{
    transition: 0.3s;
  }
  .custom-btn-outline:hover{
    background: #508ff4;
    color: #fff !important;
  }
</style>


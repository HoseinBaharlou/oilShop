<template>
    <div>
        <!-- start title -->
        <h1 class="text-center text-md-justify">قوانین ارسال فایل</h1>
        <!-- start content -->
        <p class="font-size-25 text-center text-md-justify mt-5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <!-- start dropzone -->
        <vue2Dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" :useCustomSlot="true" class="mt-16 elevation-3 rounded-lg dropzone">
            <v-row>
                <v-col cols="12">
                    <div class="d-flex justify-center">
                        <v-img src="image/Rectangle 241.png" lazy-src="image/Rectangle 241.png" max-height="279" max-width="279" />
                    </div>
                    <p class="deep-purple--text font-size-30">
                        بکشید و رها کنید
                    </p>
                </v-col>
            </v-row>
        </vue2Dropzone>
    </div>
</template>
<script>


export default {
  name: 'app',
  data: function () {
    return {
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" },
          addRemoveLinks: true
      }
    }
  }
}
</script>

<template>
    <div>
        <!-- start title -->
        <h1 class="text-center text-md-justify">قوانین ارسال فایل</h1>
        <!-- start content -->
        <p class="font-size-25 text-center text-md-justify mt-5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <!-- start uploader -->
        <v-file-input dense outlined @change="sendFile($event)"></v-file-input>
    </div>
</template>
<script>
export default {
  name: 'app',
  methods:{
    sendFile(event){
      const file = event
      //check empty file
      if (!file){
        return
      }
      //append data
      const Fd = new FormData()
      Fd.append('file',file,file.name)
      Fd.append('level','1')
      //send data
      this.$axios.post('/analyze',Fd).then((res)=>{
        this.$swal({
          type: 'success',
          title: 'موفق',
          text: res.data.success,
          confirmButtonText: 'باشه'
        })}
      ).catch(er=>{
        this.$swal({
          type: 'error',
          title: 'خطا!',
          text: er.response.data.errors,
          confirmButtonText: 'باشه'
        })
      })
    }
  }
}
</script>

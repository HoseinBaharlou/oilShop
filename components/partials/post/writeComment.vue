<template>
<section>
    <!-- start card -->
    <v-card class="mt-8" elevation="0">
        <v-card-actions class="d-block mx-3 elevation-5 mb-5">
            <!-- form -->
            <v-form class="w-100">
                <v-textarea auto-grow label="نظر خود را بنویسید..." v-model="content"></v-textarea>
            </v-form>

            <!-- send comment -->

            <div class="d-flex justify-space-between align-center w-100">
                <div>
                    <span class="mx-2">تعداد کلمات:255</span>
                </div>

                <v-btn color="green" class="white--text" @click="comment">ارسال نظر</v-btn>
            </div>
        </v-card-actions>
    </v-card>
</section>
</template>

<script>
export default {
  data() {
    return{
        content:null
    }
  },
  methods:{
    comment(){
      this.$axios.post(`comments/${this.$route.params.id}`,{'content':this.content}).then(res=>{
        console.log(res)
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

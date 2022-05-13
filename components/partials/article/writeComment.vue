<template>
<section>  
    <!-- start alert -->
    <div class="d-flex justify-space-between w-100 red px-3 py-1 rounded-l-xl">
        <div >
            <button @click="alert = false">
                <v-icon color="white">mdi-close</v-icon>
            </button>
            <span class="font-size-15 white--text">
            برای ارسال نظر باید در سایت عضو شوید
            </span>
        </div>

        <div>
            <v-btn rounded elevation="0" color="white" small>
                <span>ورود اتوماتیک</span>
                <v-icon color="red">mdi-google-plus</v-icon>
            </v-btn>
        </div>
    </div>
    <!-- start card -->
    <v-card class="mt-8" elevation="0"> 
        <v-card-actions class="d-block mx-3 elevation-5 mb-5">
            <!-- form -->
            <v-form class="w-100">
                <v-textarea auto-grow label="نظر خود را بنویسید..."></v-textarea>
            </v-form>

            <!-- send comment -->

            <div class="d-flex justify-space-between align-center w-100">
                <div>
                    <span class="mx-2">تعداد کلمات:255</span>
                    <span class="mx-2">تعداد لینک:55</span>
                </div>

                <v-btn color="green" class="white--text">ارسال نظر</v-btn>
            </div>
        </v-card-actions>
    </v-card>
</section>
</template>

<script>
export default {
    data() {
        return{
            alert:true
        }
    },
}
</script>
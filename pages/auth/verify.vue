<template>
    <section class="d-flex justify-center align-center w-100 otp-page">
        <h1>
            کد ارسال شده به ایمیل را اینجا وارد کنید لطفا بخش هرزنامه و اسپم خود را هم چک کنید
        </h1>
        <!-- otp field -->
        <div class="custom-otp d-flex align-center justify-center mt-5">
            <v-otp-input
            length="6"
            plain
            class="otp-field"
            ></v-otp-input>
        </div>
        <!-- btn -->
        <input class="custom-otp white--text mt-5 custom-btn-otp" value="تایید" type="submit">
    </section>
</template>
<script>
export default {
    layout:'auth'
}
</script>

<style lang='scss'>
.otp-page{
    flex-direction: column !important;
    .custom-otp{
        width: 90%;
    }
    @media only screen and (min-width: 960px) {
        .custom-otp{
            width: 500px !important;
        }
    }

    .custom-btn-otp{
        height: 60px;
        margin: auto;
        display: block !important;
        background: #5883FB !important;
    }

    .otp-field{
        direction: ltr !important;
    }
}

</style>

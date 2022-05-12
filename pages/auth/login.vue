<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" align="center">
            <form action="" method="post">
                <div class="input-auth d-flex align-center multi-inputs my-4 py-2">
                    <input type="email" class="text-center w-50" placeholder="ایمیل">
                    <v-divider vertical class="liner-vertical"></v-divider>
                    <input type="text" class="text-center w-50" placeholder="رمز عبور">
                </div>

                <div>
                    <input type="submit" value="ورود" class="auth-btn white--text">
                </div>
            </form>
        </v-col>
    </v-row>
</template>

<script>
export default {
    layout:'auth',
}
</script>
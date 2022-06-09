<template>
    <v-card>
        <v-card-title class="justify-center">
            <h5 class="border-bottom pb-2">
                <span>نویسنده:</span>
                <span>{{writer}}</span>
            </h5>
        </v-card-title>

        <v-card-text>
            <div class="d-flex justify-space-between my-2">
                <span>تعداد مقالات:</span>
                <span>56</span>
            </div>

            <div class="d-flex justify-space-between my-2">
                <span>تاریخ انتشار:</span>
                <span>{{updated_at.split(' ')[0]}}</span>
            </div>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
  props:['writer','updated_at']
}
</script>
<style scoped>
.border-bottom{
    border-bottom: 1px solid #707070;
}
</style>

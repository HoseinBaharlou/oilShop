<template>
    <!-- start calendar -->
    <v-card class="rounded-xl pa-5" elevation="6">
        <v-card-actions>
            <calendar/>
        </v-card-actions>
    </v-card>
    <!-- end calendar -->
</template>

<script>
import calendar from '../../components/partials/dashboard/Calendar.vue'
export default {
    layout:'dashboard',
    components:{calendar}
}
</script>

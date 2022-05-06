<template>
    <v-card>
        <!-- date public-->
        <v-card-text>
            <!-- start filter title -->
            <h2 class="mb-3">تاریخ انتشار</h2>
            <!-- end title -->
            <v-divider></v-divider>
            <!-- start chip -->
            <v-chip-group class="mt-3"
            v-model="neighborhoods"
            column
            multiple
            >
                <v-chip
                    filter
                    outlined
                >
                    فروردین
                </v-chip>
                <v-chip
                    filter
                    outlined
                >
                    اردیبهشت
                </v-chip>
                <v-chip
                    filter
                    outlined
                >
                    خرداد
                </v-chip>
                <v-chip
                    filter
                    outlined
                >
                    تیر 
                </v-chip>
                <v-chip
                    filter
                    outlined
                >
                    مرداد 
                </v-chip>
                <v-chip
                    filter
                    outlined
                >
                    شهرویور 
                </v-chip>

                    <v-chip
                    filter
                    outlined
                >
                    مهر 
                </v-chip>

                    <v-chip
                    filter
                    outlined
                >
                    آبان 
                </v-chip>

                    <v-chip
                    filter
                    outlined
                >
                    آذر 
                </v-chip>

                    <v-chip
                    filter
                    outlined
                >
                    دی 
                </v-chip>

                    <v-chip
                    filter
                    outlined
                >
                    بهمن 
                </v-chip>

                    <v-chip
                    filter
                    outlined
                >
                    اسفند 
                </v-chip>
            </v-chip-group>
            <!-- end chip -->
        </v-card-text>
        <!-- date filter public-->

        <!-- start filter writer -->
        <v-card-text>
            <!-- start filter title -->
            <h2 class="mb-3">نویسندگان</h2>
            <!-- end title -->
            <v-divider></v-divider>

            <!-- start chip -->
            <v-chip-group column multiple class="mt-3">
                <v-chip outlined filter>
                    حسین قولی
                </v-chip>
                <v-chip outlined filter>
                    احسان مهدوی
                </v-chip>
            </v-chip-group>
            <!-- end chip -->
        </v-card-text>
        <!-- end filter writer -->
    </v-card>
</template>
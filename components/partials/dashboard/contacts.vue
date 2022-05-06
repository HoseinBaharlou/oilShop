<template>
    <v-navigation-drawer class="rounded-r-xl elevation-10" v-model="drawer">
        <div  class="px-5">
            <v-text-field label="پیدا کردن مخاطبین"><v-icon slot="append" color="grey" label="پیدا کردن مخاطبین">mdi-magnify</v-icon></v-text-field>
        </div>
        <v-list-item-group v-model="model">
            <v-list-item>
                <v-list-item-icon class="ml-4">
                    <v-badge dot color="green" overlap avatar offset-x="40">
                        <v-avatar>
                            <v-img src="../icons/Oval.svg" lazy-src="../icons/Oval.svg" class="px-0" />
                        </v-avatar>
                    </v-badge>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-badge color="grey darken-3" offset-x="20" offset-y="23" content="6">
                        <v-list-item-title>کلاه قرمزی</v-list-item-title>
                    </v-badge>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
            <v-list-item-icon class="ml-4">
                <v-badge dot color="green" overlap avatar offset-x="40">
                <v-avatar>
                    <v-img src="../icons/Oval2.svg" lazy-src="../icons/Oval2.svg" class="px-0" />
                </v-avatar>
                </v-badge>
            </v-list-item-icon>
            <v-list-item-content>
                <v-badge color="grey darken-3" offset-x="20" offset-y="23" content="6">
                <v-list-item-title>کلاه قرمزی</v-list-item-title>
                </v-badge>
            </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon class="ml-4">
                    <v-badge dot color="green" overlap avatar offset-x="40">
                    <v-avatar>
                        <v-img src="../icons/Oval1.svg" lazy-src="../icons/Oval1.svg" class="px-0" />
                    </v-avatar>
                    </v-badge>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-badge color="grey darken-3" offset-x="20" offset-y="23" content="6">
                    <v-list-item-title>کلاه قرمزی</v-list-item-title>
                    </v-badge>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon class="ml-4">
                    <v-badge dot color="green" overlap avatar offset-x="40">
                    <v-avatar>
                        <v-img src="../icons/Oval3.svg" lazy-src="../icons/Oval3.svg" class="px-0" />
                    </v-avatar>
                    </v-badge>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-badge color="grey darken-3" offset-x="20" offset-y="23" content="6">
                    <v-list-item-title>کلاه قرمزی</v-list-item-title>
                    </v-badge>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon class="ml-4">
                    <v-badge dot color="green" overlap avatar offset-x="40">
                    <v-avatar>
                        <v-img src="../icons/Oval4.svg" lazy-src="../icons/Oval4.svg" class="px-0" />
                    </v-avatar>
                    </v-badge>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-badge color="grey darken-3" offset-x="20" offset-y="23" content="6">
                    <v-list-item-title>کلاه قرمزی</v-list-item-title>
                    </v-badge>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon class="ml-4">
                    <v-badge dot color="green" overlap avatar offset-x="40">
                    <v-avatar>
                        <v-img src="../icons/Oval5.svg" lazy-src="../icons/Oval5.svg" class="px-0" />
                    </v-avatar>
                    </v-badge>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-badge color="grey darken-3" offset-x="20" offset-y="23" content="6">
                    <v-list-item-title>کلاه قرمزی</v-list-item-title>
                    </v-badge>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon class="ml-4">
                    <v-badge dot color="green" overlap avatar offset-x="40">
                    <v-avatar>
                        <v-img src="../icons/Oval6.svg" lazy-src="../icons/Oval6.svg" class="px-0" />
                    </v-avatar>
                    </v-badge>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-badge color="grey darken-3" offset-x="20" offset-y="23" content="6">
                    <v-list-item-title>کلاه قرمزی</v-list-item-title>
                    </v-badge>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-navigation-drawer>
</template>
<script>

export default {
    setup() {
        
    },
    data:()=>{
        return{
            drawer:true
        }
    }
}
</script>

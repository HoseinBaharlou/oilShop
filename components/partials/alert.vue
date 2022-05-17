<template>
    <div>
        <div>
            <v-alert :type="type" dense v-if="message.errors">{{message.errors}}</v-alert>
            <v-alert :type="type" dense v-if="message">{{message}}</v-alert>
        </div>
    </div>
</template>
<script>
export default {
    props:['type','message'],
}
</script>
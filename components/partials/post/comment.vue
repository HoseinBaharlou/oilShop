<template>
    <div>
      <v-card class="comment">
        <!-- title -->
        <v-card-title class="justify-space-between">
          <h5>{{data.user.name}}</h5>

          <h5>{{$moment(data.created_at).fromNow()}}</h5>
        </v-card-title>

        <v-divider></v-divider>
        <!-- comment -->
        <v-card-text>
          <p>
            {{data.content}}
          </p>
        </v-card-text>
        <!-- like and show and share -->
        <v-card-actions class="justify-end">
          <v-icon v-if="$auth.loggedIn && canDeleteComment(['delete_comment'])" @click="deleteComment" class="mx-2">mdi-trash-can-outline</v-icon>

          <v-icon v-if="$auth.loggedIn" @click="showReply = true" class="mx-2">mdi-undo</v-icon>
        </v-card-actions>
      </v-card>
<!--      write comment-->
      <div v-if="showReply">
        <!-- form -->
        <v-form class="w-100">
          <v-textarea auto-grow label="پاسخ خود را بنویسید..." v-model="reply.content" outlined class="mt-3"></v-textarea>
        </v-form>

        <!-- send comment -->

        <div class="d-flex justify-space-between align-center w-100">
          <div>
            <span class="mx-2">تعداد کلمات:255</span>
          </div>
          <v-spacer></v-spacer>
          <v-btn color="info" @click="cancelReply" class="white--text mx-2">لغو پاسخ</v-btn>
          <v-btn color="green" class="white--text mx-2" @click="saveReply">ارسال پاسخ</v-btn>
        </div>
      </div>
<!--      replies-->
      <comment class="ml-10" v-for="item in data.replies" :key="item.id" :data="item"/>
    </div>
</template>
<script>
import writeComment from "@/components/partials/post/writeComment";
import {ref,useRoute,useStore} from '@nuxtjs/composition-api'
import axios from 'axios'
import swal from 'sweetalert2'
export default {
  props:['data','margin'],
  setup(props){
    //state
    const showReply = ref(false);
    const route = useRoute();
    const store = useStore();
    const reply = ref({
      content:null,
      comment_id:props.data.id
    })
    //methods
    const saveReply = ()=>{
      axios.post(`${process.env.baseUrlApi}/comments/replies/${route.value.params.id}`,reply.value,{
        withCredentials:true
      }).then(res=>{
        swal({
          type:'success',
          title:'موفق',
          text:res.data.success,
          confirmButtonText:'باشه'
        })
      }).catch(er=>{
        swal({
          type:'error',
          title:'خطا!',
          text:er.response.data.errors,
          confirmButtonText:'باشه'
        })
      })
    }

    const cancelReply = ()=>{
      showReply.value = false
      reply.value.content = null
    }


    const deleteComment = ()=>{
      axios.delete(`${process.env.baseUrlApi}/comments/${props.data.id}`,{withCredentials:true}).then(res=>{
        swal({
          type:'success',
          title:'موفق',
          text:res.data.success,
          confirmButtonText:'باشه'
        })
      })
    }
    return {
      showReply,
      reply,
      cancelReply,
      saveReply,
      deleteComment
    }
  },
  components:{writeComment},
  methods:{
    canDeleteComment(permissions){
      return permissions.some(permissions=>this.$auth.user.permission.includes(permissions))
    },
  }
}
</script>
<style lang='scss'>
.show-article{
    .v-badge__badge{
        color: #000000 !important;
    }
}

</style>

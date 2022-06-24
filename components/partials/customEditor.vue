<template>
  <v-row class="my-3">
    <v-col cols="12" class="custom-ToolbarEditor pa-2">
<!--      tools editor-->
      <div v-if="editor">
        <v-btn small elevation="0" text @click="editor.chain().focus().toggleBold().run()" class="grey rounded-0" :class="{'info--text':editor.isActive('bold')}">
          <v-icon>mdi-format-bold</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().toggleItalic().run()" class="grey rounded-0" :class="{'info--text':editor.isActive('italic')}">
          <v-icon>mdi-format-italic</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().toggleStrike().run()" class="grey rounded-0" :class="{'info--text':editor.isActive('strike')}">
          <v-icon>mdi-format-strikethrough-variant</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().setParagraph().run()" class="grey rounded-0" :class="{'info--text': editor.isActive('paragraph') }">
          <v-icon>mdi-format-paragraph</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().toggleHeading({level:1}).run()"  class="grey rounded-0"  :class="{'info--text':editor.isActive('heading',{level:1})}">
          <v-icon>mdi-format-header-1</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().toggleHeading({level:2}).run()" class="grey rounded-0"  :class="{'info--text':editor.isActive('heading',{level:2})}">
          <v-icon>mdi-format-header-2</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().toggleHeading({level:3}).run()" class="grey rounded-0"  :class="{'info--text':editor.isActive('heading',{level:3})}">
          <v-icon>mdi-format-header-3</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().toggleHeading({level:4}).run()" class="grey rounded-0"  :class="{'info--text':editor.isActive('heading',{level:4})}">
          <v-icon>mdi-format-header-4</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().toggleHeading({level:5}).run()" class="grey rounded-0"  :class="{'info--text':editor.isActive('heading',{level:5})}">
          <v-icon>mdi-format-header-5</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().toggleHeading({level:6}).run()" class="grey rounded-0"  :class="{'info--text':editor.isActive('heading',{level:6})}">
          <v-icon>mdi-format-header-6</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().setTextAlign('right').run()" class="grey rounded-0" :class="{'info--text': editor.isActive({textAlign:'right'}) }">
          <v-icon>mdi-format-align-right</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().setTextAlign('center').run()" class="grey rounded-0" :class="{'info--text': editor.isActive({textAlign:'center'}) }">
          <v-icon>mdi-format-align-center</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().setTextAlign('justify').run()" class="grey rounded-0" :class="{'info--text': editor.isActive({textAlign:'justify'}) }">
          <v-icon>mdi-format-align-justify</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().setTextAlign('left').run()" class="grey rounded-0" :class="{'info--text': editor.isActive({textAlign:'left'}) }">
          <v-icon>mdi-format-align-left</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().toggleBulletList().run()" class="grey rounded-0" :class="{'info--text':editor.isActive('bulletList')}">
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="editor.chain().focus().toggleOrderedList().run()" class="grey rounded-0" :class="{'info--text':editor.isActive('orderedList')}">
          <v-icon>mdi-order-numeric-descending</v-icon>
        </v-btn>
        <v-btn small elevation="0" text @click="$refs.image.click()" class="grey rounded-0">
          <v-icon>mdi-image</v-icon>
          <input type="file" class="d-none" ref="image" @change="changeUploader($event)"/>
        </v-btn>
        <v-btn @click="appendLink" small elevation="0" class="grey rounded-0" :class="{'info--text':editor.isActive('link')}">
          <v-icon>mdi-link</v-icon>
        </v-btn>

        <v-btn @click="editor.chain().focus().unsetLink().run()" small elevation="0" class="grey rounded-0" :disabled="!editor.isActive('link')">
          <v-icon>mdi-link-off</v-icon>
        </v-btn>
<!--        font size-->
        <v-select v-model="selected" :options="options" class="my-2"></v-select>
<!--        picker-->
        <v-dialog max-width="200">
          <template v-slot:activator="{attr,on}">
            <v-btn v-on="on" v-bind="attr" class="my-3">
              <span>تغییر رنگ</span>
              <v-chip class="rounded-circle" small :style="{'background-color':TextColor.hex}"></v-chip>
            </v-btn>
          </template>

          <v-color-picker v-model="TextColor"></v-color-picker>
        </v-dialog>
      </div>
<!--      editor-->
      <editor-content :editor="editor" class="custom-editor"/>

<!--      save-->
      <v-btn @click="save" class="white--text" color="green">ذخیره تغییرات</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import {Editor,EditorContent,BubbleMenu} from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import fontSize from 'tiptap-extension-font-size'
import Image from '@tiptap/extension-image'
import Color from '@tiptap/extension-color'
import TextAlign from '@tiptap/extension-text-align'
import URl from '@tiptap/extension-link'
import Document from '@tiptap/extension-document'
export default {
  name: "customEditor",
  components:{Editor,EditorContent,BubbleMenu},
  props: {
    value:{
      type:String,
      default:''
    },
    namePage:{type:String},
    typePage:{type:String}
  },
  data(){
    return{
      editor:null,
      font_size:[],
      selected:{'label':'15px','id':1},
      options:[],
      TextColor:{'hex':'#000'}
    }
  },
  methods:{
    //upload file when change uploader
    changeUploader(event){
      const file = event.target.files[0]
      const Fd = new FormData()
      Fd.append('file',file,file.name)
      this.$axios.post('/content/uploadImage',Fd).then(res=>{
        this.editor.chain().focus().setImage({src:res.data.fileName}).run()
      }).catch(er=>{
        this.$swal({
          type: 'error',
          title: 'خطا!',
          text: er.response.data.errors,
          confirmButtonText: 'باشه'
        })
      })

    },
    //append link to text
    appendLink(){
      const previousUrl = this.editor.getAttributes('link').href

      const url = window.prompt('URL',previousUrl)

      // cancelled
      if (url === null) {
        return
      }

      // empty
      if (url === '') {
        this.editor
          .chain()
          .focus()
          .extendMarkRange('link')
          .unsetLink()
          .run()

        return
      }
      // update link
      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
      },
    //save content
    save(){
      this.$axios.post('/content',{'body':this.editor.getHTML(),'name':this.namePage,'type':this.typePage}).then((res)=>{
        this.$swal({
          type:'success',
          title:'موفق',
          text:res.data.success,
          confirmButtonText:'باشه'
        })
      }).catch((er)=> {
        this.$swal({
          type: 'error',
          title: 'خطا!',
          text: er.response.data.errors,
          confirmButtonText: 'باشه'
        })
      })
    }
  },
  watch:{
    selected(value){
      if (value){
        this.editor.chain().focus().setFontSize(`${value.label}`).run()
      }
    },

    TextColor(value){
        this.editor.chain().focus().setColor(value.hex).run()
    }
  },
  mounted() {
    if (this.$auth.loggedIn){
      let permissions = ['page_manager']
      const result = permissions.some(permissions=>this.$auth.user.permission.includes(permissions))
      this.$emit('PageManager',result)
    }
    this.editor = new Editor({
      extensions:[
        StarterKit,fontSize,TextStyle,Color,Document,URl,Image.configure({
          HTMLAttributes:{
            class:'custom_image_editor'
          }
        }),TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
      ],
      content:`${this.value}`,
    })
    //default font size
    this.editor.chain().focus().setFontSize(`${this.selected.label}`).run()
    //list font size
    let index = 0;
    for (let i=1;i<25;i++){
      this.options[index] = {'label':i*5+'px','id':index}
      index++
    }
  },
  updated() {
      this.$emit('event_contents',this.editor.getHTML())
  }
}
</script>

<style scoped lang="scss">
.custom-ToolbarEditor{
  border: 2px solid grey;
  border-radius: 5px;
}

.custom-editor{
  direction: ltr !important;
}
</style>
<style>
.custom_image_editor{
  max-width: 100%;
  height: auto;
}
</style>

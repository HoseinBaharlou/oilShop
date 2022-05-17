export default (context)=>{
    if(context.store.getters.isVerifiedEmail){
        context.redirect('/auth/login')
    }
}
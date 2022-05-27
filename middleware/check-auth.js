export default ({app,redirect})=>{
  if (app.$auth.user){
    const email = app.$auth.user.email
    if (email && (app.$auth.user && app.$auth.user.email_verified_at == null)){
      return redirect('/auth/verify');
    }
  }
}

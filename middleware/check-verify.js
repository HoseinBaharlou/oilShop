export default ({app,redirect})=>{
  if (app.$auth.user){
    if (app.$auth.user.email_verified_at == null){
      return true
    }else{
      return redirect('/');
    }
  }else {
    const email = app.$cookies.get('email')
    if (!email){
      return redirect('/');
    }
  }
}

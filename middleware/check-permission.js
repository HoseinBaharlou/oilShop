export default ({app,redirect})=>{
  if (app.$auth.loggedIn){
    if (!canShowLinks(['show_admin_panel'])){
      return redirect('/user/profile')
    }
  }
  //check permission
  function canShowLinks(permissions){
    return permissions.some(permissions=>app.$auth.user.permission.includes(permissions))
  }
}

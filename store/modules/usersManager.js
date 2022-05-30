const usersManager = {
  namespaced:true,
  state:{
    users:[],
    last_page:0,
    current_page:0,
    roles:[],
    permissions:[],
    get_roles_For_update:{
      name:'',
      persian_name:'',
      permissions:[],
      listPermissions:null
    }
  },
  mutations:{
    USERS_LIST(state,res){
      state.users = res
    },
    //ROles
    ROLE_LIST(state,res){
      state.roles = res
    },
    //Permissions
    PERMISSION_LIST(state,res){
      state.permissions = res
    },
    //add roles for update roles
    UPDATE_ROLES(state,res){
      state.get_roles_For_update.name = res.roles.name
      state.get_roles_For_update.persian_name = res.roles.persian_name
      state.get_roles_For_update.listPermissions = res.permissions
      res.roles.permissions.forEach(function (elem){
        state.get_roles_For_update.permissions.push(elem.name)
      })
    }
  },
  actions:{
    async users_list({commit},res){
      await commit("USERS_LIST",res)
    },
    //roles
    async roles_list({commit},res){
      await commit('ROLE_LIST',res)
    },

    //Permissions
    async permission_list({commit},res){
      await commit('PERMISSION_LIST',res)
    },
    //commit roles for update roles
    async update_Roles({commit},res){
      await commit('UPDATE_ROLES',res)
    }
  },
  getters:{
    usersList(state){
      if (state.users){
        return state.users
      }
      return false
    },

    //roles
    rolesList(state){
      return state.roles
    },

    //permission
    permissionList(state){
      return state.permissions
    },
    // get roles for update roles
    update_roles(state){
      return state.get_roles_For_update
    }
  }
}

export default usersManager;

const initialState = {
  menus : [
    {
      group_name : 'GENERAL',
      menu : [
        {
          title : 'Dashboard',
          icon : 'fa fa-tachometer',
          url : '/dashboard',
          childs : []
        }
      ]
    },
    {
      group_name : 'ADMINISTRATION',
      menu : [
        {
          title : 'Settings',
          icon : 'fa fa-wrench',
          url : '#',
          childs : [
            {
              title : 'Users',
              icon : 'fa fa-users',
              url : '/users',
            },
            {
              title : 'Roles',
              icon : 'fa fa-users',
              url : '/roles',
            },
            {
              title : 'Permissions',
              icon : 'fa fa-users',
              url : '/permissions',
            },
          ]
        }
      ]
    },
  ]
};

export default function menuReducer(state = initialState, action) {
  return state;
}

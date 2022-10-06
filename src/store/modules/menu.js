import { handelAlltab } from "../../api/limits";
export default {
  namespaced: true,
  state: {
    //按钮权限
    authList: [],
    //菜单权限
    menuList: [],
    //路有权限
    routerList: [],
  },
  mutations: {
    getMenuList(state,obj){
        state.menuList=obj
    },
    getAuthList(state,obj){
        state.authList = obj
    },
    getRouterList(state,obj){
        state.routerList = obj
    },

    handleAddRote(state,router){
      state.routerList.forEach(item=>{
        console.log(item);
        if (item.path=='/document') {
          item.name=item.path.slice(1)
        }
        const obj = {
          path:item.path, 
          name:item.name,
          component: resolve => require([`@/views${item.url}.vue`], resolve),
          meta:{
            title:item.label
          },
        }
        router.addRoute('home',obj)
      })
      console.log(router.getRoutes());
    },
  },
  actions: {
    async renderTab({commit},router) {
      console.log(router,'router');
      try {
        const handTab = await handelAlltab();
        console.log(handTab);
        commit('getMenuList',handTab.data.menuList)
        commit('getAuthList',handTab.data.authList)
        commit('getRouterList',handTab.data.routerList)
        commit('handleAddRote',router)
        return handTab.data
      } catch (error) {
        console.log(error);
      }
    },
  },
};

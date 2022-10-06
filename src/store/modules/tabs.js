export default {
  namespaced: true,
  state: {
    list: [
      {
        title: "首页",
        path: "/homes",
        name: "homes",
      },
    ],
    activeName: "homes",
  },
  mutations: {
    getTabs(state){
      let getList = JSON.parse(localStorage.getItem('tabs'))
      if (getList) {
        state.list = getList
      }
    },
    listPu(state, newVal) {
      console.log(newVal.path);
      let arr = state.list.find((item) => item.path == newVal.path);
      if (!arr) {
        state.list.push({
          title: newVal.meta.title,
          path: newVal.path,
          name: newVal.name,
        });
      } 
      console.log(state.list,'state.list');
      state.activeName=newVal.name
      localStorage.setItem('tabs',JSON.stringify(state.list))
    },
    removeList(state,obj){
      state.list=obj
      localStorage.setItem('tabs',JSON.stringify(state.list))
    },
    activeChange(state,str){
      state.activeName = str
    }

  },
  actions: {},
};

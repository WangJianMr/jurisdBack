import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import store from "../store";
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: '/404',
    component: () => import('../views/404')
  },
  {
    path: "/",
    name: "home",
    component: () => import("../entire/home.vue"),
    redirect: "/homes",
    children: [
      {
        path: "/homes",
        name: "homes",
        component: () => import("../views/Homes.vue"),
        // meta: {
        //   title: "首页",
        //   path: "/homes",
        // },
      },
      // {
      //   path: "system",
      //   name: "system",
      //   component: () => import("../views/system"),
      //   children: [
          // {
          //   path: "/department",
          //   name: "department",
          //   component: () => import("../views/system/Department.vue"),
          //   meta: {
          //     title: "机构管理",
          //     path: "/department",
          //   },
          // },
          // {
          //   path: "/userList",
          //   name: "userList",
          //   component: () => import("../views/system/UserList.vue"),
          //   meta: {
          //     title: "用户管理",
          //     path: "/userList",
          //   },
          // },
          // {
          //   path: "/roleList",
          //   name: "roleList",
          //   component: () => import("../views/system/RoleList.vue"),
          //   meta: {
          //     title: "角色管理",
          //     path: "/roleList",
          //   },
          // },
          // {
          //   path: "/menuList",
          //   name: "menuList",
          //   component: () => import("../views/system/MenuList.vue"),
          //   meta: {
          //     title: "权限管理",
          //     path: "/menuList",
          //   },
          // },
      //   ],
      // },
      // {
      //   path: "/good",
      //   name: "good",
      //   component: () => import("../views/good"),
      //   children: [
      //     {
      //       path: "/goodCategory",
      //       name: "goodCategory",
      //       component: () => import("../views/good/goodCategory.vue"),
      //       meta: {
      //         title: "分类管理",
      //         path: "/goodCategory",
      //       },
      //     },
      //   ],
      // },
    ],
  },
];

const router = new VueRouter({
  routes,
});
// let arr = store.getters.routerList;

// arr.forEach((item) => {
//   console.log(item);
// });

// router.addRoute('home',)

export default router;

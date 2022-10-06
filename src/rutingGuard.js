import router from "./router";
import store from "./store";
import { remove } from "./utils/auth";
let arr = ["/404", "/401", "/login"];
router.beforeEach(async (to, from, next) => {
  const token = store.getters.TOKEN;
  if (token) {
    if (to.path == "/login") {
      next(from.path);
    } else {
      const a = store.getters.menuList;
      if (a && a.length > 0) {
        next();
      } else {
        try {
          console.log("789");
          const res = await store.dispatch("menu/renderTab", router);
          if (!res) {
            remove();
            next("/login");
          } else {
            next(to.path);
          }
          next()
        } catch (error) {
          console.log(error);
          remove();
          next("/login");
        }
      }
    }
  } else {
    if (arr.indexOf(to.path) !== -1) {
      next();
    } else {
      next("/login");
    }
  }
});

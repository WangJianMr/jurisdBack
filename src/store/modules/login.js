import { setcookieken, getcookieken } from "../../utils/auth";
import { handelLogin } from "../../api/login";
export default {
  namespaced: true,
  state: {
    token: getcookieken() || "",
  },
  mutations: {
    handleLogin(state, obj) {
      state.token = obj.token;
      setcookieken(obj.token);
    },
  },
  actions: {
    async handleLogin({ commit }, str) {
      try {
        const hanLog = await handelLogin(str);
        commit("handleLogin", hanLog);
        return hanLog;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

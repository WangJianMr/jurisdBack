import axios from "axios";
import store from "../store/index";
import { Message } from "element-ui";
import { remove } from "../utils/auth";
const instance = axios.create({
  baseURL: "http://119.45.133.128:8089",
  timeout: 5000,
});
// process.env.VUE_APP_BASE_API

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = store.getters.TOKEN;
    if (token) config.headers.token = token;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
let message = Message;
instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    if (response.status < 400) {
      if (response.data.code === 500) {
        message.error(response.data.msg);
        return;
      } else if (response.data.code === 600) {
        remove();
        message.error(response.data.msg);
        window.location.href = "/login ";
        return;
      }
      return response.data;
    }
    console.log("456");
    return response;
  },
  function (error) {
    console.log("123");
    // Do something with response error
    return Promise.reject(error);
  }
);

const request = (options) => {
  options.method = options.method || "get";
  if (options.method.toLocaleLowerCase() === "get") {
    options.params = options.data || options.params;
    delete options.data;
  }
  return instance(options);
};

export default request;

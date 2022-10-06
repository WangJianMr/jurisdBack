import request from "../utils/request";
export const handelLoginImg = () => {
  return request({
    url: "/api/sysUser/image",
    method: "POST",
    responseType: "blob",
  });
};
export const handelLogin = (data) => {
  return request({
    url: "/api/user/login",
    method: "post",
    data,
  });
};
export const handelLoginOut = () => {
  return request({
    url: "/api/sysUser/loginOut",
    method: "post",
  });
};

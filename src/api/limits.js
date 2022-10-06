import request from "../utils/request";
export const handelAlltab = () => {
  return request({
    url: "/api/sysUser/getPermissionList",
    method: "get",
  });
};

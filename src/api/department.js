import request from "../utils/request";
export const getDepartmentList = () => {
  return request({
    url: "/api/department/list",
    method: "get",
  });
};
export const getDeparmentTreeList = () => {
  return request({
    url: "/api/department/parent",
    method: "get",
  });
};

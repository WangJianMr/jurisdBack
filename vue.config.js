const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/api":{
        target:'http://119.45.133.128:8089',
        changeOrigin:true,
        pathRewrite:{
          "^/api":''
        }
      },
    },
  },

  // devServer: {
  //   proxy: {
  //     // 代理名称
  //     [process.env.VUE_APP_BASE_API]: {
  //       // 跨域的地址
  //       target: process.env.VUE_APP_SERVICE_URL, // 开启跨域
  //       changeOrigin: true, // 路径重写
  //       pathRewrite: {
  //         ["^" + process.env.VUE_APP_BASE_API]: "",
  //       },
  //     },
  //   },
  // },
});

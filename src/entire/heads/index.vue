<template>
  <div class="heads">
    <div class="felx1">Vue、Element UI权限管理系统开发实战</div>
    <div class="felx2">
      <el-dropdown @command="handleCommand" placement="bottom-start">
        <span class="el-dropdown-link">
          <img src="@/assets/logo.png" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="b">还原数据</el-dropdown-item>
          <el-dropdown-item command="c">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div>
        <p>欢迎您，嘤嘤嘤</p>
        <p>{{ times }} {{ week }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {handelLoginOut} from '../../api/login'
import {  remove} from "../../utils/auth";
import moment from "moment";
import "moment/locale/zh-cn";
export default {
  data() {
    return {
      times: moment().format("YYYY.MM.DD HH:mm:ss"),
      that: null,
    };
  },
  methods: {
    handleCommand(val){
      console.log(val);
      if (val==='c') {
        this.loginOut()
      }
    },
    async loginOut(){
      try {
        const out = await handelLoginOut()
         this.$store.commit('login/handleLogin','')
         this.$router.push('/login')
        console.log(out);
      } catch (error) {
        
      }
    },
  },
  computed: {
    week() {
      return moment().format("dddd");
    },
  },
  mounted() {
    this.that = setInterval(() => {
      this.times = moment().format("YYYY.MM.DD HH:mm:ss");
    }, 1000);
  },
  destroyed() {
    if (this.that) {
      clearInterval(this.that);
    }
  },
};
</script>

<style>
.heads {
  width: 100%;
  height: 100%;
  background-color: #167bd8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #fff;
  box-sizing: border-box;
}
.felx1 {
  font-size: 20px;
}
.felx2 {
  display: flex;
  align-items: center;
}
.felx2 img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
</style>

<template>
  <div class="home">
    <el-container>
      <el-header>
        <heads />
      </el-header>
      <el-container>
        <el-aside width="auto">
          <asid :isCollapse="isCollapse" />
        </el-aside>
      <el-container>
        <el-main>
          <mains :isCollapse="isCollapse" @isCollapseChange="isCollapseChange"></mains>
        </el-main>
        <el-footer><span>Copyright © 2020 - 2021 . 秘咖学堂.All Rights Reserved</span></el-footer>
      </el-container>
        
      </el-container>
    </el-container>
  </div>
</template>

<script>
import heads from "./heads/index.vue";
import asid from "./asid/index.vue";
import mains from "./main/index.vue";
export default {
  components: {
    heads,
    asid,
    mains,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    isCollapseChange(val){
      this.isCollapse=val
    },
  },
};
</script>

<style lang="scss" scoped>
.home,
section {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  padding: 0;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  padding: 0;
  height: 100%;
  border-right: 1px solid rgb(228, 225, 225);
  transition: all .5s;
}

.el-main {
  background-color: #fff;
  color: #333;
  height: 100%;
  padding: 0;
}
.el-footer{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

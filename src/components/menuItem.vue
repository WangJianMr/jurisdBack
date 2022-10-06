<template>
  <fragment>
    <template v-for="item in tabList">
      <el-submenu :index="item.path" v-if="item.children && item.children.length > 0" :key="item.id">
        <template slot="title">
          <i :class="item.icon"></i>
          <span style="font-weight: 700">{{ item.label }}</span>
        </template>

        <menu-item :tabList="item.children"></menu-item>
      </el-submenu>

      <el-menu-item v-if="!item.children" :key="item.id" :index="item.path">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>

      <el-menu-item v-if="item.children && item.children.length == 0" :key="item.id" :index="item.path">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
    </template>
  </fragment>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    tabList: {
      type: [Array, Object],
      default: () => [],
    },
  },
};
</script>

<style>
.el-tabs__header{
  margin: 0 0 10px;
}
</style>

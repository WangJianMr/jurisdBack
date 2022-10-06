<template>
  <div>
    <el-table :data="allList" style="width: 100%" row-key="id" border default-expand-all :tree-props="{ children: 'children' }">
      <template v-for="item in headClassList">
        <el-table-column :prop="item.prop" :label="item.label">
        </el-table-column>
      </template>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <slot name="btn" :row="scope.row"></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    allList: {
      type: Array,
      default: () => [],
    },
    headClassList: {
      type: Array,
      default: () => [],
    },
  },
  created() {},
};
</script>

<style></style>

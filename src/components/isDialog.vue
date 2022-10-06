<template>
  <div>
    <el-dialog :title="title" :visible.sync="Visible" :width="dialoWidth" class="aa">

      <slot name="form"></slot>
      <slot name="tree"></slot>

      <span slot="footer" class="dialog-footer">
        <slot name="but"></slot>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    dialoWidth: {
      type: String,
      default: "",
    },
  },
  computed: {
    Visible: {
      get() {
        return this.dialogVisible;
      },
      set(val) {
        this.$emit("update:dialogVisible", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-dialog__header {
  background-color: #1890ff;
}
::v-deep .el-dialog__title {
  color: #fff;
}
::v-deep .el-dialog__footer {
  border-top: 1px solid #e8eaec !important;
}
::v-deep .el-dialog__close{
    color: #fff;
}
</style>

<template>
  <div>
    <el-form ref="form" :model="value" :inline="true" size="mini" :label-width="labelWidth" :rules="rules">
      <template v-for="item in formList">
        <el-form-item v-if="item.type==='input'" :label="item.label" :prop="item.prop">
          <el-input  v-model="value[item.prop]" v-bind="item" :style="item.width" @focus="treeFocus(item.prop)"></el-input>
        </el-form-item>
        <el-form-item v-if="item.type==='slot'">
          <slot :name="item.prop"></slot>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {},
    },
    formList: {
      type: Array,
      default: () => [],
    },
    labelWidth: {
      type: String,
      default: '',
    },
    rules:{
      type:Object,
      default:()=>{}
    },
  },
  methods: {
    treeFocus(prop){
      if (prop=='parentName') {
        this.$emit('treeFocus')
      }
    },
  },
};
</script>

<style></style>

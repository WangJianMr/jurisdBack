<template>
  <div >
    <div class="grid-content bg-purple">
      <div :style="styles" class="col_top">{{ num }}</div>
      <div :style="stylese" class="col_bottom">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: String,
      default: "0",
    },
    text: {
      type: String,
      default: "",
    },
    styles:{
        type:String,
        default:""
    },
    stylese:{
        type:String,
        default:""
    },
  },
};
</script>

<style>
.col_top {
  height: 90px;
  font-size: 45px;
  font-weight: 900;
  color: #fff;
  line-height: 90px;
  padding-left: 20px;
  border-radius: 4px 4px 0 0;
}
.col_bottom {
  height: 30px;
  background-color: #3399ff;
  color: #fff;
}
.bg-purple {
  margin-right: 20px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
